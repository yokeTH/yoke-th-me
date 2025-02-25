import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';

const projects = [
  {
    name: 'two link',
    img: 'https://placehold.co/600x400.png',
    description:
      'sunt cupidatat et nostrud cupidatat qui duis eiusmod pariatur ea quis est elit nisi sunt aliqua ipsum aliquip commodo amet reprehenderit dolore mollit eu non do id nulla magna cupidatat esse ullamco amet qui incididunt consectetur velit ut fugiat dolor eu non minim proident proident exercitation non eu voluptate incididunt officia qui proident labore est officia excepteur dolore mollit duis incididunt esse ullamco deserunt officia ea elit non laboris aliquip pariatur est fugiat sit id adipisicing aliqua esse est ipsum eiusmod anim consequat dolor do ut labore est pariatur proident nostrud cillum dolore qui minim non sint elit adipisicing laborum',
    tags: ['nextjs', 'tailwindcss'],
    github: 'github.com/yokeTH',
    live: '/',
  },
  {
    name: 'external',
    img: 'https://placehold.co/600x400.png',
    description:
      'Id eiusmod in consectetur nulla exercitation mollit. Labore proident et nulla minim velit cillum labore officia anim consequat commodo sint. Voluptate minim quis ea velit voluptate nulla amet mollit sunt laboris adipisicing in dolore deserunt ipsum. Ad aute cupidatat laborum. Est veniam excepteur voluptate eu anim velit id pariatur cupidatat sunt laboris do aliqua Lorem ad.',
    tags: ['nextjs'],
    live: '/',
  },
  {
    name: 'GH',
    img: 'https://placehold.co/600x400.png',
    description:
      'Id eiusmod in consectetur nulla exercitation mollit. Labore proident et nulla minim velit cillum labore officia anim consequat commodo sint. Voluptate minim quis ea velit voluptate nulla amet mollit sunt laboris adipisicing in dolore deserunt ipsum. Ad aute cupidatat laborum. Est veniam excepteur voluptate eu anim velit id pariatur cupidatat sunt laboris do aliqua Lorem ad.',
    tags: ['nextjs'],
    github: 'github.com/yokeTH',
  },
];

export default function Projects() {
  return (
    <section>
      <SectionHeader
        name="Projects"
        position="start"
      />
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            img={project.img}
            description={project.description}
            tags={project.tags}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}
