"use client";

import { experienceList } from "@/lib/experiences";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function ExperienceCard({ item }: { item: (typeof experienceList)[0] }) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const el = contentRef.current;
        if (el) {
            setIsOverflowing(el.scrollHeight > el.clientHeight);
        }
    }, []);

    return (
        <div className="hidden md:block lg:flex lg:w-[30rem] grow-3 lg:flex-col lg:gap-5 rounded-xl p-6 border-2 border-gray-300">
            <div>
                <h1 className="font-bold">{item.work}</h1>
                <p>{item.date_work_type}</p>
                <p className="text-sm">
                    {item.street}
                    <Link href={item.link} className="text-green-800">
                        {item.link_name}
                    </Link>
                </p>
            </div>

            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ${
                expanded ? "max-h-screen" : "max-h-40"
                }`}
            >
                {item.activies.map((act) => (
                <ul key={act} className="space-y-2 text-justify">
                    <li className="relative pl-6 before:content-['❖'] before:absolute before:left-0 before:text-green-800">
                    {act}
                    </li>
                </ul>
                ))}
            </div>

            {isOverflowing && (
                <button
                onClick={() => setExpanded(!expanded)}
                className="text-green-800 text-sm mt-2 hover:underline self-start cursor-pointer"
                >
                {expanded ? "See less ▲" : "See more ▼"}
                </button>
            )}
        </div>
    )
}