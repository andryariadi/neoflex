import HeroSection from "@/components/HeroSection";
import UserPrograms from "@/components/UserPrograms";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />

      {/* GENERATE & USER PROGRAM */}
      <UserPrograms />
    </>
  );
}
