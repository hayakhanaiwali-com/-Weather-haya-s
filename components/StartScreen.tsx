import React from 'react';
import { BrainCircuit, Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 animate-pop-in">
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full"></div>
        <div className="relative p-6 bg-slate-900/50 rounded-3xl border border-slate-700/50 shadow-2xl">
          <BrainCircuit className="w-24 h-24 text-cyan-400" />
        </div>
      </div>
      
      <div>
        <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400 mb-4 tracking-tight">
          Neon Quiz
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
          Test your knowledge across 10 rounds of general trivia. 
          Can you score a perfect 10?
        </p>
      </div>

      <button
        onClick={onStart}
        className="group relative px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          Start Quiz <Play className="w-5 h-5 fill-current" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default StartScreen;
