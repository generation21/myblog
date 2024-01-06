/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.notion.so",
            },
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
        ],
    },
};

module.exports = nextConfig;
