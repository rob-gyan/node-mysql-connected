"use strict";
const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
let cors = require("cors");
var {
  getDevice,
  updateBalance,
  principalOrder,
} = require("./controller/wallet");
var CronJob = require("cron").CronJob;
const { RestClient } = require("ftx-api");

const API_KEY = config.FTX_PUBLIC_KEY;
const PRIVATE_KEY = config.FTX_PRIVATE_KEY;

const client = new RestClient(
  API_KEY,
  PRIVATE_KEY

  // restClientOptions,
  // requestLibraryOptions
);

console.log(client.getWithdrawalHistory, "@****");
client
  .getDepositAddress({ coin: "BTC" })
  .then((result) => {
    console.log(" result: ", result.result);
  })
  .catch((err) => {
    console.error(" error: ", err);
  });

// all routes
const walletRoutes = require("./routes/wallet");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// all routes path
app.use("/api/v1", walletRoutes);
var job = new CronJob(
  "*/1 * * * *",
  async function () {
    var a = await principalOrder();
    console.log("You will see this message every two minutes", a);
  },
  null,
  true,
  "America/Los_Angeles"
);

app.listen(config.port, () => {
  console.log("app listening on url http://localhost:" + config.port);
});
