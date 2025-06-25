import Link from "next/link";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
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
                                        <DialogTrigger className="flex justify-center cursor-pointer">
                                            <Image src={item.src} alt={item.alt} className="hover:shadow-lg" width={100} height={100} />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogTitle>{item.title}</DialogTitle>
                                            <div className="flex flex-row justify-between gap-4">
                                                <Image src={item.src} alt={item.alt} width={100} height={100} />
                                                <DialogDescription className="text-justify">{item.description}</DialogDescription>
                                            </div>
                                            <div className="flex justify-end pr-5 w-full">
                                                <Link href={item.endpoint} className="border-2 border-[#111928] hover:bg-[#91F6D0] px-3 py-1 rounded-md">Open</Link>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    
                                    <h1 className="text-center">{item.title}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}