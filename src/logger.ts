import NATS from "nats";

import { Event, sequelize } from "./database";

const nats = NATS.connect("nats://127.0.0.1:4222");

sequelize.sync().then(() => {
  nats.subscribe("event.*", (msg) => {
    console.log("Received: " + msg);
    Event.create({
      time: new Date(),
      payload: msg
    });
  });
});
