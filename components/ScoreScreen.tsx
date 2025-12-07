import React from 'react';
import { Trophy, RotateCcw, Award } from 'lucide-react';

interface ScoreScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "";
  let colorClass = "";
  
  if (percentage === 100) {
    message = "Perfect Score! You're a Genius!";
    colorClass = "text-cyan-400";
  } else if (percentage >= 80) {
    message = "Amazing Job! Almost Perfect!";
    colorClass = "text-violet-400";
  } else if (percentage >= 50) {
    message = "Good Effort! Keep Learning!";
    colorClass = "text-emerald-400";
  } else {
    message = "Better Luck Next Time!";
    colorClass = "text-rose-400";
  }

  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-md animate-pop-in">
      
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-[60px] rounded-full"></div>
        <div className="relative glass-panel p-8 rounded-full border-4 border-slate-800 shadow-2xl">
          {percentage === 100 ? (
            <Trophy className="w-20 h-20 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          ) : (
            <Award className="w-20 h-20 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          )}
        </div>
      </div>

      <h2 className="text-4xl font-bold text-white mb-2">Quiz Completed</h2>
      <p className={`text-xl font-semibold mb-8 ${colorClass}`}>{message}</p>

      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Score</div>
            <div className="text-3xl font-bold text-white">{score} <span className="text-lg text-slate-500">/ {totalQuestions}</span></div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Accuracy</div>
            <div className="text-3xl font-bold text-white">{percentage}%</div>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="flex items-center gap-2 px-8 py-3 bg-slate-100 hover:bg-white text-slate-900 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
      >
        <RotateCcw className="w-5 h-5" />
        Play Again
      </button>
    </div>
  );
};

export default ScoreScreen;
