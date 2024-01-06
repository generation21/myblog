"use client";
import { TPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import "src/styles/components.css";

export default function PostCard({
    id,
    date,
    type,
    slug,
    tags,
    summary,
    title,
    thumbnail,
}: TPost) {
    const postLink = `/posts/${slug}`;

    const router = useRouter();
    const handleClick = () => {
        router.push(postLink);
    };
    const handleTagClick = (tag: string) => {
        router.push(`/?tag=${tag}`);
    };

    return (
        <div className="grid grid-cols-5 gap-4 px-4 py-2 my-2 overflow-hidden border-b border-gray-200 dark:border-gray-700">
            <div
                className="flex items-center justify-center col-span-1"
                onClick={handleClick}
            >
                {thumbnail && (
                    <Image
                        src={thumbnail}
                        alt="Post icon"
                        width={200}
                        height={200}
                        className="rounded-md hover:brightness-75"
                    />
                )}
            </div>
            <div className="col-span-4 px-2 py-5">
                <div className="flex gap-2">
                    {tags &&
                        tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => handleTagClick(tag)}
                                className="mb-2 mr-4 cursor-pointer text-[13px] font-light text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 md:text-[14px]"
                            >{`#${tag}`}</button>
                        ))}
                </div>
                <header className="flex flex-col justify-between md:flex-row md:items-baseline">
                    <h3
                        className="cursor-pointer medium-text-style"
                        onClick={handleClick}
                    >
                        {title}
                    </h3>
                </header>
                <main className="my-3">
                    <p className="small-text-style">{summary}</p>
                </main>
                <div className="flex items-center gap-2 mt-6 mb-2">
                    <div className="relative w-full text-xs text-gray-500 dark:text-gray-400 md:text-sm">
                        {date.start_date}

                        <Link
                            href={postLink}
                            className="absolute top-0 right-0 mb-2 mr-1 text-xs font-light cursor-pointer text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 md:text-sm"
                        >
                            Read more →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
