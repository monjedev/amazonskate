import {
  AthleteSummary,
  DashboardHeader,
  DashboardTab,
  GroupObjective,
  KpiCard,
  TrainingSession,
} from '../models/dashboard-model';

// DASHBOARD: ATLETA
export const ATHLETE_HEADER: DashboardHeader = {
  title: 'Atleta Demo',
  subtitle: 'Panel de Control',
};
export const ATHLETE_KPIS: KpiCard[] = [
  {
    label: 'Entrenamientos este Mes',
    value: 16,
    subText: '4 esta semana',
    icon: '📈',
    progress: 80,
  },
  {
    label: 'Próximas Competencias',
    value: 2,
    subText: 'En las próximas 3 semanas',
    icon: '🏆',
    progress: 40,
  },
  {
    label: 'Mejor Tiempo Personal',
    value: '45.2s',
    subText: '500m Sprint',
    icon: '⏱️',
    progress: 65,
  },
];
export const ATHLETE_SESSIONS: TrainingSession[] = [
  { id: '1', type: 'Técnica', date: '1 Mar 2026', duration: '2h', rating: 5 },
  { id: '2', type: 'Velocidad', date: '28 Feb 2026', duration: '1.5h', rating: 4 },
  { id: '3', type: 'Resistencia', date: '26 Feb 2026', duration: '2h', rating: 5 },
];
export const ATHLETE_ACHIEVEMENTS = [
  { id: '1', title: '1er Lugar Regional', date: 'Feb 2026', type: 'Oro' },
  { id: '2', title: '2do Lugar Nacional', date: 'Ene 2026', type: 'Plata' },
  { id: '3', title: 'Mejor Tiempo Personal', date: 'Dic 2025', type: 'Record' },
];

// DASHBOARD: COACH
export const COACH_HEADER: DashboardHeader = {
  title: 'Coach Profesional',
  subtitle: 'Panel de Control',
};
export const COACH_KPIS: KpiCard[] = [
  { label: 'Atletas Asignados', value: 12, subText: 'En tu grupo', icon: '👥', progress: 60 },
  { label: 'Sesiones esta Semana', value: 8, subText: '6 completadas', icon: '⏱️', progress: 75 },
  { label: 'Próximas Competencias', value: 2, subText: 'Próximo mes', icon: '🏆', progress: 30 },
];
export const COACH_SCHEDULE = [
  { day: 'Lunes', time: '16:00 - 18:00', type: 'Técnica' },
  { day: 'Miércoles', time: '16:00 - 18:00', type: 'Velocidad' },
  { day: 'Viernes', time: '16:00 - 18:00', type: 'Resistencia' },
];
export const GROUP_OBJECTIVES: GroupObjective[] = [
  { label: 'Asistencia', value: 92 },
  { label: 'Mejora Técnica', value: 78 },
  { label: 'Preparación Competitiva', value: 85 },
];

// DASHBOARD: MANAGER CLUB
export const MANAGER_HEADER: DashboardHeader = {
  title: 'Manager Club Elite',
  subtitle: 'Panel de Control',
};
export const MANAGER_KPIS: KpiCard[] = [
  { label: 'Atletas del Club', value: 48, subText: '5 nuevos este mes', icon: '👥', progress: 70 },
  { label: 'Entrenamientos', value: 156, subText: 'este mes', icon: '⚡', progress: 90 },
  { label: 'Próximos Eventos', value: 3, subText: 'próximas 2 semanas', icon: '📅', progress: 30 },
];
export const MANAGER_TABS: DashboardTab[] = [
  { id: 'athletes', label: 'Atletas' },
  { id: 'trainings', label: 'Entrenamientos' },
  { id: 'events', label: 'Eventos' },
];
export const CLUB_ATHLETES: AthleteSummary[] = [
  { id: '1', name: 'Atleta 1', category: 'Junior', status: 'Activo' },
  { id: '2', name: 'Atleta 2', category: 'Junior', status: 'Activo' },
  { id: '3', name: 'Atleta 3', category: 'Junior', status: 'Activo' },
];

// DASHBOARD: ADMIN
export const ADMIN_HEADER: DashboardHeader = {
  title: 'Administrador Sistema',
  subtitle: 'Panel de Control',
};
export const ADMIN_KPIS: KpiCard[] = [
  { label: 'Total Clubes', value: 24, subText: '+2 este mes', icon: '👥', progress: 50 },
  { label: 'Total Atletas', value: 1248, subText: '+58 este mes', icon: '🏆', progress: 85 },
  { label: 'Eventos Activos', value: 12, subText: '3 próximas semanas', icon: '📅', progress: 40 },
  { label: 'Crecimiento', value: '+15%', subText: 'vs mes anterior', icon: '📈', progress: 70 },
];
export const ADMIN_TABS: DashboardTab[] = [
  { id: 'clubs', label: 'Gestión de Clubes' },
  { id: 'users', label: 'Usuarios' },
  { id: 'events', label: 'Eventos' },
  { id: 'analytics', label: 'Analytics' },
];
