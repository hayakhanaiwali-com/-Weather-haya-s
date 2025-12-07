import React from 'react';
import { SquareValue } from '../types';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isWinningSquare: boolean;
  disabled: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare, disabled }) => {
  return (
    <button
      className={`
        relative flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32 rounded-xl text-4xl sm:text-6xl transition-all duration-300
        ${
          !value && !disabled
            ? 'hover:bg-slate-800 cursor-pointer active:scale-95'
            : 'cursor-default'
        }
        ${isWinningSquare ? 'bg-slate-800/80 shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-105 z-10 border-2 border-white/20' : 'bg-slate-800/40 border border-slate-700/50'}
      `}
      onClick={onClick}
      disabled={disabled}
      aria-label={value ? `Square occupied by ${value}` : "Empty square"}
    >
      {value === 'X' && (
        <X
          className={`w-16 h-16 sm:w-20 sm:h-20 animate-pop-in text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]`}
          strokeWidth={2.5}
        />
      )}
      {value === 'O' && (
        <Circle
          className={`w-14 h-14 sm:w-16 sm:h-16 animate-pop-in text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.5)]`}
          strokeWidth={3}
        />
      )}
    </button>
  );
};

export default Square;