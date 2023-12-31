import { NotionAPI } from "notion-client";
import { idToUuid } from "notion-utils";
import getAllPageIds from "./getAllPageIds";
import getPageProperties from "./getPageProperties";
import { TPosts } from "src/types";
import { CONFIG } from "src/config";

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

export async function getPosts() {
    let id = CONFIG.notion.databaseId as string;
    const api = new NotionAPI();
    const response = await api.getPage(id);

    id = idToUuid(id);
    const collection = Object.values(response.collection)[0]?.value;
    const block = response.block;
    const schema = collection?.schema;

    const rawMetadata = block[id].value;

    // Check Type
    if (
        rawMetadata?.type !== "collection_view_page" &&
        rawMetadata?.type !== "collection_view"
    ) {
        return [];
    } else {
        // Construct Data
        const pageIds = getAllPageIds(response);

        const data = [];
        for (let i = 0; i < pageIds.length; i++) {
            const id = pageIds[i];
            const properties =
                (await getPageProperties(id, block, schema)) || null;

            // Add fullwidth, createdtime to properties
            properties.createdTime = new Date(
                block[id].value?.created_time,
            ).toString();
            properties.fullWidth =
                (block[id].value?.format as any)?.page_full_width ?? false;

            data.push(properties);
        }

        // Sort by date
        data.sort((a: any, b: any) => {
            const dateA: any = new Date(a?.date?.start_date || a.createdTime);
            const dateB: any = new Date(b?.date?.start_date || b.createdTime);
            return dateB - dateA;
        });

        // Sort Tags 태그 정렬
        data.map((post) => {
            if (post.tags) post = post.tags.sort();
            return post;
        });

        return data as TPosts;
    }
}
