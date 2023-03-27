export interface ConfigInterface {
  common: CommonInterface;
  jwt: JwtInterface
}

export interface CommonInterface {
  nodeEnv: string;
  port: number;
  timezone: string;
  appUrl: string;
}

export interface JwtInterface {
  accessSecret: string;
  accessExpire: string;
  refreshSecret: string;
  refreshExpire: string;
}
