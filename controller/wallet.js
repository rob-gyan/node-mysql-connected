let db = require("../models");
let config = require("../config");
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

const Order = db.principleorders;
const TotalOrder = db.totalprincipleorders;
const ProfitOrders = db.profitorders;
const CurrencyList = db.currencylist;

exports.principalOrder = async (req, res) => {
  try {
    const allCurrency = await CurrencyList.findAll();
    let ethTotalAmount = 0;
    let btcTotalAmount = 0;
    let bchTotalAmount = 0;
    let usdtTotalAmount = 0;
    let usdcTotalAmount = 0;
    let todayCreateDate = new Date().toString();
    for (ele of allCurrency) {
      if (ele.ThreeDigitName == "ETH") {
        const ethAddress = await client.getDepositAddress({ coin: "ETH" });
        console.log(ethAddress.result, true);

        const allOrders = await Order.findAll({
          where: { IsPendingOrder: 0, Currency: ele.ThreeDigitName },
        });

        for (let i = 0; i < allOrders.length; i++) {
          console.log(allOrders[i].Amount);
          ethTotalAmount += parseFloat(allOrders[i].Amount);
          const findOrder = await Order.findOne({
            where: { id: allOrders[i].id, Currency: allOrders[i].Currency },
          });
          var ab = await findOrder.update({ IsPendingOrder: 1 });
          // transfer to ftx
        }

        if (ethTotalAmount != 0) {
          await TotalOrder.create({
            Currency: "ETH",
            TransactionId: "iuiuhv",
            TotalPrincipleAmount: ethTotalAmount,
            ProfitAmount: ethTotalAmount,
            AmountRecieved: ethTotalAmount,
            AdminProfit: ethTotalAmount,
            NetworkFee: 0,
            OrderType: "PRINCIPLE",
            OrderDate: todayCreateDate,
            ProfitStatus: "0",
          });
        }
      } else if (ele.ThreeDigitName == "BTC") {
        const ethAddress = await client.getDepositAddress({ coin: "BTC" });
        const allOrders = await Order.findAll({
          where: { IsPendingOrder: 0, Currency: ele.ThreeDigitName },
        });

        for (let i = 0; i < allOrders.length; i++) {
          console.log(allOrders[i].Amount);
          btcTotalAmount += parseFloat(allOrders[i].Amount);
          const findOrder = await Order.findOne({
            where: { id: allOrders[i].id, Currency: allOrders[i].Currency },
          });

          var ab = await findOrder.update({ IsPendingOrder: 1 });
          // transfer to ftx
          // const sendToAddress = await bch.sendToAddress(walletaddress, amount);
        }
        if (btcTotalAmount != 0) {
          await TotalOrder.create({
            Currency: "BTC",
            TransactionId: "iuiuhv",
            TotalPrincipleAmount: btcTotalAmount,
            ProfitAmount: btcTotalAmount,
            AmountRecieved: btcTotalAmount,
            AdminProfit: btcTotalAmount,
            NetworkFee: 0,
            OrderType: "PRINCIPLE",
            OrderDate: todayCreateDate,
            ProfitStatus: "0",
          });
        }
      } else if (ele.ThreeDigitName == "BCH") {
        const ethAddress = await client.getDepositAddress({ coin: "BCH" });
        const allOrders = await Order.findAll({
          where: { IsPendingOrder: 0, Currency: ele.ThreeDigitName },
        });

        for (let i = 0; i < allOrders.length; i++) {
          console.log(allOrders[i].Amount);
          bchTotalAmount += parseFloat(allOrders[i].Amount);
          const findOrder = await Order.findOne({
            where: { id: allOrders[i].id, Currency: allOrders[i].Currency },
          });

          var ab = await findOrder.update({ IsPendingOrder: 1 });
          // transfer to ftx
          // const sendToAddress = await bch.sendToAddress(walletaddress, amount);
        }
        if (bchTotalAmount != 0) {
          await TotalOrder.create({
            Currency: "BCH",

            TransactionId: "iuiuhv",
            TotalPrincipleAmount: bchTotalAmount,
            ProfitAmount: bchTotalAmount,
            AmountRecieved: bchTotalAmount,
            AdminProfit: bchTotalAmount,
            NetworkFee: 0,
            OrderType: "PRINCIPLE",
            OrderDate: todayCreateDate,
            ProfitStatus: "0",
          });
        }
      } else if (ele.ThreeDigitName == "USDT") {
        const ethAddress = await client.getDepositAddress({ coin: "USDT" });
        const allOrders = await Order.findAll({
          where: { IsPendingOrder: 0, Currency: ele.ThreeDigitName },
        });

        for (let i = 0; i < allOrders.length; i++) {
          console.log(allOrders[i].Amount);
          usdtTotalAmount += parseFloat(allOrders[i].Amount);
          const findOrder = await Order.findOne({
            where: { id: allOrders[i].id, Currency: allOrders[i].Currency },
          });

          var ab = await findOrder.update({ IsPendingOrder: 1 });
          // transfer to ftx
        }
        if (usdtTotalAmount != 0) {
          await TotalOrder.create({
            Currency: "USDT",
            TransactionId: "iuiuhv",
            TotalPrincipleAmount: usdtTotalAmount,
            ProfitAmount: usdtTotalAmount,
            AmountRecieved: usdtTotalAmount,
            AdminProfit: usdtTotalAmount,
            NetworkFee: 0,
            OrderType: "PRINCIPLE",
            OrderDate: todayCreateDate,
            ProfitStatus: "0",
          });
        }
      } else if (ele.ThreeDigitName == "USDC") {
        const ethAddress = await client.getDepositAddress({ coin: "USDC" });
        const allOrders = await Order.findAll({
          where: { IsPendingOrder: 0, Currency: ele.ThreeDigitName },
        });

        for (let i = 0; i < allOrders.length; i++) {
          console.log(allOrders[i].Amount);
          usdcTotalAmount += parseFloat(allOrders[i].Amount);
          const findOrder = await Order.findOne({
            where: { id: allOrders[i].id, Currency: allOrders[i].Currency },
          });

          var ab = await findOrder.update({ IsPendingOrder: 1 });
          // transfer to ftx
        }
        if (usdcTotalAmount != 0) {
          await TotalOrder.create({
            Currency: "USDC",
            TransactionId: "iuiuhv",
            TotalPrincipleAmount: usdcTotalAmount,
            ProfitAmount: usdcTotalAmount,
            AmountRecieved: usdcTotalAmount,
            AdminProfit: usdcTotalAmount,
            NetworkFee: 0,
            OrderType: "PRINCIPLE",
            OrderDate: todayCreateDate,
            ProfitStatus: "0",
          });
        }
      }
    }

    return {
      data: "successfully transafer",
      error: null,
      message: "SUCCESS",
      statusCode: 200,
    };
  } catch (error) {
    res.status(500).send(error.message);
  }
};
