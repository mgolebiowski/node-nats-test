import NATS from "nats";
import Readline from "readline";

if (!process.argv[2] || !process.argv[3]) {
  throw new Error("You need to pass two arguments to this app");
}

const nats = NATS.connect("nats://127.0.0.1:4222");

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

nats.subscribe("event." + process.argv[2], (msg) => {
  console.log("Received: " + msg);
});

const asyncReadlineRecursiveFunction = () => {
  rl.question("", (payload) => {
    if (payload === "exit") {
      return rl.close();
    }
    nats.publish("event." + process.argv[3]    , payload);
    asyncReadlineRecursiveFunction();
  });
};

asyncReadlineRecursiveFunction();
