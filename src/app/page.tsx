"use client";

import BannerSection from "@/components/Home/BannerSection";
import ProjectListSection from "@/components/Home/ProjectsListSection";
import ExperiencesSection from "@/components/Home/ExperienceSection/ExperiencesSection";
import WorkAnalyticsSection from "@/components/Home/WorksAnalyticsSection";
import TestSection from "@/components/Home/TestSection";
import GitRepoSection from "@/components/Home/GitRepoSection";

export default function Home() {

  return (
    <div className="flex flex-col gap-6">
      <BannerSection />
      <WorkAnalyticsSection />
      <ExperiencesSection />
      <GitRepoSection />
      <ProjectListSection />
      <TestSection />
    </div>
  );
}