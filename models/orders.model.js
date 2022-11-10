module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    Currency: {
      type: Sequelize.TEXT,
    },
    amount: {
      type: Sequelize.TEXT,
    },
    orderstatus: {
      type: Sequelize.TEXT,
    },
    orderdate: {
      type: Sequelize.TEXT,
    },
  });

  return Order;
};
