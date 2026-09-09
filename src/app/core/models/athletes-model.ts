export type AthleteCategory = 'Elite' | 'Professional' | 'Advanced' | 'Junior';

export interface Achievement {
  id: string;
  title: string;
  type: 'gold' | 'silver' | 'record' | 'other';
}

export interface AthleteStats {
  trainings: number;
  competitions: number;
  points: number;
  bestTime?: string;
}

export interface Athlete {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  age: number;
  category: AthleteCategory;
  points: number;
  description: string;
  location: string;
  club: string;
  achievements: Achievement[];
  stats: AthleteStats;
  rank?: number; // Para el trono de campeones
}
