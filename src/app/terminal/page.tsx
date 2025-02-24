'use client';
import React, { useState } from 'react';
import { CommandHistory } from '@/components/ui/terminal/CommandHistory';
import { CommandInput } from '@/components/ui/terminal/CommandInput';
import { CommandOutput } from '@/components/ui/terminal/CommandOutput';
import { commandDecoder } from '@/components/ui/terminal/commandDecoder';

const TerminalPortfolio: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([
    {
      name: 'welcome',
      content: (
        <CommandOutput>
          Hi my name is <span className="bg-yellow-200 text-black text-lg font-bold mb-1">Thanapon Johdee</span> , use
          the command &quot;about&quot; to learn more about me.
          <br />
          Alternately use &quot;help&quot; to see all commands.
        </CommandOutput>
      ),
    },
  ]);

  const executeCommand = (command: string) => {
    if (!command) return;
    const output = commandDecoder(command);
    setCommandHistory((prev) => [...prev, { name: command, content: output }]);
    if (command == 'clear') {
      setCommandHistory([]);
      return;
    }
  };

  return (
    <div className="flex flex-col h-dvh bg-gray-900 text-white font-mono">
      <CommandHistory commandHistory={commandHistory} />
      <CommandInput onSubmit={executeCommand} />
    </div>
  );
};

export default TerminalPortfolio;
