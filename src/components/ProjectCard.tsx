import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BoxReveal } from './magicui/box-reveal';

interface ProjectCardProps {
  name: string;
  img: string;
  github?: string;
  live?: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ name, img, github, live, description, tags }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full">
      <Image
        src={img}
        alt={'xxx'}
        width={1000}
        height={1000}
        className=" rounded"
      ></Image>
      <BoxReveal
        boxColor={'black'}
        duration={0.5}
        width="100%"
      >
        <div className="flex flex-row items-center gap-2">
          <h4 className="text-2xl">{name}</h4>
          <div className="w-full h-[1px] bg-primary"></div>
          {github && (
            <Link href={github}>
              <FaGithub className="text-xl" />
            </Link>
          )}
          {live && (
            <Link href={live}>
              <ExternalLink />
            </Link>
          )}
        </div>
      </BoxReveal>
      <BoxReveal
        boxColor={'black'}
        duration={0.5}
      >
        <div className="flex flex-row flex-wrap mt-1">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span className="">{tag}</span>
              {index < tags.length - 1 && <span className="self-center px-1">-</span>}
            </React.Fragment>
          ))}
        </div>
      </BoxReveal>

      <BoxReveal
        boxColor={'black'}
        duration={0.5}
        width="100%"
      >
        <span className="line-clamp-3">{description}</span>
        <div className="px-4 py-2 border w-fit border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Learn More... (soon)
        </div>
      </BoxReveal>
    </div>
  );
}
