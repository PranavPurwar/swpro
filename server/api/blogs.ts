import type { BlogPost } from "../types";

export default defineEventHandler((event) => {
    const blogs: BlogPost[] = [
        {
            id: 'story_of_sketchware',
            title: "From Dream to Code: The Story of Sketchware",
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
