import { TPosts, TTags } from "@/types";
import Link from "next/link";
import React from "react";
import PostCard from "./PostCard";

type Props = {
    posts: TPosts;
};

export default function RecentPostList({ posts }: Props) {
    const RecentPosts = posts.slice(0, 5);

    return (
        <>
            <div className="">
                {RecentPosts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
            <Link href={"/posts"}>
                <p className="mt-4 text-lg text-end text-primary">
                    read all posts→
                </p>
            </Link>
        </>
    );
}
