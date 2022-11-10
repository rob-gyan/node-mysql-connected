module.exports = (sequelize, Sequelize) => {
  const AdminProfitOrder = sequelize.define("adminprofitorder", {
    Currency: {
      type: Sequelize.TEXT,
    },
    OrderDate: {
      type: Sequelize.TEXT,
    },

    OrderType: {
      type: Sequelize.TEXT,
    },
    TotalPrincipleAmount: {
      type: Sequelize.DECIMAL,
    },
    ProfitAmount: {
      type: Sequelize.DECIMAL,
    },
    AmountRecieved: {
      type: Sequelize.DECIMAL,
    },

    NetworkFee: {
      type: Sequelize.DECIMAL,
    },
    AdminProfit: {
      type: Sequelize.DECIMAL,
    },
    TransactionId: {
      type: Sequelize.TEXT,
    },
    ProfitStatus: {
      type: Sequelize.BOOLEAN,
    },
  });

  return AdminProfitOrder;
};
