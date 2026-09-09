export type EventStatus =
  'Convocatoria Abierta' | 'Próximamente' | 'Batalla en Curso' | 'Finalizado';

export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  participants: number;
  prize: string;
  status: EventStatus;
  description: string;
  image: string;
  category: string; // Ej: "Velocidad", "Hockey"
}
