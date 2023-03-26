import { ConfigInterface } from './config-interface';

export default (): ConfigInterface => ({
  common: {
    appUrl: process.env.APP_URL,
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT),
    timezone: process.env.TZ,
  },
});
