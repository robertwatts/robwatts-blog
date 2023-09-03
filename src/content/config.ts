import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    draft: z.boolean().optional(),
    updated: z.date().optional(),
    deleted: z.date().optional(),
    title: z.string().optional(),
    summary: z.string().optional(),
    category: z.array(z.string()).optional(),
    "bookmark-of": z.string().optional(),
    "like-of": z.string().optional(),
    "repost-of": z.string().optional(),
    "in-reply-to": z.string().optional(),
    link: z.string().optional(),
    published: z.boolean().optional(),
    visibility: z.string().optional(),
  }),
});

export const collections = {
  "blog": blogCollection,
};

export interface ContentType {
  name: string;
  plural: string;
  slug: string;
  iconSvg: string;
};

export const contentTypesByFolder = new Map<string, ContentType>([
  ["articles", {
    name: "Article", 
    plural: "Articles", 
    slug: "articles",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-article" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        <path d="M7 8h10"></path>
        <path d="M7 12h10"></path>
        <path d="M7 16h10"></path>
    </svg>`,}],
  ["bookmarks", {
    name: "Bookmark",
    plural: "Bookmarks",
    slug: "bookmarks",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
    </svg>`,}],
  ["notes", {
    name: "Note",
    plural: "Notes",
    slug: "notes",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-note" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M13 20l7 -7"></path>
        <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"></path>
    </svg>`,}],
  ["photos", {
    name: "Photo",
    plural: "Photos",
    slug: "photos",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 8h.01"></path>
        <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
    </svg>`,}],
  ["likes", {
    name: "Like",
    plural: "Likes",
    slug: "likes",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
    </svg>`,}],
  ["reposts", {
    name: "Repost",
    plural: "Reposts",
    slug: "reposts",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-arrow-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M16 12l-4 -4l-4 4"></path>
        <path d="M12 16v-8"></path>
        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
    </svg>`,}],
  ["replies", {
    name: "Reply",
    plural: "Replies",
    slug: "replies",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M8 9h8"></path>
        <path d="M8 13h6"></path>
        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
    </svg>`,}],
  ["rsvps", {
    name: "RSVP",
    plural: "RSVPs",
    slug: "rsvps",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
        <path d="M16 3l0 4"></path>
        <path d="M8 3l0 4"></path>
        <path d="M4 11l16 0"></path>
        <path d="M8 15h2v2h-2z"></path>
    </svg>`,}],
  ["events", {
    name: "Event",
    plural: "Events",
    slug: "events",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ticket" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 5l0 2"></path>
        <path d="M15 11l0 2"></path>
        <path d="M15 17l0 2"></path>
        <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
    </svg>`}],
  ["checkins", {
    name: "Checkin",
    plural: "Checkins",
    slug: "checkins",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-current-location" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"></path>
        <path d="M12 2l0 2"></path>
        <path d="M12 20l0 2"></path>
        <path d="M20 12l2 0"></path>
        <path d="M2 12l2 0"></path>
    </svg>`}],
]);

