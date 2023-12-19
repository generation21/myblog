export const CONFIG = {
    profile: {
        name: "HSB94",
        image: "/images/profile.jpg",

        role: "Full-Stack Developer",
        bio: "I am a full-stack developer with a passion for creating beautiful and functional web applications.",
        email: "mailto:qbration21@gmail.com",
        linkedIn: "https://www.linkedin.com/in/seungbum-hong-531311171/",
        github: "https://github.com/generation21",
    },
    projects: [
        {
            name: "hsb94-blog",
            href: "www.localhost:3000",
        },
    ],
    seo: {
        keywords: ["Blog", "Website", "Notion"],
    },
    notion: {
        secret: process.env.NEXT_PUBLIC_NOTION_API_SECRET,
        databaseId: process.env.NEXT_PUBLIC_NOTION_BLOG_ID,
    },
};
