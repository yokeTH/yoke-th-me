import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/nav/nav';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './Hero';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { Spotlight } from '@/components/ui/spotlight';
import { BentoSection } from './Bento';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-grid-small-black/[0.2]">
      <Navbar />
      <div className="container px-4 mx-auto w-full">
        <HeroSection />
        <Projects />
        <BentoSection />
        <Footer />
      </div>
    </div>
  );
}
