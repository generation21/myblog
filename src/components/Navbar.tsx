import Link from "next/link";
import React from "react";
import ThemeToggleButton from "../features/theme/ThemeToggleButton";
import { CONFIG } from "src/config";

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex items-center justify-between w-full h-6 px-4 py-8 mx-auto mb-2 z-99 max-w-7xl bg-opacity-60 backdrop-blur-sm ">
            <div className="flex flex-row items-center gap-3">
                <Link href={"/"}>
                    <p className="text-lg font-bold cursor-pointer hover:text-primary">
                        {CONFIG.profile.name}
                    </p>
                </Link>
                <span className="text-sm text-text-primary dark:text-text-dark">
                    블로그
                </span>
            </div>
            <div className="flex flex-row gap-3">
                <Link href={"/about"}>
                    <div className="p-2 font-normal transition duration-300 ease-in-out rounded-lg text-text-primary hover:bg-gray-200 dark:text-text-dark dark:hover:bg-gray-700">
                        about
                    </div>
                </Link>
                <ThemeToggleButton />
            </div>
        </nav>
    );
}
