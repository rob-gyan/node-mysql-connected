module.exports = (sequelize, Sequelize) => {
  const Currency = sequelize.define("currency", {
    ThreeDigitName: {
      type: Sequelize.TEXT,
    },
    FullName: {
      type: Sequelize.TEXT,
    },
    IsFiat: {
      type: Sequelize.BOOLEAN,
    },
    Status: {
      type: Sequelize.BOOLEAN,
    },
    Confirms: {
      type: Sequelize.INTEGER,
    },
    ImgURL: {
      type: Sequelize.TEXT,
    },
    IsToken: {
      type: Sequelize.BOOLEAN,
    },
    SmartContractAddress: {
      type: Sequelize.TEXT,
    },
  });

  return Currency;
};
