const EventEmitter = require("events");

const url = "http://logger.io";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { message: "User logged in" });
  }
}

module.exports = Logger;
