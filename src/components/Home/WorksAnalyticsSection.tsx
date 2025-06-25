"use client";

import { Calendar, Monitor, Ribbon, Smile } from "lucide-react";


export default function WorkAnalyticsSection () {
    return (
        <section id="analytics" className="min-y-screen">
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-between rounded-xl bg-white p-12">
                <div className="flex flex-col gap-8 w-full">
                    <Calendar className="flex self-center" color="#036E46" />
                    <div className="text-center">
                        <h1 className="font-bold text-5xl">12+</h1>
                        <p className="text-xl">Hey, Years Experience</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <Monitor className="flex self-center" color="#036E46" />
                    <div className="text-center">
                        <h1 className="font-bold text-5xl">150+</h1>
                        <p className="text-xl">Projects Completed</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <Smile className="flex self-center" color="#036E46" />
                    <div className="text-center">
                        <h1 className="font-bold text-5xl">300+</h1>
                        <p className="text-xl">Satisfied Clients</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <Ribbon className="flex self-center" color="#036E46" />
                    <div className="text-center">
                        <h1 className="font-bold text-5xl">18+</h1>
                        <p className="text-xl">Awards Winner</p>
                    </div>
                </div>
            </div>
        </section>
    )
}