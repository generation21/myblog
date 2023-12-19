"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ChangeEvent, useCallback, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "src/styles/components.css";
import { TTags } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
    q: string;
    onChage: (e: ChangeEvent<HTMLInputElement>) => void;
    tags: TTags;
};

export default function SearchBar({ tags, q, onChage }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentTag = searchParams.get("tag") || "All";
    const showTag = (tag: String) => (tag === "All" ? "" : tag);

    const [isOpen, setIsOpen] = useState(false);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    const handleClickTag = (value: any) => {
        setIsOpen(false);
        router.push("/" + "?" + createQueryString("tag", value));
    };

    return (
        <div className="flex flex-row items-center w-full gap-3">
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    // className="w-full px-4 py-2 font-semibold text-white rounded hover:bg-ac bg-primary focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    className="btn-primary"
                >
                    #{showTag(currentTag)}
                </button>
                {isOpen && (
                    <div className="w-15 absolute z-10 mt-1 h-auto max-h-96 min-w-[150px] overflow-auto rounded bg-white shadow-lg">
                        <div
                            onClick={() => handleClickTag("All")}
                            className="block px-4 py-2 text-sm cursor-pointer bg-background-default text-text-dark hover:bg-gray-500 dark:bg-background-dark dark:text-white dark:hover:bg-gray-500"
                        >
                            All
                        </div>
                        {Object.keys(tags).map((key) => (
                            <div
                                key={key}
                                onClick={() => handleClickTag(key)}
                                className="block px-4 py-2 text-sm cursor-pointer bg-background-default text-text-dark hover:bg-gray-500 dark:bg-background-dark dark:text-white dark:hover:bg-gray-500"
                            >
                                {key}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    placeholder="검색"
                    className="w-full px-5 py-2 pl-10 bg-gray-100 rounded-md outline-none hover:bg-gray-100 focus:shadow-md dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-600 dark:focus:text-gray-200 lg:rounded-lg"
                    value={q}
                    onChange={onChage}
                />
            </div>
        </div>
    );
}
