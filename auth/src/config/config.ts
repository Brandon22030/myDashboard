// import { registerAs } from '@nestjs/config';

// export const CONFIG_DATABASE = 'database';

// export default registerAs(CONFIG_DATABASE, () => ({
//   users: {
//     uri: process.env.DATABASE_URL,
//   },
// }));

export const config = () => ({
  JWT_SECRET: process.env.JWT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
});
