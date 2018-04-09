import { TranslationObject } from '../reusable/base-field.component';

export interface PhoneTranslationObject extends TranslationObject {
  InvalidPhone: string;
  InvalidCelphone: string;
}

export const phoneTranslations: PhoneTranslationObject = {
  InvalidPhone: 'follow this format (99) 9999-9999',
  InvalidCelphone: 'follow this format (99) 9999-99999',
};

export const PhoneMasks = {
  Phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  Cellphone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
};

export const PhoneLenght = {
  Phone: 10,
  Cellphone: 11
};

export const Cellphone = 'Cellphone';
export const Phone = 'Phone';
export type PhoneType = 'Cellphone' | 'Phone';
