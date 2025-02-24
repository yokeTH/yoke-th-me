import { CharacterScrambleEffect } from '@/components/CharacterScrambleEffect';
import { TextLoop } from '@/components/ui/text-loop';

export default function HeroSection() {
  return (
    <section className="container px-4 mx-auto w-full md:min-h-[calc(100dvh-360px)]">
      <div className="flex flex-col my-4 gap-2 w-full text-start text-primary text-2xl md:text-4xl transition">
        <div className="inline">
          <span className="">Hi, I&apos;m </span>
          <TextLoop
            interval={4}
            className="font-bold"
          >
            <span>Thanapon Johdee</span>
            <span>Yoke.th</span>
          </TextLoop>
          <br />
          <span className=""> a third-year engineering student at Chulalongkorn University and a developer.</span>
        </div>
      </div>
    </section>
  );
}
