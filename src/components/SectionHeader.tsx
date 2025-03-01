interface SectionHeaderProps {
  name: string;
  position?: 'start' | 'end';
}

export function SectionHeader({ name, position = 'start' }: SectionHeaderProps) {
  return (
    <div
      className={`flex ${position === 'end' ? ' flex-row-reverse' : 'flex-row'} gap-2 items-center my-4`}
      id={name.toLocaleLowerCase()}
    >
      <h2 className="text-4xl text-primary">{name}.</h2>
      <div className="h-[2px] bg-muted-foreground w-full"></div>
    </div>
  );
}
