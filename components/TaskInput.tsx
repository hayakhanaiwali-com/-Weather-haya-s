import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative mb-6 group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-xl blur-lg transition-opacity opacity-50 group-hover:opacity-100 -z-10"></div>
      <div className="relative flex items-center bg-slate-900/80 border border-slate-700/50 rounded-xl overflow-hidden focus-within:border-cyan-500/50 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 bg-transparent px-5 py-4 text-slate-100 placeholder-slate-500 outline-none text-lg"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-6 py-4 bg-slate-800/50 hover:bg-cyan-500/10 text-cyan-400 disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-200 border-l border-slate-700/50"
          aria-label="Add Task"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
