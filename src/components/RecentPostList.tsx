import { TPosts, TTags } from "@/types";
import React from "react";
import PostCard from "./PostCard";

type Props = {
    posts: TPosts;
};

export default function RecentPostList({ posts }: Props) {
    const RecentPosts = posts.slice(0, 5);

    return (
        <>
            <div className="w-full h-full">
                {RecentPosts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </>
    );
}
