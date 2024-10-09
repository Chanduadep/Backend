const eventEmitter = require("events");

const myEventEmitter = new eventEmitter();

myEventEmitter.on("hey", (data) => {
  console.log("Data inside event", data);
});

myEventEmitter.emit("hey", "Hello");