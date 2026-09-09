import { ContactInfo, FAQ, Schedule } from '../models/contact-model';

export const CONTACT_INFO: ContactInfo[] = [
  {
    type: 'email',
    label: 'Mensajería Tribal',
    value: 'exploradores@amazonskate.com',
    subLabel: 'Canal principal para comunicaciones',
  },
  {
    type: 'phone',
    label: 'Señales de Humo Digital',
    value: '+52 55 AMAZON (262-966)',
    subLabel: 'Conexión inmediata con nuestros guías',
  },
  {
    type: 'address',
    label: 'Campamento Base',
    value: 'Av. Selva Digital 123, Territorios Amazónicos, CDMX CP 06000',
    subLabel: 'Nuestro refugio en la selva urbana',
  },
];

export const SCHEDULES: Schedule[] = [
  { day: 'Lun-Vie', time: '8:00-20:00', type: 'Disponibilidad' },
  { day: 'Sáb', time: '9:00-15:00', type: 'Disponibilidad' },
  { day: 'Dom', time: 'Ritual de Descanso', type: 'Ceremonia' },
];

export const FAQS: FAQ[] = [
  { id: '1', question: '¿Cómo fundo mi propio territorio tribal?' },
  { id: '2', question: '¿Es gratuito forjar mi perfil de guerrero?' },
  { id: '3', question: '¿Cómo me uno a expediciones épicas?' },
  { id: '4', question: '¿Ofrecen soporte místico 24/7?' },
  { id: '5', question: '¿Cómo adquiero artefactos de la tienda?' },
  { id: '6', question: '¿Puedo crear alianzas con otros territorios?' },
];
