export interface TypeConfig {
  value: any;
  required: boolean;
  disabled: boolean;
  options?: { [s: string]: any };
}

export interface TypeConfigObject {
  [s: string]: TypeConfig;
}
