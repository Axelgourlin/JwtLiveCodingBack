const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { setupRoutes } = require("./routes/index");

const connection = require("./config-db");

const app = express();

connection.connect((err) => {
  if (err) {
    console.log("Error connceting : " + err.stack);
  } else {
    console.log(
      "Connected to databases with threadId : " + connection.threadId
    );
  }
});

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

app.listen(4000, () => {
  console.log("Server is running.");
});
