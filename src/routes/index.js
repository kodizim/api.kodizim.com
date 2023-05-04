/*eslint-disable*/
const express = require("express");
const router = express.Router();
const fs = require("fs");

const routes = fs.readdirSync(__dirname);

for (let route of routes) {
  if (route.includes(".js") && route != "index.js") {
    console.log("Loading route: " + route);
    router.use("/" + route.replace(".js", ""), require("./" + route));
  }
}
module.exports = router;