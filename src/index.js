const port = 3000;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

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

app.use(cors({ origin: `http://localhost:${port}` }));

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
app.use(require("./routes.js"));

server.listen(port, () => {
  console.log(`Service start on port ${port} ;)`);
});
