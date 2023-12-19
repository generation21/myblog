import Avatar from "@/components/Avatar";
import ContactInfo from "@/components/ContactInfo";
import PostList from "@/components/PostList";
import { filterPosts } from "@/service/notion/filterPost";
import { getAllTagsFromPosts } from "@/service/notion/getAllTagsFromPosts";
import { getPosts } from "@/service/notion/getPosts";

export default async function Home() {
    const posts = await getPosts();

    const filteredPost = filterPosts(posts);
    const tags = getAllTagsFromPosts(filteredPost);

    return (
        <main className="flex-grow w-full px-4 pt-5 pb-12 m-auto transition-all max-w-7xl">
            <section className="grid w-full h-full grid-cols-12 gap-6">
                <div className="block col-span-3">
                    <Avatar />
                    <ContactInfo />
                </div>
                <PostList posts={filteredPost} tags={tags} />
            </section>
        </main>
    );
}
