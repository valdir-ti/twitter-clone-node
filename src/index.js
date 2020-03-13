const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose
  .connect(
    "mongodb+srv://twitter-clone-user:twitter-clone-user@123@cluster0-bqgvt.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log("we are connected");
    }
  )
  .catch(err => console.log(err));

app.use(routes);

app.listen(3000, () => {
  console.log("Service start on port 3000 ;)");
});
