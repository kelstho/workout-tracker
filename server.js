const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://kelly:kelly1@ds337418.mlab.com:37418/heroku_b8bz58zf",
  { 
    useNewUrlParser: true
  });

app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
