import Link from "next/link";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const projectList = [
    {
        title: "Project 1",
        src: "/code.jpg",
        link: "/projects/1",
        alt: "",
        description: "1"
    },
    {
        title: "Project 2",
        src: "/code.jpg",
        link: "/projects/2",
        alt: "",
        description: "2"
    },
    {
        title: "Project 3",
        src: "/code.jpg",
        link: "/projects/3",
        alt: "",
        description: "3"
    },
    {
        title: "Project 4",
        src: "/code.jpg",
        link: "/projects/4",
        alt: "",
        description: "4"
    },
]

export default function ProjectListSection () {
    return (
        <section id="projects" className="min-y-screen">
            <div className="flex flex-col gap-7 justify-around items-center md:flex-row lg:flex-row rounded-xl py-6 px-6 bg-white">
                {
                    projectList.map((item) => {
                        return (
                            <div key={item.title} className="flex flex-col gap-4">
                                <Dialog>
                                    <DialogTrigger className="cursor-pointer hover:shadow-lg">
                                        <Image src={item.src} alt={item.alt} width={100} height={100} />
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>{item.title}</DialogTitle>
                                            <Image src={item.src} alt={item.alt} width={100} height={100} />
                                            <DialogDescription>{item.description}</DialogDescription>
                                            <Link href={item.link}>Open</Link>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                                
                                <h1>{item.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}