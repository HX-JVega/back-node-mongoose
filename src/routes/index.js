const { Router } = require("express");
const fs = require("fs");

const router = Router();

fs.readdirSync("./src/routes").forEach((file) => {
  const module = file.split(".")[0];
  file !== "index.js" && router.use(`/${module}`, require(`./${module}`));
});

module.exports = router;
