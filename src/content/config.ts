import { z, defineCollection, reference } from "astro:content";

const readCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        categories: z.array(z.string()),
        author: reference("author"),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string().optional(),
        }),
    }),
});

const watchCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        event: reference("event"),
        speaker: z.object({
            name: z.string(),
            bio: z.string(),
        }),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string().optional(),
        }),
        url: z.string(),
        relatedTalks: z.array(reference("watch")).optional(),
    }),
});

const eventCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        location: z.string(),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string().optional(),
        }),
        url: z.string(),
    }),
});

const authorCollection = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        avatar: z.object({
            src: z.string(),
            alt: z.string().optional(),
        }),
        bio: z.string().optional(),
        social: z
            .object({
                twitter: z.string(),
                github: z.string(),
            })
            .optional(),
    }),
});

export const collections = {
    read: readCollection,
    watch: watchCollection,
    event: eventCollection,
    author: authorCollection,
};
