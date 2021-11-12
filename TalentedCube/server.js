import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mysql from "mysql";
import data from "./data.js";

import usersRoutes from "./routes/users.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());

//port
const port = process.env.PORT || 5000;

const db = mysql.createConnection({
  uri: process.env.MYSQL_URI,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("Home");

  res.send(data.products);
});

app.listen(port, () =>
  console.log(`Server Running at port: http://localhost:${port}`)
);
