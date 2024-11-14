import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    thumbnail: z.object({
      url: image().refine((img) => img.width >= 1080, {
        message: "カバー画像は幅1080ピクセル以上でなければなりません！",
      }),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
