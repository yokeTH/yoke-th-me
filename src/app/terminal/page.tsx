"use client";
import React, { useState } from "react";
import { CommandHistory } from "@/components/ui/terminal/CommandHistory";
import { CommandInput } from "@/components/ui/terminal/CommandInput";
import { CommandOutput } from "@/components/ui/terminal/CommandOutput";

const commands = {
  about:
    "Hi, I'm Thanapon Johdee, an engineering student with a passion for computer specifically software development and hardware. I love creating tools that improve quality of life and am always excited to learn new things.",
  projects: [
    {
      name: "SmallMediumLargeXO",
      description: "A final project of Programming Methodology that I course.",
      link: "https://github.com/yokeTH/SmallMediumLargeXO",
    },
    {
      name: "2110363-HW_SYN_LAB_I",
      description:
        "A GitHub repository store Verilog code from Hardware synthesis Lab",
      link: "https://github.com/yokeTH/2110363-HW_SYN_LAB_I",
    },
    {
      name: "ComEngEss-final-project-backend",
      description:
        "A final project of Computer Engineering Essential. The project not allow to use external lib I need to create from scratch",
      link: "https://github.com/yokeTH/ComEngEss-final-project-backend",
    },
  ],
  contact:
    "You can reach me at contact@yoke-th.me or connect with me on Instagram @yoke.th .",
  help: "Available commands:\n- about\n- projects\n- contact\n- clear",
};

// TODO: Make It flexible
const commandDecoder = (command: string) => {
  switch (command.toLowerCase()) {
    case "about":
      return <CommandOutput>{commands.about}</CommandOutput>;
    case "projects":
      return commands.projects.map((project) => (
        <CommandOutput key={project.name}>
          <span>
            {project.name}: {project.description} -{" "}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            {project.link}
          </a>
        </CommandOutput>
      ));
    case "contact":
      return <CommandOutput>{commands.contact}</CommandOutput>;
    case "help":
      return <CommandOutput>{commands.help}</CommandOutput>;
    default:
      return 'Command not found. Type "help" to see available commands.';
  }
};

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
