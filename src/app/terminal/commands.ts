import { Command } from "./types";

export const commands: Record<string, Command> = {
  about: {
    name: "about",
    content: [
      {
        type: "text",
        content:
          "Hi, I'm Thanapon Johdee, an engineering student with a passion for computer specifically software development and hardware. I love creating tools that improve quality of life and am always excited to learn new things.",
        format: ["success"],
      },
    ],
  },
  projects: {
    name: "projects",
    content: [
      {
        type: "link",
        url: "https://github.com/yokeTH/SmallMediumLargeXO",
        placeholder: "SmallMediumLargeXO",
      },
      {
        type: "text",
        content: ": A final project of Programming Methodology that I course.",
      },
      {
        type: "endline",
      },
      {
        type: "link",
        url: "https://github.com/yokeTH/2110363-HW_SYN_LAB_I",
        placeholder: "2110363-HW_SYN_LAB_I",
      },
      {
        type: "text",
        content:
          ": A GitHub repository store Verilog code from Hardware synthesis Lab",
      },
      {
        type: "endline",
      },
      {
        type: "link",
        url: "https://github.com/yokeTH/ComEngEss-final-project-backend",
        placeholder: "ComEngEss-final-project-backend",
      },
      {
        type: "text",
        content:
          ": A final project of Computer Engineering Essential. The project not allow to use external lib I need to create from scratch",
      },
    ],
  },
  contact: {
    name: "contact",
    content: [
      {
        type: "text",
        content:
          "You can reach me at contact@yoke-th.me or connect with me on Instagram @yoke.th .",
      },
    ],
  },
  help: {
    name: "help",
    content: [
      {
        type: "text",
        content: "Available commands:\n- about\n- projects\n- contact\n- clear",
      },
    ],
  },
  'test-format': {
    name: 'test-format',
    content: [
      {
        type: 'text',
        content: 'Basic Formatting',
        format: ['h1', 'text-center']
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '1. Bold text',
        format: 'bold'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '2. Italic text',
        format: 'italic'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '3. Underlined text',
        format: 'underline'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '4. Error message',
        format: 'error'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '5. Success message',
        format: 'success'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '6. Warning message',
        format: 'warning'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '7. Highlighted text',
        format: 'highlight'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: '8. Code format',
        format: 'code'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Heading Styles',
        format: 'h2'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is H1',
        format: 'h1'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is H2',
        format: 'h2'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is H3',
        format: 'h3'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is H4',
        format: 'h4'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is H5',
        format: 'h5'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is H6',
        format: 'h6'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Text Transforms',
        format: 'h2'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'uppercase text example',
        format: 'uppercase'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'LOWERCASE TEXT EXAMPLE',
        format: 'lowercase'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'capitalize text example',
        format: 'capitalize'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Font Weights',
        format: 'h2'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Thin weight',
        format: 'thin'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Extra light weight',
        format: 'extralight'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Normal weight',
        format: 'normal'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Medium weight',
        format: 'medium'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Semibold weight',
        format: 'semibold'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Extra bold weight',
        format: 'extrabold'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Markdown Elements',
        format: 'h2'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is a blockquote',
        format: 'blockquote'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is a list item',
        format: 'list-item'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is an ordered list item',
        format: 'ordered-list-item'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Unchecked task',
        format: 'task-list-item'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Checked task',
        format: 'task-list-item-checked'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Inline code',
        format: 'code-inline'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This is a keyboard input:',
      },
      {
        type: 'text',
        content: 'Ctrl + C',
        format: 'kbd'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'This has a',
      },
      {
        type: 'text',
        content: 'footnote',
        format: 'footnote'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Format Combinations',
        format: 'h2'
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Bold + Error',
        format: ['bold', 'error']
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Code + Success',
        format: ['code', 'success']
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'H3 + Warning',
        format: ['h3', 'warning']
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Blockquote + Italic',
        format: ['blockquote', 'italic']
      },
      {
        type: 'endline'
      },
      {
        type: 'text',
        content: 'Centered Heading',
        format: ['h2', 'text-center']
      }
    ]
  }
};
