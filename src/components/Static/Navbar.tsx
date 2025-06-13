"use client"

import { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { ChevronLeft, ChevronRight, Github, HopOffIcon, LinkedinIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlist = [
    {
        title: "About Me",
        link: "#about-me"
    },
    {
        title: "Projects",
        link: "#projects"
    },
    {
        title: "Resume",
        link: "/resume"
    },
    {
        title: "Contacts",
        link: "#contacts"
    },
];

export default function NavBarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    function getNavLinkClass(isActive: unknown) {
        return `text-platinum p-3 hover:text-[#91F6D0] font-sans ${
          isActive ? 'text-[#91F6D0]' : ''
        }`;
    }

    return (
        <nav className="border-b-2 border-gradient-to-r from-[#91F6D0] to-transparent shadow-md rounded-xl bg-[#111928]">
            <div className="container py-5 pr-10 pl-2 md:px-auto lg:px-auto md:mx-auto lg:mx-auto flex justify-between items-center">
                <Link href="/" className="text-platinum flex flex-row items-center -space-x-0">
                    <div className="flex -space-x-2">
                        <ChevronLeft color="#91F6D0" />
                        <ChevronRight color="#91F6D0" />
                    </div>
                    <h1 className="text-xl font-mono">Rhyle.Dev</h1>
                </Link>
                <NavigationMenu className="hidden md:block lg:block">
                    <NavigationMenuList className="flex space-x-12">
                        {
                            navlist.map((item) => {
                                const isActive = pathname.startsWith(item.link);
                                return (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink asChild>
                                            <Link 
                                                href={item.link} 
                                                className={getNavLinkClass(isActive)} 
                                                aria-current={isActive ? 'page' : undefined}
                                                tabIndex={isActive ? 0 : -1}
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                )
                            })
                        }
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="hidden md:flex lg:flex flex-row space-x-2">
                    {/* <Link 
                        href="#" 
                        className="flex gap-3 text-carrotorangecolor border border-carrotorangecolor rounded-md hover:bg-[#E3E3E3] hover:text-blackpearlcolor hover:border-blackpearlcolor p-2 transition duration-300"
                    >
                        <PhoneCall />
                        Contact Me
                    </Link> */}
                    <Link href="https://github.com/TuftyRairu" className="text-platinum hover:text-[#91F6D0]">
                        <Github />
                    </Link>
                    <Link href="https://www.linkedin.com/in/rhyle-henrick-crausus-181553253/" className="text-platinum hover:text-[#91F6D0]">
                        <LinkedinIcon />
                    </Link>
                    <Link href="https://hackerone.com/tuftmist?type=user" className="text-platinum hover:text-[#91F6D0] px-1">
                        <HopOffIcon />
                    </Link>
                </div>

                <div className="md:hidden lg:hidden sm:flex sm:justify-between">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-platinum focus:outline-none cursor-pointer"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ):(
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}