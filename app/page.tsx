import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Client } from "@notionhq/client";
import { PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
    filter_properties: ["title"],
  });

  return response;
}

export default async function Home() {
  const response = await fetchBlogPosts();
  return (
    <ul className="grid grid-cols-3 gap-8 max-w-5xl mx-auto p-10">
      {response.results.map((post, index) => {
        return (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">
                    {
                      (response.results[index] as PartialDatabaseObjectResponse)
                        .properties["名前"].title[0].text.content
                    }
                  </CardTitle>
                  {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                {/* <CardContent>
                  <p>Card Content</p>
                </CardContent> */}
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
