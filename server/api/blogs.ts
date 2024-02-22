import type { BlogPost } from '../types';

export default defineEventHandler((event) => {
	const blogs: BlogPost[] = [
        {
            id: 1,
            title: "From Dream to Code: The Story of Sketchware",
            author: "Pranav Purwar",
            date: "January 1, 2024",
            content: "Sketchware, once a beacon of hope for aspiring app developers, now holds a more complex and nuanced narrative. Its story began in 2016, promising to democratize app development with its intuitive drag-and-drop interface. This accessibility resonated with a diverse audience, empowering individuals of all backgrounds to create mobile applications. From simple games to educational tools, the platform fostered a vibrant community and served as a gateway to the world of programming for many.\n\nHowever, the dream faced challenges. Financial difficulties and the balancing act between accessibility and functionality proved hurdles too large to overcome. The original Sketchware team eventually disbanded, leaving the platform's future uncertain.\n\nWhile the official Sketchware app is no longer available, its legacy lives on. Modified versions, like Sketchware Pro, exist, maintained by independent developers. The community, though smaller, continues to share creations and offer support. However, it's undeniable that Sketchware's reach and influence have diminished significantly.\n\nIts impact on the programming landscape cannot be ignored. Sketchware introduced countless individuals to the world of coding, sparking a passion that may have led them to explore more advanced languages and contribute to the tech industry. This influence, even if indirect, remains a testament to Sketchware's initial success.\n\nThe story of Sketchware is a cautionary tale of innovation, accessibility, and the realities of financial sustainability. While its future remains uncertain, its legacy serves as a reminder of the potential for technology to empower and inspire. As new tools and platforms emerge, the lessons learned from Sketchware's journey can guide future endeavors to make the world of app development more accessible and inclusive.",
          },
        ];

        const response = new Response(JSON.stringify(blogs), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        event.respondWith(response);
});