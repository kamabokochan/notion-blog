import { Client } from "@notionhq/client";
import axios from "axios";
import { existsSync, mkdirSync, writeFile } from "fs";
import { NotionToMarkdown } from "notion-to-md";
import { MdBlock } from "notion-to-md/build/types";
import path from "path";

const { NOTION_AUTH_TOKEN } = process.env;

if (!NOTION_AUTH_TOKEN) {
  console.error("NOTION_AUTH_TOKEN is not found");
  process.exit(1);
}

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_AUTH_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

function getImageUrl(MDImage: string) {
  const startIdx = MDImage.indexOf("(");
  const endIdx = MDImage.lastIndexOf(")");
  const altText = MDImage.substring(2, startIdx).trim();
  const url = MDImage.substring(startIdx + 1, endIdx).trim();

  return url;
}

function saveImage(mdblocks: MdBlock[], blockId: string) {
  return mdblocks.map(async (MdBlock) => {
    console.log(MdBlock);
    if (MdBlock.type === "image") {
      const imageUrl = getImageUrl(MdBlock.parent);
      const filePath = `notion/image/${blockId}/${MdBlock.blockId}.jpg`;
      const fullPath = `public/${filePath}`;
      const directory = path.dirname(`public/${filePath}`);

      // ファイルがすでに存在している場合は何もせずに終了
      if (existsSync(fullPath)) {
        return MdBlock;
      }

      // ディレクトリが存在しない場合は作成
      mkdirSync(directory, { recursive: true });

      // https://byby.dev/node-download-image
      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });

      writeFile(fullPath, response.data, (err) => {
        console.error(err);
      });

      // ![代替テキスト](画像のURL)
      MdBlock.parent = `![代替テキスト](/${filePath})`;
    }
    return MdBlock;
  });
}

(async () => {
  const databaseId = "044ded07ab224cd1b2e1b853550740d0";

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  // console.log(response.results[0].id);

  [response.results[3]].forEach(async (block) => {
    const blockId = block.id;
    const mdblocks = await n2m.pageToMarkdown(blockId);

    // 画像の保存と相対パスへの置換を行う
    const newMdBlock = await Promise.all(saveImage(mdblocks, blockId));

    const mdString = n2m.toMarkdownString(newMdBlock).parent;

    if (typeof mdString !== "string") {
      // string以外は許容しない
      return;
    }

    writeFile(`notion/post/${blockId}.md`, mdString, (err) => {
      console.error(err);
    });
  });
})();
