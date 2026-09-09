import { Brand, NavLink } from "../models/navigation-model";

export const BRAND: Brand = {
  name: 'AmazoniaSkate',
  subtitle: 'Pro Platform',
  logoUrl: 'assets/logo.svg',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', icon: '🌿', route: '/' },
  { label: 'Clubes', icon: '🏛️', route: '/clubes' },
  { label: 'Atletas', icon: '⛸️', route: '/atletas' },
  { label: 'Eventos', icon: '📅', route: '/eventos' },
  { label: 'Tienda', icon: '🛒', route: '/tienda' },
  { label: 'Contacto', icon: '📧', route: '/contacto' },
];
