import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { WeatherData } from './types';
import { fetchWeather } from './utils/logic';
import { CloudSun } from 'lucide-react';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError('');
    setWeather(null); // Reset to trigger animation on new load
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-slate-950">
      
      {/* Ambient Background Lights */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className={`flex flex-col items-center mb-10 z-10 transition-all duration-500 ${weather ? 'mt-0' : 'mt-[-10vh]'}`}>
        <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <CloudSun className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Neon Weather
            </h1>
        </div>
        {!weather && (
            <p className="text-slate-400 text-sm">Check the forecast in style</p>
        )}
      </div>

      <SearchBar onSearch={handleSearch} isLoading={loading} />

      <div className="w-full flex justify-center mt-8 min-h-[400px]">
        {loading && (
          <div className="flex flex-col items-center justify-center text-slate-500 animate-pulse mt-12">
            <div className="w-12 h-12 border-4 border-slate-800 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
            <span className="text-sm font-medium tracking-widest uppercase">Forecasting...</span>
          </div>
        )}

        {error && (
          <div className="mt-8 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl animate-slide-up">
            {error}
          </div>
        )}

        {!loading && !error && weather && (
          <WeatherDisplay data={weather} />
        )}
        
        {!loading && !weather && !error && (
          <div className="mt-12 text-center max-w-xs mx-auto">
            <div className="grid grid-cols-2 gap-3 opacity-30">
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="h-24 bg-slate-800 rounded-xl"></div>
                <div className="col-span-2 h-32 bg-slate-800 rounded-xl"></div>
            </div>
          </div>
        )}
      </div>
      
      <div className="fixed bottom-6 text-slate-800 text-xs font-bold uppercase tracking-widest select-none">
        Weather Simulation
      </div>
    </div>
  );
};

export default App;