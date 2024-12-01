import React from 'react';

interface CommandOutputProps {
  children: React.ReactNode;
}

export const CommandOutput: React.FC<CommandOutputProps> = ({ children }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 whitespace-pre-wrap">
      {children}
    </div>
  );
};