export type TPostType = "Post" | "Project" | "Page";
export type TPostPublic = "yes";

export type TPost = {
    id: string;
    date: { start_date: string };
    type: TPostType[];
    slug: string;
    tags?: string[];
    summary?: string;

    title: string;
    public: TPostPublic;
    createdTime: string;
    fullWidth: boolean;
    thumbnail?: string;
};

export type TPosts = TPost[];

export type TTags = {
    [tagName: string]: number;
};

export type ThemeType = "dark" | "light";
