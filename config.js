const { config } = require("dotenv");
config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/championship",
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "someSecretCode",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
  API_TOKEN: process.env.API_TOKEN,
  API_URL: process.env.API_URL
};
