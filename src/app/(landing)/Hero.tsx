import { CharacterScrambleEffect } from '@/components/CharacterScrambleEffect';

export default function HeroSection() {
  return (
    <section className="container mx-auto w-full min-h-[calc(100dvh-360px)]">
      <div className="flex flex-col my-4 gap-2 w-full text-center text-primary text-4xl transition">
        <span className="block">Hi, I&apos;m</span>
        <CharacterScrambleEffect
          className="font-bold block text-8xl"
          texts={['Thanapon', 'Yoke.th']}
        />
        <span className="block">a third-year engineering student at Chulalongkorn University and a developer.</span>
      </div>
    </section>
  );
}
