interface SectionHeaderProps {
  name: string;
  position?: 'start' | 'end';
}

export function SectionHeader({ name, position = 'start' }: SectionHeaderProps) {
  return (
    <div className={`flex flex-row${position === 'end' && '-reverse'} gap-2 items-center mb-4`}>
      <h2 className="text-4xl">{name}.</h2>
      <div className="h-[2px] bg-primary w-full"></div>
    </div>
  );
}
