import { CommandOutput } from '@/components/ui/terminal/CommandOutput';
import React, { type JSX } from 'react';
import { renderCommandContent } from '@/components/ui/terminal/renderCommandContent';
import { Command } from '@/app/terminal/types';

export const renderCommand = (command: Command): JSX.Element => {
  return <CommandOutput>{command.content.map((contentItem) => renderCommandContent(contentItem))}</CommandOutput>;
};
