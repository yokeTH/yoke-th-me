import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { CommandHistory } from './CommandHistory';

interface CommandInputProps {
  onSubmit: (command: string) => void;
}

export const CommandInput: React.FC<CommandInputProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(true);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'v') {
          e.preventDefault();

          navigator.clipboard
            .readText()
            .then((text) => {
              const newInputValue = inputValue.slice(0, cursorPosition) + text + inputValue.slice(cursorPosition);
              setInputValue(newInputValue);
              setCursorPosition(cursorPosition + text.length);
            })
            .catch((err) => {
              console.error('Failed to read clipboard contents: ', err);
            });
          return;
        }
      }

      if (e.ctrlKey || e.metaKey) {
        return;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        if (inputValue.trim()) {
          onSubmit(inputValue);
          setHistory((prev) => [...prev, inputValue]);
          setHistoryIndex(history.length);
          setInputValue('');
          setCursorPosition(0);
        }
      } else if (e.key === 'Backspace') {
        if (cursorPosition > 0) {
          setInputValue(inputValue.slice(0, cursorPosition - 1) + inputValue.slice(cursorPosition));
          setCursorPosition(cursorPosition - 1);
        }
      } else if (e.key === 'ArrowLeft') {
        setCursorPosition(Math.max(0, cursorPosition - 1));
      } else if (e.key === 'ArrowRight') {
        setCursorPosition(Math.min(inputValue.length, cursorPosition + 1));
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          setHistoryIndex((prev) => prev - 1);
          setInputValue(history[historyIndex - 1] ?? '');
          setCursorPosition(history[historyIndex - 1]?.length ?? 0);
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < history.length - 1) {
          setHistoryIndex((prev) => prev + 1);
          setInputValue(history[historyIndex + 1] ?? '');
          setCursorPosition(history[historyIndex + 1]?.length ?? 0);
        } else {
          setHistoryIndex(history.length);
          setInputValue('');
        }
      } else if (e.key.length === 1) {
        setInputValue(inputValue.slice(0, cursorPosition) + e.key + inputValue.slice(cursorPosition));
        setCursorPosition(cursorPosition + 1);
      }
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [inputValue, cursorPosition, onSubmit, history, historyIndex]);

  const displayBeforeCursor = inputValue.slice(0, cursorPosition);
  const displayAfterCursor = inputValue.slice(cursorPosition);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    // setInputValue(newValue)
  };

  return (
    <div className="bg-gray-800 px-4 py-2 flex items-center">
      <span className="text-green-500 mr-2">{'>'}</span>
      <div
        className="bg-transparent text-white flex-1 focus:outline-none whitespace-pre relative"
        tabIndex={0}
      >
        <input
          type="text"
          className="opacity-0 absolute -top-2 w-full"
          value={inputValue}
          onChange={handleOnChange}
        />
        <div className="absolute -top-2">
          {displayBeforeCursor}
          {isFocused && <span className={styles.cursor}></span>}
          {displayAfterCursor}
        </div>
      </div>
    </div>
  );
};
