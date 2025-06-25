import { experienceList } from "@/lib/experiences";
import { ExperienceCard } from "./ExperienceCard";

export default function ExperiencesSection() {
    return (
        <section id="experiences" className="min-y-screen">
            <div className="flex flex-col gap-6 rounded-xl py-8 px-6 bg-white">
                <div className="w-full flex flex-col gap-3 items-center">
                    <p className="text-green-800 font-semibold">What I&apos;ve Work On Before</p>
                    <h1 className="text-3xl font-semibold">My Experiences So Far</h1>
                    {/*<p className="text-gray-500">What I've Work On Before</p>*/}
                </div>
                <div className="flex flex-col lg:flex-row gap-8 px-5 justify-around">
                    {experienceList.map((item) => (
                        <ExperienceCard key={item.work} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}