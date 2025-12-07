import React from 'react';
import { Task } from '../types';
import { Check, Trash2 } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`
      group flex items-center gap-3 p-4 mb-3 rounded-xl glass-panel animate-pop-in
      transition-all duration-300 hover:bg-slate-800/60 border-l-4
      ${task.completed ? 'border-l-emerald-500/50 bg-slate-900/40' : 'border-l-cyan-500/50 hover:translate-x-1'}
    `}>
      <button
        onClick={() => onToggle(task.id)}
        className={`
          relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300
          ${task.completed 
            ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' 
            : 'border-slate-500 hover:border-cyan-400'}
        `}
        aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        <Check 
          className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${task.completed ? 'scale-100' : 'scale-0'}`} 
          strokeWidth={4}
        />
      </button>
      
      <span 
        className={`
          flex-1 text-lg transition-all duration-300
          ${task.completed ? 'text-slate-500 line-through' : 'text-slate-200'}
        `}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-slate-500 opacity-0 group-hover:opacity-100 hover:text-rose-400 transition-all duration-200 p-2 hover:bg-rose-500/10 rounded-lg"
        aria-label="Delete task"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TaskItem;
