import fs from "fs";
import NATS from "nats";
import Sequelize from "sequelize";

const dbConfig = JSON.parse(fs.readFileSync("database.json", "utf8"));

const nats = NATS.connect("nats://127.0.0.1:4222");
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    dialect: "postgres",
  }
);

const Event = sequelize.define("event", {
  time: Sequelize.DATE,
  payload: Sequelize.STRING
});

sequelize.sync().then(() => {
  nats.subscribe("foo", (msg) => {
    console.log("Received a message: " + msg);
    Event.create({
      time: new Date(),
      payload: msg
    });
  });
});
