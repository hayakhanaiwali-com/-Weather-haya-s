import React from 'react';
import { WeatherData } from '../types';
import { getWeatherTheme } from '../utils/logic';
import { 
  Cloud, 
  CloudRain, 
  CloudLightning, 
  Sun, 
  Snowflake, 
  Wind, 
  Droplets, 
  Thermometer, 
  CloudFog,
  MapPin
} from 'lucide-react';

interface WeatherDisplayProps {
  data: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const theme = getWeatherTheme(data.condition);

  const getIcon = () => {
    const props = { className: `w-32 h-32 ${theme.primary} drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]` };
    switch (data.condition) {
      case 'Clear': return <Sun {...props} />;
      case 'Clouds': return <Cloud {...props} />;
      case 'Rain': return <CloudRain {...props} />;
      case 'Thunderstorm': return <CloudLightning {...props} />;
      case 'Snow': return <Snowflake {...props} />;
      case 'Mist': return <CloudFog {...props} />;
      default: return <Sun {...props} />;
    }
  };

  return (
    <div className="w-full max-w-md animate-slide-up">
      {/* Main Card */}
      <div className={`relative overflow-hidden rounded-3xl glass-panel p-8 mb-6 border-t border-l ${theme.accent}`}>
        {/* Dynamic Gradient Background */}
        <div className={`absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l ${theme.gradient} opacity-50`}></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6 text-slate-400 bg-slate-900/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            <MapPin className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-bold">{data.city}</span>
          </div>

          <div className="mb-6 animate-pulse-slow">
            {getIcon()}
          </div>

          <div className="mb-2">
            <span className={`text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400`}>
              {data.temperature}°
            </span>
          </div>
          
          <div className={`text-xl font-medium ${theme.primary} mb-8`}>
            {data.description}
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="bg-slate-900/30 p-3 rounded-xl backdrop-blur-sm border border-white/5 flex flex-col items-center">
              <Wind className="w-5 h-5 text-slate-400 mb-2" />
              <span className="text-lg font-bold">{data.windSpeed}</span>
              <span className="text-[10px] text-slate-500 uppercase">km/h</span>
            </div>
            <div className="bg-slate-900/30 p-3 rounded-xl backdrop-blur-sm border border-white/5 flex flex-col items-center">
              <Droplets className="w-5 h-5 text-slate-400 mb-2" />
              <span className="text-lg font-bold">{data.humidity}%</span>
              <span className="text-[10px] text-slate-500 uppercase">Hum</span>
            </div>
            <div className="bg-slate-900/30 p-3 rounded-xl backdrop-blur-sm border border-white/5 flex flex-col items-center">
              <Thermometer className="w-5 h-5 text-slate-400 mb-2" />
              <span className="text-lg font-bold">{data.feelsLike}°</span>
              <span className="text-[10px] text-slate-500 uppercase">Feels</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;