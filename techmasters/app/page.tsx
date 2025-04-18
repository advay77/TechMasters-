import { GallerySection } from "@/components/events/gallery-section";
import { AboutSection } from "@/components/home/about-section";
import { Team } from "@/components/home/team";
import Hero from "@/components/hero/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Team />
    </main>
  );
}
