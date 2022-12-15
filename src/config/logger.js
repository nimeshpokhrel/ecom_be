const pino = require("pino");
const transport = pino.transport({
  target: "./transport.js",
  options: { destination: "errors.log" },
});

const logger = pino(transport);

module.exports = { logger };
