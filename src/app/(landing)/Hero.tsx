import { CharacterScrambleEffect } from '@/components/CharacterScrambleEffect';
import { TextLoop } from '@/components/ui/text-loop';

export default function HeroSection() {
  return (
    <section className="container px-4 mx-auto w-full md:min-h-[calc(100dvh-360px)]">
      <div className=" my-4 gap-2 w-full h-fit text-start justify-center items-center text-primary text-2xl md:text-4xl transition">
        <div className="inline">
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
      </div>
    </section>
  );
}
