import { TranslationObject } from '../reusable/base-field.component';

export interface CpfTranslationObject extends TranslationObject {
  invalidCpf: string;
}

export const cpfTranslations: CpfTranslationObject = {
  invalidCpf: 'Invalid cpf!'
};

export const invalidCpfArray = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
];
