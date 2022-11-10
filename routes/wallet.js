var express = require("express");
var walletController = require("../controller/wallet");

var router = express.Router();

// *********update balance api*********
router.post("/updateBalance", async (req, res) => {
  try {
    let walletBalanceUpdate = await walletController.updateBalance(req);
    let code = walletBalanceUpdate.statusCode;
    delete walletBalanceUpdate.statusCode;
    console.log(code);
    res.status(code).send(walletBalanceUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
});
// *********principal order api*********
router.post("/principalOrders", async (req, res) => {
  try {
    let principalOrders = await walletController.principalOrder(req);
    let code = principalOrders.statusCode;
    delete principalOrders.statusCode;
    console.log(code);
    res.status(code).send(principalOrders);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/verifyToken", async (req, res) => {
  try {
    let verifyTokenRecapctha = await walletController.verifyRecaptcha(req);
    let code = verifyTokenRecapctha.statusCode;
    delete verifyTokenRecapctha.statusCode;
    console.log(code);
    res.status(code).send(verifyTokenRecapctha);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
