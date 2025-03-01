import { CharacterScrambleEffect } from '@/components/CharacterScrambleEffect';
import { TextLoop } from '@/components/ui/text-loop';
import { TextShimmer } from '@/components/ui/text-shimmer';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="md:min-h-[calc(100dvh-96px)] flex flex-col justify-center">
      <div className=" my-4 gap-2 w-full h-fit text-start justify-center items-center text-muted-foreground transition">
        <div className="inline font-bold text-2xl md:text-4xl">
          <span className="">Hi, I&apos;m </span>
          <TextLoop
            interval={4}
            className="font-bold md:text-8xl text-secondary-foreground bg-secondary"
          >
            <span>Thanapon</span>
            <span>Yoke.th</span>
          </TextLoop>
          <br />
          <span className=""> a third-year engineering student at Chulalongkorn University and a developer.</span>
        </div>
        <div className="pt-8 text-xl flex flex-col gap-2">
          <TextShimmer className="block">My site&apos;s still a work in progress—stay tuned!</TextShimmer>
          <span className="block">
            In the meantime, check out my{' '}
            <Link
              href="https://github.com/yokeTH"
              className="px-4 py-1 border border-primary bg-primary-foreground text-primary text-sm hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))] transition duration-200"
            >
              GitHub
            </Link>{' '}
            to see what I&apos;m up to! 🚀
          </span>
        </div>
      </div>
    </section>
  );
}
