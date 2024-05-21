import { Client } from "@notionhq/client";
import { writeFile } from "fs";
import { NotionToMarkdown } from "notion-to-md";

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

(async () => {
  const databaseId = "044ded07ab224cd1b2e1b853550740d0";

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  // console.log(response.results[0].id);

  response.results.forEach(async (block) => {
    const blockId = block.id;
    console.log(blockId);
    const mdblocks = await n2m.pageToMarkdown(blockId);
    const mdString = n2m.toMarkdownString(mdblocks).parent;

    if (typeof mdString !== "string") {
      // string以外は許容しない
      return;
    }

    writeFile(`notion/post/${blockId}.md`, mdString, (err) => {
      console.error(err);
    });
  });
})();
