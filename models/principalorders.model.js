module.exports = (sequelize, Sequelize) => {
  const PrincipleOrder = sequelize.define("principleorders", {
    Currency: {
      type: Sequelize.TEXT,
    },

    Email: {
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
      type: Sequelize.TEXT,
    },
    Price: {
      type: Sequelize.TEXT,
    },
    Value: {
      type: Sequelize.TEXT,
    },
    OrderStatus_Id: {
      type: Sequelize.TEXT,
    },
    IsPendingOrder: {
      type: Sequelize.BOOLEAN,
    },
    NetworkFee: {
      type: Sequelize.TEXT,
    },

    Fee: {
      type: Sequelize.TEXT,
    },
    TransactionId: {
      type: Sequelize.TEXT,
    },
    Revenue_Id: {
      type: Sequelize.TEXT,
    },
    FiatCurrency: {
      type: Sequelize.TEXT,
    },
    FiatAmount: {
      type: Sequelize.TEXT,
    },
    AdminOrderId: {
      type: Sequelize.TEXT,
    },
    MaturityDate: {
      type: Sequelize.TEXT,
    },
    MaturityStatus: {
      type: Sequelize.TEXT,
    },
  });

  return PrincipleOrder;
};
