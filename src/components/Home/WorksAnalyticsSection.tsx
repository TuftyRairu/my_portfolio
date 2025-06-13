import { Calendar, Monitor, Ribbon, Smile } from "lucide-react";


export default function WorkAnalyticsSection () {
    return (
        <section id="analytics" className="min-y-screen">
            <div className="flex flex-row justify-between bg-white p-12">
                <div className="flex flex-col gap-4">
                    <Calendar color="#036E46" />
                    <div>
                        <h1 className="font-bold text-5xl">12+</h1>
                        <p className="text-xl">Hey, Years Experience</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Monitor color="#036E46" />
                    <div>
                        <h1 className="font-bold text-5xl">150+</h1>
                        <p className="text-xl">Projects Completed</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Smile color="#036E46" />
                    <div>
                        <h1 className="font-bold text-5xl">300+</h1>
                        <p className="text-xl">Satisfied Clients</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Ribbon color="#036E46" />
                    <div>
                        <h1 className="font-bold text-5xl">18+</h1>
                        <p className="text-xl">Awards Winner</p>
                    </div>
                </div>
            </div>
        </section>
    )
}