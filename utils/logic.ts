import { WeatherData, WeatherCondition } from '../types';

// Deterministic random generator based on string
const seededRandom = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
};

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const normalizedCity = city.trim().toLowerCase();
  
  // Specific logic for common cities to make it feel real
  if (normalizedCity.includes('london') || normalizedCity.includes('seattle') || normalizedCity.includes('manchester')) {
    return generateWeatherData(city, 'Rain');
  }
  if (normalizedCity.includes('dubai') || normalizedCity.includes('phoenix') || normalizedCity.includes('cairo') || normalizedCity.includes('las vegas')) {
    return generateWeatherData(city, 'Clear', 35);
  }
  if (normalizedCity.includes('moscow') || normalizedCity.includes('anchorage') || normalizedCity.includes('reykjavik')) {
    return generateWeatherData(city, 'Snow', -5);
  }
  if (normalizedCity.includes('san francisco') || normalizedCity.includes('vancouver')) {
    return generateWeatherData(city, 'Mist', 14);
  }
  if (normalizedCity.includes('miami') || normalizedCity.includes('singapore')) {
    return generateWeatherData(city, 'Thunderstorm', 28);
  }
  
  // Random generation for others
  const rand = seededRandom(normalizedCity);
  let condition: WeatherCondition = 'Clear';
  
  if (rand > 0.85) condition = 'Thunderstorm';
  else if (rand > 0.70) condition = 'Rain';
  else if (rand > 0.50) condition = 'Clouds';
  else if (rand > 0.40) condition = 'Mist';
  else if (rand > 0.25) condition = 'Snow';

  return generateWeatherData(city, condition);
};

const generateWeatherData = (city: string, condition: WeatherCondition, baseTemp?: number): WeatherData => {
  const rand = seededRandom(city + condition);
  
  let temp = baseTemp ?? 20;
  let description = 'Clear Sky';
  
  switch (condition) {
    case 'Clear':
      temp = baseTemp ?? 25 + Math.floor(rand * 10);
      description = 'Sunny & Clear';
      break;
    case 'Clouds':
      temp = baseTemp ?? 18 + Math.floor(rand * 5);
      description = 'Overcast Clouds';
      break;
    case 'Rain':
      temp = baseTemp ?? 15 + Math.floor(rand * 5);
      description = 'Moderate Rain';
      break;
    case 'Snow':
      temp = baseTemp ?? -2 + Math.floor(rand * 5);
      description = 'Light Snowfall';
      break;
    case 'Thunderstorm':
      temp = baseTemp ?? 22 + Math.floor(rand * 5);
      description = 'Stormy Conditions';
      break;
    case 'Mist':
      temp = baseTemp ?? 12 + Math.floor(rand * 5);
      description = 'Foggy Conditions';
      break;
  }

  // Capitalize city name nicely
  const formattedCity = city.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return {
    city: formattedCity,
    temperature: temp,
    condition,
    humidity: 40 + Math.floor(rand * 50),
    windSpeed: 5 + Math.floor(rand * 25),
    feelsLike: temp + (rand > 0.5 ? 2 : -2),
    description
  };
};

export const getWeatherTheme = (condition: WeatherCondition) => {
  switch (condition) {
    case 'Clear':
      return {
        primary: 'text-amber-400',
        secondary: 'bg-amber-400/10',
        accent: 'border-amber-400/30',
        gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
        shadow: 'shadow-amber-500/20'
      };
    case 'Clouds':
    case 'Mist':
      return {
        primary: 'text-slate-300',
        secondary: 'bg-slate-400/10',
        accent: 'border-slate-400/30',
        gradient: 'from-slate-500/20 via-gray-500/10 to-transparent',
        shadow: 'shadow-slate-500/20'
      };
    case 'Rain':
      return {
        primary: 'text-cyan-400',
        secondary: 'bg-cyan-400/10',
        accent: 'border-cyan-400/30',
        gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
        shadow: 'shadow-cyan-500/20'
      };
    case 'Snow':
      return {
        primary: 'text-white',
        secondary: 'bg-white/10',
        accent: 'border-white/30',
        gradient: 'from-blue-200/20 via-white/10 to-transparent',
        shadow: 'shadow-white/20'
      };
    case 'Thunderstorm':
      return {
        primary: 'text-violet-400',
        secondary: 'bg-violet-400/10',
        accent: 'border-violet-400/30',
        gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
        shadow: 'shadow-violet-500/20'
      };
    default:
      return {
        primary: 'text-cyan-400',
        secondary: 'bg-cyan-400/10',
        accent: 'border-cyan-400/30',
        gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
        shadow: 'shadow-cyan-500/20'
      };
  }
};