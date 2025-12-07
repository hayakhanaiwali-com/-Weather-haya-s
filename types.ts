export type WeatherCondition = 'Clear' | 'Clouds' | 'Rain' | 'Snow' | 'Thunderstorm' | 'Mist';

export interface WeatherData {
  city: string;
  temperature: number;
  condition: WeatherCondition;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  description: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
}

// Legacy Types (Preserved to prevent build errors in unused components)
export type SquareValue = 'X' | 'O' | null;
export type Player = 'X' | 'O';

export interface GameStats {
  xWins: number;
  oWins: number;
  draws: number;
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}