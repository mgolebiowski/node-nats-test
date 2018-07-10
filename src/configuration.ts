import fs from "fs";

export const dbConfig = JSON.parse(fs.readFileSync("database.json", "utf8"));
