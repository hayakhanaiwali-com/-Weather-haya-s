import React from 'react';
import Square from './Square';
import { SquareValue } from '../types';

interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
  winningLine: number[] | null;
  gameActive: boolean;
}

const Board: React.FC<BoardProps> = ({ squares, onClick, winningLine, gameActive }) => {
  return (
    <div className="grid grid-cols-3 gap-3 p-3 sm:p-4 rounded-2xl glass-panel shadow-2xl">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isWinningSquare={winningLine?.includes(i) ?? false}
          disabled={!gameActive || square !== null}
        />
      ))}
    </div>
  );
};

export default Board;