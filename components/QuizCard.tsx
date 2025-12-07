import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  currentQuestionIndex, 
  totalQuestions, 
  onAnswer,
  onNext 
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    const isCorrect = index === question.correctIndex;
    onAnswer(isCorrect);
  };

  const getOptionStyles = (index: number) => {
    if (!isAnswered) {
      return "bg-slate-800/50 hover:bg-slate-700/80 border-slate-700 hover:border-cyan-500/50 text-slate-200";
    }

    if (index === question.correctIndex) {
      return "bg-emerald-500/20 border-emerald-500 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
    }

    if (index === selectedOption && index !== question.correctIndex) {
      return "bg-rose-500/20 border-rose-500 text-rose-200 opacity-80";
    }

    return "bg-slate-800/30 border-slate-800 text-slate-500 opacity-50";
  };

  return (
    <div className="w-full max-w-2xl animate-pop-in">
      {/* Progress Bar */}
      <div className="mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-slate-500">
        <span>Question {currentQuestionIndex + 1} / {totalQuestions}</span>
        <span>{Math.round(((currentQuestionIndex) / totalQuestions) * 100)}% Complete</span>
      </div>
      <div className="w-full h-1.5 bg-slate-800 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-500 ease-out"
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold leading-relaxed mb-8 text-slate-100">
          {question.text}
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              className={`
                relative p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between group
                ${getOptionStyles(index)}
              `}
            >
              <span className="font-medium">{option}</span>
              {isAnswered && index === question.correctIndex && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              )}
              {isAnswered && index === selectedOption && index !== question.correctIndex && (
                <XCircle className="w-5 h-5 text-rose-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="h-16 flex justify-end">
        {isAnswered && (
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-white text-slate-900 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-pop-in"
          >
            {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
