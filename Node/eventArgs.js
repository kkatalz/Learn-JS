const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) => {
  // (arg / e / eventArg)
  console.log(`Logging: ${arg.message}`);
});

logger.log("message");
