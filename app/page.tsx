import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
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

export function getProperties(post: QueryDatabaseResponse["results"][number]) {
  // @watch https://github.com/makenotion/notion-sdk-js/issues/475
  let publicStatus;
  let emoji;
  let title;
  if (
    "properties" in post &&
    "select" in post.properties.public_status &&
    post.properties.public_status.select !== null &&
    "name" in post.properties.public_status.select
  ) {
    publicStatus = post.properties.public_status.select.name;
  }
  if ("icon" in post && post.icon !== null && "emoji" in post.icon) {
    emoji = post.icon.emoji;
  }
  if (
    "properties" in post &&
    "title" in post.properties.title &&
    Array.isArray(post.properties.title.title)
  ) {
    title = post.properties.title.title[0].plain_text;
  }

  return {
    publicStatus,
    emoji,
    title,
  };
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
              <Card className="h-full overflow-hidden">
                <CardHeader className="items-center">
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
