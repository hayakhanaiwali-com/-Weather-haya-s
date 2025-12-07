import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md relative z-20">
      <div className="relative group">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter city name..."
          disabled={isLoading}
          className="w-full glass-input text-slate-100 pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-cyan-500/50 transition-all duration-300 placeholder-slate-500 disabled:opacity-50"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
          <Search className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
        </div>
        <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-500/20 blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
      </div>
    </form>
  );
};

export default SearchBar;