import { projectList } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

export default function Project({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params);
    const project = projectList.find((p) => p.endpoint === `/projects/${id}`);

    if (!project) return notFound();

    return (
        <section className="min-y-screen">
            <div className="flex flex-col gap-5 rounded-xl py-6 px-6 bg-white">
                <h1 className="font-bold text-2xl">Projects</h1>
                <div className="flex flex-col gap-2">
                    <h1>{project.title}</h1>
                    <Image src={project.src} alt={project.alt} width={100} height={100} />
                    <p>{project.description}</p>
                </div>
            </div>
        </section>
    )
}