"use client";
import { TPosts, TTags } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";

type Props = {
    tags: TTags;
    posts: TPosts;
};

export default function PostList({ posts, tags }: Props) {
    const [q, setQ] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const searchParams = useSearchParams();
    const currentTag = searchParams.get("tag") || "All";

    useEffect(() => {
        setFilteredPosts(() => {
            let filteredPosts = posts;
            // keyword
            filteredPosts = filteredPosts.filter((post) => {
                const tagContent = post.tags ? post.tags.join(" ") : "";
                const searchContent = post.title + post.summary + tagContent;
                return searchContent.toLowerCase().includes(q.toLowerCase());
            });

            // tag
            if (currentTag !== "All") {
                filteredPosts = filteredPosts.filter(
                    (post) =>
                        post && post.tags && post.tags.includes(currentTag),
                );
            }
            // order
            //   if (currentOrder !== 'desc') {
            //     filteredPosts = filteredPosts.reverse()
            //   }

            return filteredPosts;
        });
    }, [q, currentTag]);

    return (
        <div className="col-span-9">
            <SearchBar
                tags={tags}
                q={q}
                onChage={(e) => setQ(e.target.value)}
            />
            <h2 className="mt-10 font-bold border-b border-gray-200 text-text-primary dark:border-gray-700 dark:text-white">{`${currentTag} Posts (${filteredPosts.length})`}</h2>
            <div className="w-full h-full">
                {filteredPosts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
}
