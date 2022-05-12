const pkg = require("../../package.json");

module.exports = {
  applicationName: pkg.name,
  mongodb: {
    url: "mongodb://localhost:37017/shopit",
  },
  redis: {
    port: 7379,
    client: null,
  },
  mysql: {
    options: {
      host: "localhost",
      port: "3406",
      database: "shopit",
      dialect: "mysql",
      username: "root",
      password: "mypassword",
    },
    client: null,
  },
};
