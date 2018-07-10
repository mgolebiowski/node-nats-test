import NATS from "nats";
const nats = NATS.connect("nats://127.0.0.1:4222");

setInterval(() => {
  console.log("Publish: " + "Hello World");
  nats.publish("foo", "Hello World!");
}, 1000);
