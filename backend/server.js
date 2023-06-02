const express = require("express");
const server = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { usersApi } = require("./routes/users.route");
const { postsApi } = require("./routes/posts.route");
const authJWT = require("./middlewares/auth.middleware");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

server
  .use("/users", usersApi)
  .use("/posts", postsApi)

server.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);
