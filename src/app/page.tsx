import Avatar from "@/components/Avatar";
import ContactInfo from "@/components/ContactInfo";
import MoblieContactInfo from "@/components/MoblieContactInfo";
import RecentPostList from "@/components/RecentPostList";
import { filterPosts } from "@/service/notion/filterPost";
import { getPosts } from "@/service/notion/getPosts";
import Link from "next/link";

export const revalidate = 1;

export default async function Home() {
    const posts = await getPosts();

    const filteredPost = filterPosts(posts);

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
                <div className="col-span-9">
                    <h2 className="mt-3 font-bold border-b border-gray-200 text-text-primary dark:border-gray-700 dark:text-white">
                        최신 포스팅
                    </h2>

                    <RecentPostList posts={filteredPost} />
                </div>
            </section>
            <footer className="md:hidden">
                <MoblieContactInfo />
            </footer>
        </main>
    );
}
