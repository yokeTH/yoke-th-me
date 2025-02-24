import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/nav/nav';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <section className="flex flex-col items-center justify-between p-12">
        <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-2">
          <div className="group/card col-span-2 rounded-xl overflow-hidden border relative">
            <Link href={'/terminal'}>
              <div className="p-4 absolute bottom-0 z-10">
                <h2 className="text-4xl text-white font-bold">Thaminal</h2>
                <h3 className="text-muted">
                  A terminal-inspired portfolio where users can type commands to view the my information.
                </h3>
              </div>
              <Image
                src="/thumbnail/terminal.png"
                width={10000}
                height={10000}
                alt={'terminal thumbnail'}
                className="group-hover/card:scale-150 group-hover/card:translate-x-44 group-hover/card:translate-y-28 transition"
              />
            </Link>
          </div>
          <div className="group/card rounded-xl overflow-hidden border">
            <Link href={'/resume'}>
              <div className="p-4 z-100">
                <h2 className="text-xl font-bold">Resume</h2>
                <h3 className="text-muted-foreground">
                  A detailed view of my professional experience, education, and skills.
                </h3>
              </div>
              <Image
                src="/thumbnail/resume.png"
                width={10000}
                height={10000}
                alt={'resume thumbnail'}
                className="hover/card:scale-110 transition"
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
