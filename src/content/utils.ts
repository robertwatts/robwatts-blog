import { CollectionEntry, getCollection } from 'astro:content';
import type { ContentType } from "./types";

/**
 * Returns all entries in the blog content collection.
 * Regex is required to filter README.md from the collection.
 */
export async function getBlogEntries(): Promise<CollectionEntry<"blog">[]> {
  const blogDirectoryRegex = /^.+\/.+\..+$/;
  const entries = await getCollection("blog", ({ id, data }) => {
    return blogDirectoryRegex.test(id as string) && data.draft !== true;
  });
  return entries;
}

export function getContentTypeById(id: string): ContentType {
  const folder = id.split('/')[0];
  switch (folder) {
    case "articles": return "article";
    case "bookmarks": return 'bookmark';
    case "notes": return "note";
    case "photos": return "photo";
    default: throw new Error(`Unknown folder: ${folder}`)
  }
}
