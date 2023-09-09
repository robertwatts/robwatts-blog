import { CollectionEntry, getCollection } from 'astro:content';
import { ContentType, contentTypesByFolder } from './content/config';

/**
 * Returns all entries in the blog content collection.
 * Regex is required to filter README.md from the collection.
 */
export async function getBlogEntries(contentType?: ContentType): Promise<CollectionEntry<"blog">[]> {
  const entries = await getCollection("blog", ({ id, data }) => {
    return (contentType ? id.startsWith(contentType.slug) : true) && data.draft !== true;
  });
  return entries;
}

/**
 * Scans all blog content and returns a list of all available content types.
 * Use only for static generation, not server side rendering.
 * @returns string[] of all available content types
 */
export async function getAvailableContentTypes(): Promise<ContentType[]> {
  const entries = await getBlogEntries();
  return entries.reduce((acc: ContentType[], entry) => {
    const contentType = getContentType(entry);
    if (contentType !== undefined && !acc.includes(contentType)) {
      acc.push(contentType);
    }
    return acc;
  }, []);
}

/**
 * @param entry a collection entry
 * @returns the ContenType of the entry, or undefined if not found
 */
export function getContentType(entry: CollectionEntry<"blog">): ContentType | undefined {
  const folder = entry.id.split('/')[0];
  return contentTypesByFolder.get(folder);
}
