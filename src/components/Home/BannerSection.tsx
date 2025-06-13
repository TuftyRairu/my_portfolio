import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import 'devicon/devicon.min.css';

const typedStrings = [
    "{Full Stack} Web ^1000& App<br>Developer_",
    "Quality Assurance<br>Engineer",
    "Pentester"
];

export default function BannerSection () {
    return (
        <section id="banner" className="min-y-screen">

            <div className="flex flex-row justify-around items-center rounded-xl max-h-[90vh] p-6 bg-white">
                <div className="flex justify-center w-full">
                    <Image src="/ID2.png" alt="Profile" width={200} height={200} className="pentagon object-cover w-96 h-96 rounded-xl" />
                </div>
                <div className="flex flex-col gap-4 w-full pr-2">
                    <h1 className="flex flex-row gap-2 text-sm md:text-md lg:text-lg text-[#0E1524]">
                        <p className="text-red-400">{"<span>"}</p>
                        <p className="text-gray-500">{"Hey, I'm Rhyle"}</p>
                        <p className="text-red-400">{"</span>"}</p>
                    </h1>
                    <ReactTyped
                        strings={typedStrings}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#036E46] h-[17vh]"
                        typeSpeed={80}
                        backSpeed={60}
                        loop
                    />
                    <div className="flex flex-col gap-4 text-sm md:text-md lg:text-lg text-[#0E1524] pr-3">
                        <div className="text-gray-500">
                            <span className="text-red-400">&lt;p&gt;</span>&nbsp;
                            With expertise in cutting-edge technologies like
                            <span className="text-red-400"> NodeJS, React, NextJS, and Laravel</span>,
                            combined with hands-on experience in
                            <span className="text-red-400"> Cypress, Postman</span>,
                            and security tools like
                            <span className="text-red-400"> Burp Suite</span>,
                            and Terminal based tools (
                            <span className="text-red-400">nuclei, subfinder</span>, etc.)
                            I deliver web solutions that are innovative, robust, and secure. &nbsp;
                            <span className="text-red-400">&lt;/p&gt;</span>
                        </div>
                        <div className="flex flex-row gap-1 text-gray-500">
                            <div className="flex flex-row gap-4">
                                <i className="devicon-nodejs-plain colored text-3xl"></i>
                                <i className="devicon-typescript-plain colored text-3xl"></i>
                                <i className="devicon-nextjs-plain colored text-3xl"></i>
                                <i className="devicon-react-plain colored text-3xl"></i>
                            </div>
                            <span>... and</span>
                            <Link href={"/"} className="underline">more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}