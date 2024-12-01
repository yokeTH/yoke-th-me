export interface BaseCommand {
  type: string;
}

export type TextCommandFormat =
  // Basic formatting
  | "bold"
  | "italic"
  | "underline"
  | "error"
  | "success"
  | "warning"
  | "highlight"
  | "code"
  // Headings
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  // Text transforms
  | "uppercase"
  | "lowercase"
  | "capitalize"
  // Text decorations
  | "line-through"
  | "no-underline"
  // Font weights
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "extrabold"
  // Font styles
  | "normal-case"
  | "small-caps"
  // Text alignments
  | "text-left"
  | "text-center"
  | "text-right"
  // Markdown additions
  | "h5"
  | "h6"
  | "blockquote"
  | "subscript"
  | "superscript"
  | "list-item"
  | "ordered-list-item"
  | "task-list-item"
  | "task-list-item-checked"
  | "code-inline"
  | "pre"
  | "kbd"
  | "footnote"
  | "mark";

export interface TextCommand extends BaseCommand {
  type: "text";
  format?: TextCommandFormat | TextCommandFormat[];
  content: string;
  url?: string;
}

export interface LinkCommand extends BaseCommand {
  type: "link";
  url: string;
  placeholder: string;
}

export interface ImageCommand extends BaseCommand {
  type: "image";
  content: string;
}

export interface EndlineCommand extends BaseCommand {
  type: "endline";
}

export interface separatorCommand extends BaseCommand {
  type: 'separator'
}

export type CommandContent =
  | TextCommand
  | LinkCommand
  | ImageCommand
  | EndlineCommand
  | separatorCommand;

export interface Command {
  name: string;
  content: CommandContent[];
}
