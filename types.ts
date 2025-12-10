export interface ChartData {
  name: string;
  value: number;
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  WHY_ME = 'why-me',
  COMMITMENTS = 'commitments',
  COMPARISON = 'comparison',
  SPENDING = 'spending',
  DONATE = 'donate',
  DISCLAIMER = 'disclaimer'
}