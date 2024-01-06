import Avatar from "@/components/Avatar";
import MoblieContactInfo from "@/components/MoblieContactInfo";
import Image from "next/image";
import React from "react";

export default function page() {
    return (
        <section className="flex flex-col w-full h-auto max-w-xl mx-auto my-32 lg:my-0 lg:h-screen">
            <Avatar />
            <h3 className="px-3 mt-3 text-base text-gray-800 dark:text-gray-200">
                Deep Learning Engineer로서의 경험을 쌓은 후, 1인 개발자의
                자유로운 삶에 매료되어 Full-Stack Engineer의 길로 선택했습니다.
                이 웹사이트는 일상의 즐거움과 편안함을 추구하는 개발자로서의
                소박한 꿈을 담아, 다양하고 유의미한 프로젝트들을 구상하고
                실현하는 공간입니다
            </h3>
            <MoblieContactInfo />
        </section>
    );
}
