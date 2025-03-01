import CTASection from "@/components/home/CTASection";
import DemoSection from "@/components/home/DemoSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <CTASection />
    </div>
  );
}
