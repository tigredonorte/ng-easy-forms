import { TranslationObject } from '../reusable/base-field.component';

export interface PasswordTranslationObject extends TranslationObject {
  required: string;
  minCharacters: string;
  medium: string;
  high: string;
}

export const passwordTranslations: PasswordTranslationObject = {
  required: 'You must type an password',
  minCharacters: 'type at least ${min} characters',
  medium: 'the password must contain number and letters',
  high: 'the password must contain uppercase, lowercase, numbers and special characters',
};

export interface PasswordConfigType {
  length: number;
  pattern: RegExp;
}

export interface PasswordConfigInterface {
  [s: string]: PasswordConfigType;
}

export const passwordConfig: PasswordConfigInterface = {
  low: { length: 6, pattern: null },
  medium: {
    length: 8,
    pattern: /(?=.*[0-9])(?=.*[a-z])/g
  },
  high: {
    length: 10,
    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*#?&])[a-zA-Zd]/g
  }
};
