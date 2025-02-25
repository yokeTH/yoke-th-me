import { CharacterScrambleEffect } from '@/components/CharacterScrambleEffect';
import { TextLoop } from '@/components/ui/text-loop';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="container px-4 mx-auto w-full md:min-h-[calc(100dvh-360px)] flex flex-col justify-center">
      <div className=" my-4 gap-2 w-full h-fit text-start justify-center items-center text-primary transition">
        <div className="inline text-2xl md:text-4xl">
          <span className="">Hi, I&apos;m </span>
          <TextLoop
            interval={4}
            className="font-bold md:text-8xl"
          >
            <span>Thanapon</span>
            <span>Yoke.th</span>
          </TextLoop>
          <br />
          <span className=""> a third-year engineering student at Chulalongkorn University and a developer.</span>
        </div>
        <div className="pt-8 text-xl flex flex-col gap-2">
          <span className="block">My site&apos;s still a work in progress—stay tuned!</span>
          <span className="block">
            In the meantime, check out my{' '}
            <Link
              href="https://github.com/yokeTH"
              className="px-4 py-2 border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
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
