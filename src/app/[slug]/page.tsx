import { getPostBlocks } from "@/service/notion/getBlock";
import { getPosts } from "@/service/notion/getPosts";
import Image from "next/image";
import { notFound } from "next/navigation";
import PostDetail from "src/components/PostDetail/PostDetail";

// export const revalidate = 60; // 서버에 업데이트 주기 (초)

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props) {
    const posts = await getPosts();
    const post = posts.find((t) => t.slug === params.slug);

    return {
        title: params.slug,
        description: post?.summary,
        keywords: post?.tags,
        type: post?.type,
        openGraph: {
            images: [post?.thumbnail],
        },
    };
}

export default async function ProductPage({ params: { slug } }: Props) {
    const posts = await getPosts();
    const post = posts.find((t) => t.slug === slug);
    const blockMap = await getPostBlocks(post?.id!);

    if (!blockMap || !post) {
        notFound();
    }

    return (
        <div className={`m-auto max-w-7xl py-5`}>
            <PostDetail blockMap={blockMap} data={post} />
        </div>
    );
}

// export async function generateStaticParams() {
//   // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
//   const products = await getProducts();
//   return products.map((product) => ({
//     slug: product.id,
//   }));
// }
