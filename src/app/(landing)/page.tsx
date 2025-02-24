import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/nav/nav';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './Hero';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { Spotlight } from '@/components/ui/spotlight';
import { BentoSection } from './Bento';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BentoSection />
      <Footer />
    </div>
  );
}
