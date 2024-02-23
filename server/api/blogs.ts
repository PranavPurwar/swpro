import type { BlogPost } from "../types";

export default defineEventHandler((event) => {
    const blogs: BlogPost[] = [
        {
            id: 'story_of_sketchware',
            title: "From Dream to Code: The Story of Sketchware",
            description: "The story of how a high school student built a no-code app builder that has been used by millions of people around the world.",
            author: "Pranav Purwar",
            date: "January 1, 2024",
        },
    ];

    const response = new Response(JSON.stringify(blogs), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    event.respondWith(response);
});
