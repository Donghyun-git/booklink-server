const dotEnv = require('dotenv');
dotEnv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
};
