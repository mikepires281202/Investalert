export type Theme = 'Renda Fixa' | 'Renda Variável' | 'Petróleo';
export type Format = 'PDF' | 'Áudio';

export interface UserPreferences {
  id?: string;
  user_id?: string;
  themes: Theme[];
  formats: Format[];
  delivery_channel: 'whatsapp' | 'telegram';
  phone_number?: string;
  telegram_username?: string;
}

export interface Metric {
  name: string;
  value: string;
  description: string;
}
