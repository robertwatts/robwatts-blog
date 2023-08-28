import type { ContentType } from "./types";

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
