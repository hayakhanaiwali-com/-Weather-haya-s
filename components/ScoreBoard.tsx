import React from 'react';
import { GameStats, Player } from '../types';
import { User, Trophy } from 'lucide-react';

interface ScoreBoardProps {
  stats: GameStats;
  currentPlayer: Player;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ stats, currentPlayer }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-md mb-8 gap-4">
      
      {/* Player X Stats */}
      <div className={`flex flex-col items-center flex-1 p-3 rounded-xl transition-colors duration-300 ${currentPlayer === 'X' ? 'bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'bg-transparent border border-transparent'}`}>
        <span className="text-xs font-semibold text-cyan-200/60 uppercase tracking-wider mb-1">Player X</span>
        <div className="flex items-center gap-2">
           <User className="w-5 h-5 text-cyan-400" />
           <span className="text-2xl font-bold text-cyan-100">{stats.xWins}</span>
        </div>
      </div>

      {/* Draws (Middle) */}
      <div className="flex flex-col items-center px-4">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Draws</span>
        <span className="text-xl font-bold text-slate-400">{stats.draws}</span>
      </div>

      {/* Player O Stats */}
      <div className={`flex flex-col items-center flex-1 p-3 rounded-xl transition-colors duration-300 ${currentPlayer === 'O' ? 'bg-rose-950/40 border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.1)]' : 'bg-transparent border border-transparent'}`}>
        <span className="text-xs font-semibold text-rose-200/60 uppercase tracking-wider mb-1">Player O</span>
        <div className="flex items-center gap-2">
           <span className="text-2xl font-bold text-rose-100">{stats.oWins}</span>
           <User className="w-5 h-5 text-rose-400" />
        </div>
      </div>
      
    </div>
  );
};

export default ScoreBoard;