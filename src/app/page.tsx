"use client";

import BannerSection from "@/components/Home/BannerSection";
import ProjectListSection from "@/components/Home/ProjectsListSection";
import WorkAnalyticsSection from "@/components/Home/WorksAnalyticsSection";

export default function Home() {

  return (
    <div className="flex flex-col gap-6">
      <BannerSection />
      <WorkAnalyticsSection />
      <ProjectListSection />
    </div>
  );
}