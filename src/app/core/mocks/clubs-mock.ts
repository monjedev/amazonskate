import { Club } from '../models/clubs-model';

export const CLUBS: Club[] = [
  {
    id: 'c1',
    name: 'Club Patín Amazónico',
    location: 'Ciudad de México',
    members: 45,
    rating: 4.8,
    specialties: ['Velocidad', 'Artístico'],
    tag: 'Elite',
    logo: 'assets/clubs/club1.png',
    description:
      'Club especializado en patinaje de velocidad y artístico con 20 años de experiencia en la selva urbana.',
    achievements: ['Campeón Nacional 2023', '5 medallas olímpicas'],
  },
  {
    id: 'c2',
    name: 'Expedición Ruedas',
    location: 'Guadalajara',
    members: 32,
    rating: 4.6,
    specialties: ['Hockey', 'Velocidad'],
    tag: 'Professional',
    logo: 'assets/clubs/club2.png',
    description:
      'Exploradores del patinaje urbano enfocados en hockey sobre patines y competencias de velocidad.',
    achievements: ['Liga Nacional', 'Torneo Internacional'],
  },
  {
    id: 'c3',
    name: 'Elite Selva Skating',
    location: 'Monterrey',
    members: 58,
    rating: 4.9,
    specialties: ['Artístico', 'Freestyle'],
    tag: 'Elite',
    logo: 'assets/clubs/club3.png',
    description:
      'Club de élite que combina la elegancia del patinaje artístico con la fuerza de la naturaleza.',
    achievements: ['Mundial Artístico', 'Copa América'],
  },
  {
    id: 'c4',
    name: 'Jaguares Veloces',
    location: 'Tijuana',
    members: 28,
    rating: 4.5,
    specialties: ['Velocidad', 'Derby'],
    tag: 'Advanced',
    logo: 'assets/clubs/club4.png',
    description:
      'Club joven con la agilidad del jaguar, especializado en velocidad y roller derby.',
    achievements: ['Derby Regional', 'Speed Championship'],
  },
  {
    id: 'c5',
    name: 'Anaconda Artística',
    location: 'Puebla',
    members: 41,
    rating: 4.7,
    specialties: ['Artístico', 'Freestyle'],
    tag: 'Professional',
    logo: 'assets/clubs/club5.png',
    description:
      'Flexibilidad y gracia como la anaconda, tradición en patinaje artístico con técnicas amazónicas.',
    achievements: ['Festival Nacional', 'Competencia Internacional'],
  },
  {
    id: 'c6',
    name: 'Colibrí Extremo',
    location: 'León',
    members: 35,
    rating: 4.4,
    specialties: ['Velocidad', 'Freestyle'],
    tag: 'Advanced',
    logo: 'assets/clubs/club6.png',
    description:
      'Rapidez y precisión del colibrí en carreras de larga distancia y acrobacias extremas.',
    achievements: ['Maratón Nacional', 'Freestyle Cup'],
  },
];
