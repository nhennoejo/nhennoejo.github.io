import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    thumbnail: z.object({
      url: image(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
