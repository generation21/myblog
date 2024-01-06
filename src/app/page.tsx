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
                    <h1 className="mt-10 text-5xl font-bold text-text-primary dark:border-gray-700 dark:text-white">
                        최신 포스팅
                    </h1>
                    <h3 className="mt-5 font-bold border-b border-gray-200 text-text-primary dark:border-gray-700 dark:text-gray-300">
                        저의 블로그는 소소하지만 가치 있는 지식을 담아내는 기술
                        중심의 웹 사이트입니다. 저는 겸손한 크기에서도 풍부한
                        정보의 보고가 될 수 있다는 믿음으로, 실용적인 지식과
                        통찰을 집결시켜 귀중한 지식 저장소를 구축하고자 합니다.
                    </h3>
                    <RecentPostList posts={filteredPost} />
                    <div className="border-b border-gray-200 dark:border-gray-700" />
                    <Link href={"/posts"}>
                        <p className="mt-4 text-lg text-end text-primary">
                            read all posts→
                        </p>
                    </Link>
                </div>
            </section>
            <footer className="md:hidden">
                <MoblieContactInfo />
            </footer>
        </main>
    );
}
