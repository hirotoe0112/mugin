import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    pubDate: z.date(),
    title: z.string(),
    description: z.string(),
    recommended: z.boolean().default(false),
    imagePath: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
