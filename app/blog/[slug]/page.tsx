import { getProperties } from "@/app/page";
import { Client, isFullPage } from "@notionhq/client";
import { readdirSync } from "fs";
import fs from "fs/promises";
import path from "path";
import "zenn-content-css";
import markdownHtml from "zenn-markdown-html";

const { NOTION_AUTH_TOKEN } = process.env;

if (!NOTION_AUTH_TOKEN) {
  console.error("NOTION_AUTH_TOKEN is not found");
  process.exit(1);
}

const notion = new Client({
  auth: process.env.NOTION_AUTH_TOKEN,
});

async function fetchPageInfo(slug: string) {
  const response = await notion.pages.retrieve({ page_id: slug });
  return response;
}

async function readMarkdownFile(filePath: string) {
  try {
    const markdownContent = await fs.readFile(filePath, "utf-8");
    return markdownContent;
  } catch (error) {
    console.error("Error reading Markdown file:", error);
    return null;
  }
}

async function getHtmlContents(slug: string) {
  const filePath = `notion/post/${slug}.md`;
  const markdownContent = await readMarkdownFile(filePath);
  if (markdownContent === null) {
    return;
  }
  const htmlContent = markdownHtml(markdownContent);
  return htmlContent;
}

export function generateStaticParams() {
  const files = readdirSync("notion/post/");
  const fileNames = files.map((file) => {
    const name = path.parse(file).name;
    return {
      slug: name,
    };
  });

  return fileNames;
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const pageInfo = await fetchPageInfo(params.slug);
  const htmlContent = await getHtmlContents(params.slug);

  if (!pageInfo || !htmlContent) {
    return <></>;
  }

  if (isFullPage(pageInfo)) {
    const { emoji, title } = getProperties(pageInfo);
    return (
      <>
        <div className="max-w-5xl mx-auto p-10">
          <div className="py-14">
            <p className="text-[75px] leading-none text-center">{emoji}</p>
            <h1 className="text-3xl font-bold mt-5 text-[#dcdbbf]">{title}</h1>
            <div className="mt-5 text-xs text-right text-[#b7a992]">
              <p>作成日: {pageInfo.created_time}</p>
              <p className="mt1">最終更新: {pageInfo.last_edited_time}</p>
            </div>
          </div>
          <div
            className="znc p-10 bg-[#1e1c19] border-solid border border-[#3c3e3c] rounded text-[#dcdbbf]"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </>
    );
  }

  return <></>;
}
