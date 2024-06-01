import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { readdirSync } from "fs";
import fs from "fs/promises";
import path from "path";
import "zenn-content-css";
import markdownHtml from "zenn-markdown-html";

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
  const htmlContent = await getHtmlContents(params.slug);

  if (!htmlContent) {
    return <></>;
  }
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-5xl mx-auto p-10">
        <div
          className="znc"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </>
  );
}
