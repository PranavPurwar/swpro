import type { BlogPost } from "../types";

export default defineEventHandler(async (event) => {
    const { id } = getQuery(event);
    const url = "http://" + getRequestHost(event) + "/api/blogs";

    if (!id) {
        return new Response("Property ID is required", {
            status: 400,
        });
    }

    const props: BlogPost[] = await fetch(url).then((res) => res.json());

    const property = props.find((p) => p.id == parseInt(id.toString()));

    return new Response(JSON.stringify(property), {
        status: 200,
    });
});
