module.exports = (sequelize, Sequelize) => {
  const ProfitOrder = sequelize.define("profitorders", {
    Currency: {
      type: Sequelize.TEXT,
    },
    OrderDate: {
      type: Sequelize.TEXT,
    },
    Account_Id: {
      type: Sequelize.TEXT,
    },
    OrderType: {
      type: Sequelize.TEXT,
    },
    Amount: {
      type: Sequelize.DECIMAL,
    },

    NetworkFee: {
      type: Sequelize.DECIMAL,
    },

    Fee: {
      type: Sequelize.TEXT,
    },
    TransactionId: {
      type: Sequelize.TEXT,
    },
    PrincipleOrderId: {
      type: Sequelize.TEXT,
    },
    OrderBookId: {
      type: Sequelize.TEXT,
    },
  });

  return ProfitOrder;
};
