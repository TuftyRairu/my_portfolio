import Image from "next/image"

export default function GitRepoSection() {
    return (
        <section id="gitrepo" className="min-y-screen">
            <div className="flex flex-row justify-around rounded-xl py-6 px-6 bg-white">
                <div className="flex flex-col gap-4 rounded-xl py-8 px-8 border-2">
                    <div className="flex flex-col">
                        <p className="text-md font-medium text-green-900">Cooperation</p>
                        <h1 className="text-3xl font-medium">More than +158 <span>companies trusted worldwide_</span></h1>
                    </div>
                    <div className="flex flex-row">
                        <Image src="/code.jpg" alt="test" width={50} height={50} />
                        <Image src="/code.jpg" alt="test" width={50} height={50} />
                        <Image src="/code.jpg" alt="test" width={50} height={50} />
                    </div>
                    <div>

                    </div>
                </div>

                <div className="rounded-xl py-6 px-6 border-2">
                    <h1>* Git Journaling Test</h1>
                </div>
            </div>
        </section>
    )
}