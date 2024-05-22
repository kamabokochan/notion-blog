import fs from "fs/promises";
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

export default async function Blog({ params }: { params: { slug: string } }) {
  const htmlContent = await getHtmlContents(params.slug);

  if (!htmlContent) {
    return <></>;
  }
  return (
    <div className="znc" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
