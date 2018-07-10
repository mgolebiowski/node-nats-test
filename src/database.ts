import Sequelize from "sequelize";
import { dbConfig } from "./configuration";

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    dialect: "postgres",
    logging: false
  }
);

export const Event = sequelize.define("event", {
  time: Sequelize.DATE,
  payload: Sequelize.STRING
});
