"use client";
import React, { useState } from "react";
import { CommandHistory } from "@/components/ui/terminal/CommandHistory";
import { CommandInput } from "@/components/ui/terminal/CommandInput";
import { CommandOutput } from "@/components/ui/terminal/CommandOutput";
import { commands } from "./commands";
import { Command, CommandContent, LinkCommand, TextCommand, } from "./types";
import Link from "next/link";
import Image from "next/image";
import { ComposeTextOutputs } from "@/components/ui/terminal/textOutput";
import { Separator } from "@/components/ui/separator";

const renderHelpCommand = (): JSX.Element => {
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
  }

  return (
    <CommandOutput>
      {helpCommand.help.content.map((contentItem) =>
        renderCommandContent(contentItem)
      )}
    </CommandOutput>
  );
}

const commandDecoder = (command: string): JSX.Element => {
  const foundCommand = commands[command.toLowerCase() as keyof typeof commands] as Command;

  // hook the help command to make it real-time update available commands
  if (command.toLocaleLowerCase() === 'help') {
    return renderHelpCommand()
  }

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
      return <Image src={content.content} alt={""} />;
    case 'link':
      return <Link
        href={(content as LinkCommand).url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "inherit" }}
        className="after:content-['↗']"
      >
        {(content as LinkCommand).placeholder}
      </Link>
    case 'text':
      const textContent = content as TextCommand;
      const formats = Array.isArray(textContent.format)
        ? textContent.format
        : textContent.format
          ? [textContent.format]
          : [];

      return <ComposeTextOutputs formats={formats}>
        {textContent.url ?
          // if provided url return as link
          <Link
            href={textContent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="after:content-['↗']"
          >
            {textContent.content}
          </Link>

          :
          // if not provided url
          textContent.content
        }
      </ComposeTextOutputs>;
    case 'endline':
      return <br />
    case 'separator':
      return <CommandOutput><Separator /></CommandOutput>
    default:
      return <></>;
  }
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
