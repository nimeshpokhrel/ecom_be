require("dotenv").config();

module.exports = {
  PORT: process.env.PORT ?? 8000,
  DB_URL: process.env.DB_URL,
  ENV: process.env.ENV ?? "dev",
};
