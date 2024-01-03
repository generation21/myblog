import Image from "next/image";
import React from "react";
import { CONFIG } from "src/config";
import "src/styles/components.css";

export default function Avatar() {
    return (
        <div className="flex items-center justify-center gap-10 px-3 py-3 bg-gray-200 rounded-2xl dark:bg-secondary md:flex-col md:py-10">
            <Image
                src={"/images/emoji.png"}
                alt="avatar"
                width={100}
                height={100}
            />
            <div>
                <p className="mt-2 italic medium-text-style">
                    {CONFIG.profile.name}
                </p>
                <p className="small-text-style">{CONFIG.profile.role}</p>
            </div>
        </div>
    );
}
