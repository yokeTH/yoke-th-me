import React, { useEffect, useRef } from 'react';
import { CommandOutput } from './CommandOutput';

export interface CommandHistory {
    name: string;
    content: React.ReactNode;
}

interface CommandHistoryProps {
  commandHistory: CommandHistory[];
}

export const CommandHistory: React.FC<CommandHistoryProps> = ({ commandHistory }) => {
  const historyEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (historyEndRef.current) {
      historyEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandHistory]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {commandHistory.map((command, index) => (
        <div key={index} className="mb-2">
          <span className="text-green-500">{'>'}</span> {command.name}
          <div>{command.content}</div>
        </div>
      ))}
      <div ref={historyEndRef} />
    </div>
  );  
};
