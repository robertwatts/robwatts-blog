import { type CollectionEntry, getCollection, getEntry } from 'astro:content';
import { type ContentType, contentTypesByFolder } from './content/config';

/**
 * Returns all entries in the blog content collection.
 * Regex is required to filter README.md from the collection.
 */
export async function getBlogEntries(contentType?: ContentType): Promise<CollectionEntry<"blog">[]> {
  const entries = await getCollection("blog", ({ id, data }) => {
    return (
      id !== 'README.md' && // filter out README.md
      data.date !== undefined && // filter out entries without a date
      data.draft !== true && // filter out drafts 
      (contentType ? id.startsWith(contentType.slug) : true) // filter by content type, if provided
    );
  });
  return entries;
}

/**
 * Returns a single blog entry by id.
 * @param id the id of the blog entry to return
 * @returns 
 */
export async function getBlogEntry(id: string): Promise<CollectionEntry<"blog">> {
  const entry = await getEntry("blog", id);
  if (entry == undefined) {
    throw new Error(`No blog entry found with id: ${id}`);
  }
  return entry;
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
