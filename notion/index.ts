import { Client } from "@notionhq/client";
import { writeFile } from "node:fs";
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
  const mdblocks = await n2m.pageToMarkdown("8418b49d75654f188f2b67373b67746b");
  const mdString = n2m.toMarkdownString(mdblocks);

  writeFile("./notion/sample.md", mdString.parent, (err) => {
    console.error(err);
  });
})();
