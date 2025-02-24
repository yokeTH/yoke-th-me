import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import Link from 'next/link';
import Image from 'next/image';

export function BentoSection() {
  return (
    <section className="flex flex-col items-center justify-between p-12">
      <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-2">
        <div className="col-span-2 rounded-xl overflow-hidden border-2 relative">
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
              className="aspect-video w-full h-full"
            />
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden border-2 relative">
          <Link href={'/resume'}>
            <div className="absolute p-4 z-100 z-20">
              <h2 className="text-xl font-bold">Resume</h2>
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
              className="absolute"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
