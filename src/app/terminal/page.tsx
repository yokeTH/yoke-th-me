"use client";
import React, { useState } from "react";
import { CommandHistory } from "@/components/ui/terminal/CommandHistory";
import { CommandInput } from "@/components/ui/terminal/CommandInput";
import { CommandOutput } from "@/components/ui/terminal/CommandOutput";
import { commands } from "./commands";
import { Command, CommandContent, LinkCommand } from "./types";
import Link from "next/link";
import Image from "next/image";

const commandDecoder = (command: string): JSX.Element => {
  const foundCommand = commands[command.toLowerCase() as keyof typeof commands] as Command;

  if (!foundCommand) {
    return (
      <CommandOutput>
        Command `{command}` not found. Type "help" to see available commands.
      </CommandOutput>
    )
  }

  return renderCommand(foundCommand)
}


const renderCommand = (command: Command): JSX.Element => {

  return (
    <CommandOutput>
      {command.content.map((contentItem) =>
        renderCommandContent(contentItem)
      )}
    </CommandOutput>
  );

}

const renderCommandContent = (content: CommandContent): JSX.Element => {
  switch (content.type) {
    case 'image':
      <Image src={content.content} alt={""}></Image>
    case 'link':
      return <Link
        href={(content as LinkCommand).url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "inherit" }}
      >
        {(content as LinkCommand).placeholder}
      </Link>
    case 'text':
      return <span>{content.content}</span>;
    case 'endline':
      return <CommandOutput>{""}</CommandOutput>
    default:
      <></>
  }
  return <></>
}


const TerminalPortfolio: React.FC = () => {
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([
    {
      name: "welcome",
      content: (
        <CommandOutput>
          Hi, use the command &quot;about&quot; to learn more about me.
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
    if (command == "clear") {
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
