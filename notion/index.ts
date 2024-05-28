import { downloadImage } from "@/notion/downloadImage";
import { mdUrlExtraction } from "@/notion/mdUrlExtraction";
import { Client } from "@notionhq/client";
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

async function saveImage(mdblock: MdBlock, blockId: string) {
  const imageUrl = mdUrlExtraction(mdblock.parent);
  const filePath = `notion/image/${blockId}/${mdblock.blockId}.jpg`;
  const fullPath = `public/${filePath}`;
  const directory = path.dirname(`public/${filePath}`);

  // ファイルがすでに存在している場合は何もせずに終了
  if (existsSync(fullPath)) {
    mdblock.parent = `![代替テキスト](/${filePath})`;
    return mdblock;
  }

  // ディレクトリが存在しない場合は作成
  mkdirSync(directory, { recursive: true });

  try {
    await downloadImage(imageUrl, fullPath);
    // ![代替テキスト](画像のURL)
    mdblock.parent = `![代替テキスト](/${filePath})`;
  } catch (error) {
    console.error(error);
  }
  return mdblock;
}

(async () => {
  const databaseId = "044ded07ab224cd1b2e1b853550740d0";

  // DBからデータ取得
  const { results } = await notion.databases.query({
    database_id: databaseId,
  });

  results.forEach(async (block) => {
    const blockId = block.id;
    const mdBlocks = await n2m.pageToMarkdown(blockId);

    const mdBlockFactory = async (block: MdBlock): Promise<MdBlock> => {
      // 各mdのブロックに対し、画像だった場合にローカルへの保存とその保存先の相対パスに置換する
      if (block.type === "image") {
        return await saveImage(block, blockId);
      }

      if (block.children.length !== 0) {
        const newChildrenMdBlock = await Promise.all(
          block.children.map(async (block) => await mdBlockFactory(block)),
        );
        return {
          ...block,
          children: newChildrenMdBlock,
        };
      }

      return block;
    };

    const newMdBlocks = await Promise.all(
      mdBlocks.map(async (block) => await mdBlockFactory(block)),
    );

    const mdString = n2m.toMarkdownString(newMdBlocks).parent;

    // 中身が空のページが存在している場合に、msStringはundifinedになるため処理を終了する
    if (typeof mdString !== "string") {
      return;
    }

    writeFile(`notion/post/${blockId}.md`, mdString, (err) => {
      console.error(err);
    });
  });
})();
