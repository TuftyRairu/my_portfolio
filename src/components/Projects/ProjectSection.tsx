"use client";

import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";


export default function ProjectSection() {
    return (
        <section className="min-y-screen">
            <div className="flex flex-row justify-around rounded-xl py-6 px-6 bg-white">
                <Card className="p-6">
                    <CardTitle>Test</CardTitle>
                    <CardContent>
                        Test
                    </CardContent>
                    <CardFooter>Test</CardFooter>
                </Card>
                <Card className="p-6">
                    <CardTitle>Test</CardTitle>
                    <CardContent>
                        Test
                    </CardContent>
                    <CardFooter>Test</CardFooter>
                </Card>
                <Card className="p-6">
                    <CardTitle>Test</CardTitle>
                    <CardContent>
                        Test
                    </CardContent>
                    <CardFooter>Test</CardFooter>
                </Card>
            </div>
        </section>
    )
}