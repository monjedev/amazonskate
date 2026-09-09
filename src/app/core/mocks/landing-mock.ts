import { FeatureCard, LandingStat } from "../models/landing-model";

export const LANDING_STATS: LandingStat[] = [
  { icon: '🌿', value: '150+', label: 'Clubes Activos' },
  { icon: '⛸️', value: '5,000+', label: 'Atletas Registrados' },
  { icon: '🏆', value: '300+', label: 'Competencias' },
  { icon: '🗺️', value: '12', label: 'Países' },
];

export const FEATURES: FeatureCard[] = [
  {
    id: '1',
    icon: '👥',
    title: 'Gestión de Atletas',
    description:
      'Sistema completo para gestionar perfiles, rendimiento y progreso de cada atleta en tu club',
  },
  {
    id: '2',
    icon: '🏆',
    title: 'Competencias',
    description: 'Organiza, programa y administra competencias con sistema de rankings automático',
  },
  {
    id: '3',
    icon: '📅',
    title: 'Entrenamientos',
    description: 'Planifica sesiones, asigna entrenamientos personalizados y rastrea asistencia',
  },
  {
    id: '4',
    icon: '⚡',
    title: 'Analytics Avanzados',
    description: 'Insights profundos del rendimiento con visualizaciones interactivas y reportes',
  },
];
