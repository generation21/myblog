import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmsIcon from "@mui/icons-material/Sms";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CONFIG } from "src/config";

export default function ContactInfo() {
    const contactInfos = [
        {
            icon: <GitHubIcon />,
            name: "github",
            link: CONFIG.profile.github,
        },
        {
            icon: <MailOutlineIcon />,
            name: "Email",
            link: CONFIG.profile.email,
        },
        {
            icon: <LinkedInIcon />,
            name: "LinkedIn",
            link: CONFIG.profile.linkedIn,
        },
    ];
    return (
        <section className="pt-10">
            <p className="flex gap-2 text-base font-bold">
                <SmsIcon />
                Contact
            </p>
            <ul className="px-5 py-3 mt-3 bg-gray-200 rounded-lg dark:bg-secondary">
                {contactInfos.map((info) => (
                    <a
                        key={info.name}
                        href={info.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-accent-blue dark:hover:bg-gray-700">
                            {info.icon}
                            <p className="text-base font-normal">{info.name}</p>
                        </li>
                    </a>
                ))}
            </ul>
        </section>
    );
}
