export interface ConfigInterface {
  common: CommonInterface;
}

export interface CommonInterface {
  nodeEnv: string;
  port: number;
  timezone: string;
  appUrl: string;
}
