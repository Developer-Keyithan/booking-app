import Hero from "@/components/hero-section";
import Features from "@/components/features";
import PopularDestinations from "@/components/popular-destinations";
import Counts from "@/components/counts";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Counts />
      <PopularDestinations />
    </>
  );
}
