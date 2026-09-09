export interface Club {
  id: string;
  name: string;
  location: string;
  members: number;
  rating: number;
  specialties: string[];
  description: string;
  achievements: string[];
  logo?: string;
  tag?: 'Elite' | 'Professional' | 'Advanced';
}
