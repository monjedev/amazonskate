export interface ContactInfo {
  type: 'email' | 'phone' | 'address';
  label: string;
  value: string;
  subLabel: string;
}

export interface FAQ {
  id: string;
  question: string;
}

export interface Schedule {
  day: string;
  time: string;
  type: string;
}

export interface SmokeSignalForm {
  tribalName: string;
  clanLastName: string;
  email: string;
  emergencyLine?: string;
  consultationType: string;
  message: string;
  subscribe: boolean;
}
