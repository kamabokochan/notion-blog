import { Client } from "@notionhq/client";

const { NOTION_AUTH_TOKEN } = process.env;

if (!NOTION_AUTH_TOKEN) {
  console.error("NOTION_AUTH_TOKEN is not found");
  process.exit(1);
}

// Initializing a client
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
    <ul>
      {response.results.map((post, index) => {
        return (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>
              {response.results[index].properties["名前"].title[0].text.content}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
