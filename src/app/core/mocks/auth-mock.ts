import { Role } from '../models/auth-model';

export const ROLES: Role[] = [
  { id: '1', label: 'Admin Plataforma', email: 'admin@amazonskate.com', icon: '🛡️' },
  { id: '2', label: 'Admin Club', email: 'club@amazonskate.com', icon: '👥' },
  { id: '3', label: 'Entrenador', email: 'coach@amazonskate.com', icon: '⚡' },
  { id: '4', label: 'Atleta', email: 'athlete@amazonskate.com', icon: '🌿' },
];
