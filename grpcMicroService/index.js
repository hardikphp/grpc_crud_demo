import express from "express";
import { urlencoded, json } from "body-parser";
require("dotenv").config({ path: ".env" });
import { INTERNAL_LINKS } from "./src/enum";

const server = express();

const PORT = process.env.PORT;

require("./src/config/dbConnection");

require("./grpcServer");

import { customerRoute } from "./src/routes";

server.use(urlencoded({ extended: true }));
server.use(json());

server.use(INTERNAL_LINKS.CUSTOMERS, customerRoute);

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
