import { Command } from "./types";

export const commands: Record<string, Command> = {
  about: {
    name: "about",
    content: [
      {
        type: "text",
        content: "Hi, I'm Thanapon Johdee, an engineering student with a passion for computer specifically software development and hardware. I love creating tools that improve quality of life and am always excited to learn new things."
      }
    ]
  },
  projects: {
    name: "projects",
    content: [
      {
        type: "link",
        url: "https://github.com/yokeTH/SmallMediumLargeXO",
        placeholder: "SmallMediumLargeXO"
      },
      {
        type: "text",
        content: ": A final project of Programming Methodology that I course."
      },
      {
        type: "endline"
      },
      {
        type: "link",
        url: "https://github.com/yokeTH/2110363-HW_SYN_LAB_I",
        placeholder: "2110363-HW_SYN_LAB_I"
      },
      {
        type: "text",
        content: ": A GitHub repository store Verilog code from Hardware synthesis Lab"
      },
      {
        type: "endline"
      },
      {
        type: "link",
        url: "https://github.com/yokeTH/ComEngEss-final-project-backend",
        placeholder: "ComEngEss-final-project-backend"
      },
      {
        type: "text",
        content: ": A final project of Computer Engineering Essential. The project not allow to use external lib I need to create from scratch"
      }
    ]
  },
  contact: {
    name: "contact",
    content: [
      {
        type: "text",
        content: "You can reach me at contact@yoke-th.me or connect with me on Instagram @yoke.th ."
      }
    ]
  },
  help: {
    name: "help",
    content: [
      {
        type: "text",
        content: "Available commands:\n- about\n- projects\n- contact\n- clear"
      }
    ]
  }
};