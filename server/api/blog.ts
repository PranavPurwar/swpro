import type { BlogPost } from "../types";

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);

    if (!id) {
        return new Response("Property ID is required", {
            status: 400,
        });
    }

    const props: BlogPost[] = await $fetch('/api/blogs')

    const property = props.find((p) => p.id == id);

    return new Response(JSON.stringify(property), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 200,
    });
});
