"use client";
import { CommandOutput } from "@/components/ui/terminal/CommandOutput";
import React from "react";
import { commands } from "@/app/terminal/commands";
import { renderCommand } from "@/components/ui/terminal/renderCommand";
import { renderHelpCommand } from "@/components/ui/terminal/renderHelpCommand";
import { Command } from "@/app/terminal/types";

export const commandDecoder = (command: string): JSX.Element => {
  const foundCommand = commands[command.toLowerCase() as keyof typeof commands] as Command;

  // hook the help command to make it real-time update available commands
  if (command.toLocaleLowerCase() === 'help') {
    return renderHelpCommand();
  }

  if (!foundCommand) {
    return (
      <CommandOutput>
        Command `{command}` not found. Type &quot;help&quot; to see available commands.
      </CommandOutput>
    );
  }


  return renderCommand(foundCommand);
};
