export interface PasswordConfigType {
  length: number;
  pattern: {
    regex: RegExp;
    msg?: string;
  };
}

export interface PasswordConfigInterface {
  [s: string]: PasswordConfigType;
}

export const passwordConfig: PasswordConfigInterface = {
  low: { length: 6, pattern: { regex: null } },
  medium: {
    length: 8,
    pattern: {
      regex: /(?=.*[0-9])(?=.*[a-z])/g,
      msg: 'A senha deve conter números e letras'
    }
  },
  high: {
    length: 10,
    pattern: {
      regex: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*#?&])[a-zA-Zd]/g,
      msg: 'A senha deve conter letras maíusculas e minúsculas, números e caracteres especiais'
    }
  }
};
