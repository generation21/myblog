import React from "react";
import { CONFIG } from "src/config";
export default function Footer() {
    const d = new Date();
    const y = d.getFullYear();
    const from = CONFIG.since;
    return (
        <footer className="flex justify-center py-4">
            <a
                href={`https://github.com/${CONFIG.profile.linkedIn}`}
                target="_blank"
                className="mt-3 text-sm text-gray-400"
                rel="noreferrer"
            >
                © {CONFIG.profile.name}{" "}
                {from === y || !from ? y : `${from} - ${y}`}
            </a>
        </footer>
    );
}
