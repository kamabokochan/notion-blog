import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

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
