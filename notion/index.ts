import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md";
import { writeFile } from 'node:fs';

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_AUTH_TOKEN,
})

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

;(async () => {
  const mdblocks = await n2m.pageToMarkdown("8418b49d75654f188f2b67373b67746b");
  const mdString = n2m.toMarkdownString(mdblocks);

  writeFile('./notion/sample.md', mdString.parent, (err) => {
    console.error(err);
  })
})();
