import { TPost } from "@/types";
import React from "react";
import "@/styles/components.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
type Props = {
    post: TPost;
};

export default function Head({ post }: Props) {
    const router = useRouter();
    return (
        <>
            <button
                onClick={() => {
                    router.back();
                }}
            >
                <p className="text-xl font-medium dark:text-gray-500 ">
                    ← Back
                </p>
            </button>
            <h1 className="my-3 text-4xl font-bold">{post.title}</h1>
            <p className="text-xl font-medium dark:text-gray-500">
                {post.date.start_date}
            </p>
            <div className="flex ">
                {post.tags &&
                    post.tags.map((tag, index) => (
                        <button
                            className="tags-style"
                            key={index}
                            onClick={() => {
                                router.push(`/?tag=${tag}`);
                            }}
                        >
                            #{tag}
                        </button>
                    ))}
            </div>
            <div className="flex items-center justify-center">
                <Image
                    src={post.thumbnail!}
                    alt="thumbnail"
                    width={500}
                    height={500}
                />
            </div>
        </>
    );
}
