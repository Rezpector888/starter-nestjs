import { ConfigInterface } from './config-interface';

export default (): ConfigInterface => ({
  common: {
    appUrl: process.env.APP_URL,
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT),
    timezone: process.env.TZ,
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    accessExpire: process.env.JWT_ACCESS_TOKEN_EXPIRE,
    refreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    refreshExpire: process.env.JWT_REFRESH_TOKEN_EXPIRE,
  }

});
