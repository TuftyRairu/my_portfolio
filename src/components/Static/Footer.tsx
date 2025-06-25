"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Github, LinkedinIcon } from "lucide-react";

export default function FooterSection() {
    return (
        <section id="footer" className="w-full">
            <div className="flex flex-col justify-center items-center gap-5 rounded-xl pt-12 pb-5 px-6">
                <div>
                    <Link href="/" className="flex flex-row items-center -space-x-0">
                        <div className="flex -space-x-2">
                            <ChevronLeft color="darkgreen" />
                            <ChevronRight color="darkgreen" />
                        </div>
                        <h1 className="text-xl text-black font-mono">Rhyle.Dev</h1>
                    </Link>
                </div>
                <div className="flex flex-row gap-3">
                    <Link href="https://github.com/TuftyRairu">
                        <Github />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rhyle-henrick-crausus-181553253/">
                        <LinkedinIcon />
                    </Link>
                </div>
                <div className="flex flex-row gap-5 text-gray-600">
                    <Link href="">About Me</Link>
                    <Link href="">Projects</Link>
                    <Link href="">Resume</Link>
                    <Link href="">Contacts</Link>
                </div>
            </div>
        </section>
    )
}