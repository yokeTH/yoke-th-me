import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';

export function BentoSection() {
  return (
    <section>
      <SectionHeader
        name="Random"
        position="end"
      />
      <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-2">
        <div className="md:col-span-2 aspect-video overflow-hidden border-2 border-black relative p-4">
          <Link href={'/terminal'}>
            <div className="p-4 absolute bottom-0 z-10">
              <h2 className="text-4xl text-white font-bold">Thaminal</h2>
              <h3 className="text-muted">
                A terminal-inspired portfolio where users can type commands to view the my information.
              </h3>
            </div>
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
              blurIntensity={1}
            />
            <Image
              src="/thumbnail/terminal.png"
              width={10000}
              height={10000}
              alt={'terminal thumbnail'}
              className=""
            />
          </Link>
        </div>
        <div className="overflow-hidden border-2 border-black relative p-4">
          <Link href={'/resume'}>
            <div className="absolute p-4 z-100 z-20">
              <h2 className="text-4xl font-bold">Resume</h2>
              <h3 className="text-muted-foreground">
                A detailed view of my professional experience, education, and skills.
              </h3>
            </div>
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-[50%] w-full z-10"
              blurIntensity={1}
              direction="top"
            />
            <Image
              src="/thumbnail/resume.png"
              width={10000}
              height={10000}
              alt={'resume thumbnail'}
              className=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
