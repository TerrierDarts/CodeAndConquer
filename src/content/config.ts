import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    live: z.boolean(),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});


export const collections = { blog };

