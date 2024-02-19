import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app from "./app";

import "./database";

const server = http.createServer(app);

function main() {
  server.listen(1000, () => {
    console.log(`Server is running on port ${1000}`);
  });
}

main();
