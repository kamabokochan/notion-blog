import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProperties } from "@/utils/notion/getPageProperties";
import { Client } from "@notionhq/client";
import { Fragment } from "react";

const { NOTION_AUTH_TOKEN } = process.env;

if (!NOTION_AUTH_TOKEN) {
  console.error("NOTION_AUTH_TOKEN is not found");
  process.exit(1);
}

const notion = new Client({
  auth: process.env.NOTION_AUTH_TOKEN,
});

async function fetchBlogPosts() {
  const databaseId = "044ded07ab224cd1b2e1b853550740d0";

  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response;
}

export default async function Home() {
  const response = await fetchBlogPosts();

  return (
    <ul className="grid grid-cols-3 gap-8 max-w-5xl mx-auto p-10">
      {response.results.map((post) => {
        const { publicStatus, emoji, title } = getProperties(post);

        if (publicStatus !== "public") {
          return <Fragment key={post.id}></Fragment>;
        }

        return (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>
              <Card className="h-full overflow-hidden bg-[#1e1c19] border-solid border border-[#3c3e3c]">
                <CardHeader className="items-center bg-[#2e2d28]">
                  <CardTitle className="text-5xl">{emoji}</CardTitle>
                </CardHeader>
                <CardContent className="p-3.5">{title}</CardContent>
              </Card>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
