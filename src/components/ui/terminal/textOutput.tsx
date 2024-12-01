import { TextCommandFormat } from '@/app/terminal/types';
import React from 'react';

const formatToTailwind: Record<TextCommandFormat, string> = {
    // Basic formatting
    'bold': 'font-bold',
    'italic': 'italic',
    'underline': 'underline',
    'error': 'text-red-500',
    'success': 'text-green-500',
    'warning': 'text-yellow-500',
    'highlight': 'bg-yellow-200 text-black',
    'code': 'bg-gray-800 text-gray-200 px-2 py-0.5 rounded font-mono',

    // Headings
    'h1': 'text-4xl font-bold mb-4',
    'h2': 'text-3xl font-bold mb-3',
    'h3': 'text-2xl font-bold mb-2',
    'h4': 'text-xl font-bold mb-2',
    'h5': 'text-lg font-bold mb-1',
    'h6': 'text-base font-bold mb-1',

    // Text transforms
    'uppercase': 'uppercase',
    'lowercase': 'lowercase',
    'capitalize': 'capitalize',

    // Text decorations
    'line-through': 'line-through',
    'no-underline': 'no-underline',

    // Font weights
    'thin': 'font-thin',
    'extralight': 'font-extralight',
    'light': 'font-light',
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold',
    'extrabold': 'font-extrabold',

    // Font styles
    'normal-case': 'normal-case',
    'small-caps': 'font-small-caps',

    // Text alignments
    'text-left': 'text-left',
    'text-center': 'text-center',
    'text-right': 'text-right',

    // Markdown additions
    'blockquote': 'border-l-4 border-gray-300 pl-4 italic',
    'subscript': 'align-sub text-sm',
    'superscript': 'align-super text-sm',
    'list-item': 'ml-4 before:content-["•"] before:mr-2',
    'ordered-list-item': 'ml-4',
    'task-list-item': 'ml-4 before:content-["☐"] before:mr-2',
    'task-list-item-checked': 'ml-4 before:content-["☑"] before:mr-2',
    'code-inline': 'bg-gray-800 text-gray-200 px-1 rounded font-mono text-sm',
    'pre': 'bg-gray-800 text-gray-200 p-4 rounded font-mono block whitespace-pre overflow-x-auto',
    'kbd': 'bg-gray-200 text-gray-800 px-2 py-1 rounded font-mono text-sm border border-gray-300',
    'footnote': 'text-sm text-gray-500 align-super',
    'mark': 'bg-yellow-200'
};

export const ComposeTextOutputs: React.FC<{
    formats: TextCommandFormat[];
    children: React.ReactNode;
}> = ({ formats, children }) => {
    const classNames = formats.map(format => {
        // Handle predefined formats
        if (format in formatToTailwind) {
            return formatToTailwind[format];
        }

        return '';
    }).filter(Boolean).join(' ');

    return <span className={classNames}>{children}</span>;
};
