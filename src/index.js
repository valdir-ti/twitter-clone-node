const express = require("express");
const mongoose = require("mongoose");
const app = express();

// mongoose.connect(
//   "mongodb+srv://twitter-clone-user:gYAJU6zDvDULgHqp@cluster0-bqgvt.mongodb.net/test?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );

mongoose.connect("mongodb://localhost:27017/twitter-node", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(require("./routes.js"));

app.listen(3000, () => {
  console.log("Service start on port 3000 ;)");
});
