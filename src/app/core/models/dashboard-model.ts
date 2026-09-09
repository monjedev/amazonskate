export interface DashboardHeader {
  title: string;
  subtitle: string;
}

export interface KpiCard {
  label: string;
  value: number | string;
  subText: string;
  icon: string;
  progress: number;
}

export interface TrainingSession {
  id: string;
  type: string;
  date: string;
  duration: string;
  rating?: number;
}

export interface DashboardTab {
  id: string;
  label: string;
}

export interface AthleteSummary {
  id: string;
  name: string;
  category: string;
  status: 'Activo' | 'Inactivo';
}

export interface GroupObjective {
  label: string;
  value: number;
}
