import Avatar from "@/components/Avatar";
import ContactInfo from "@/components/ContactInfo";
import MoblieContactInfo from "@/components/MoblieContactInfo";
import PostList from "@/components/PostList";
import { filterPosts } from "@/service/notion/filterPost";
import { getAllTagsFromPosts } from "@/service/notion/getAllTagsFromPosts";
import { getPosts } from "@/service/notion/getPosts";
import { Suspense } from "react";

export const revalidate = 1;

function SearchBarFallback() {
    return <>placeholder</>;
}

export default async function Home() {
    const posts = await getPosts();

    const filteredPost = filterPosts(posts);
    const tags = getAllTagsFromPosts(filteredPost);

    return (
        <main className="flex-grow w-full px-4 pt-5 pb-12 m-auto transition-all max-w-7xl">
            <section className="flex flex-col w-full h-full gap-6 md:grid md:grid-cols-12">
                <div className="hidden md:col-span-3 md:block">
                    <Avatar />
                    <ContactInfo />
                </div>
                <div className="md:hidden">
                    <Avatar />
                </div>
                <Suspense fallback={<SearchBarFallback />}>
                    <PostList posts={filteredPost} tags={tags} />
                </Suspense>
            </section>
            <footer className="md:hidden">
                <MoblieContactInfo />
            </footer>
        </main>
    );
}
