import { CommandOutput } from "@/components/ui/terminal/CommandOutput";
import React from "react";
import { commands } from "@/app/terminal/commands";
import { renderCommandContent } from "@/components/ui/terminal/renderCommandContent";
import { Command, CommandContent } from "@/app/terminal/types";


export const renderHelpCommand = (): JSX.Element => {
  const helpCommand: Record<string, Command> = {
    help: {
      name: "help",
      content: [{
        type: 'text',
        content: 'Available Commands:'
      },
      {
        type: 'endline'
      },
      ...Object.keys(commands).map((commandName) => ({ type: 'text', content: `${commandName}\n`, format: ['list-item', 'italic'] })) as CommandContent[]
      ],
    },
  };

  return (
    <CommandOutput>
      {helpCommand.help.content.map((contentItem) => renderCommandContent(contentItem)
      )}
    </CommandOutput>
  );
};
