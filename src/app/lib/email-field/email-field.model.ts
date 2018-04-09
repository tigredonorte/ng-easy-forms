import { TranslationObject } from '../reusable/base-field.component';


export interface EmailTranslationObject extends TranslationObject {
  required: string;
  invalid: string;
}

export const emailTranslations: EmailTranslationObject = {
  required: 'You must enter a value',
  invalid: 'Not a valid email'
};
