export interface BaseCommand {
    type: string;
}

export interface TextCommand extends BaseCommand {
    type: 'text';
    content: string;
}

export interface LinkCommand extends BaseCommand {
    type: 'link';
    url: string;
    placeholder: string;
}

export interface ImageCommand extends BaseCommand {
    type: 'image';
    content: string;
}

export interface EndlineCommand extends BaseCommand {
    type: 'endline';
}

export type CommandContent = TextCommand | LinkCommand | ImageCommand | EndlineCommand;

export interface Command {
    name: string;
    content: CommandContent[];
}