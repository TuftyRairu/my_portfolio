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
import { projectList } from "@/lib/projects";

export default function ProjectListSection () {
    return (
        <section id="projects" className="min-y-screen">
            <div className="flex flex-col gap-5 rounded-xl py-6 px-6 bg-white">
                <div>Projects</div>
                <div className="flex flex-col gap-7 justify-around items-center md:flex-row lg:flex-row">
                    {
                        projectList.map((item) => {
                            return (
                                <div key={item.title} className="flex flex-col gap-4">
                                    <Dialog>
                                        <DialogTrigger className="cursor-pointer hover:shadow-lg hover:w-24">
                                            <Image src={item.src} alt={item.alt} width={100} height={100} />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>{item.title}</DialogTitle>
                                                <div className="flex flex-row justify-between">
                                                    <Image src={item.src} alt={item.alt} width={100} height={100} />
                                                    <DialogDescription>{item.description}</DialogDescription>
                                                </div>
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
            </div>
        </section>
    )
}