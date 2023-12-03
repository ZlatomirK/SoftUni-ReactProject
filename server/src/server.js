const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT, DB_URL } = require("./constants");
const routes = require("./router");

const app = express();

//express config
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.options('*', cors());

// DB connection
async function dbConnect() {
  await mongoose.connect(DB_URL);
}

dbConnect()
  .then(() => console.log("Successfuly connected to DB!"))
  .catch((err) => console.log(`Error while connecting in DB: ${err}`));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} ...`));
