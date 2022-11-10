module.exports = (sequelize, Sequelize) => {
  const Wallet = sequelize.define("wallets", {
    Currency: {
      type: Sequelize.TEXT,
    },
    WalletAddress: {
      type: Sequelize.TEXT,
    },
    AddressIndex: {
      type: Sequelize.TEXT,
    },
    BarcodeImageURL: {
      type: Sequelize.TEXT,
    },
    CreatedOn: {
      type: Sequelize.TEXT,
    },
    WalletType: {
      type: Sequelize.TEXT,
    },
    DesTag: {
      type: Sequelize.TEXT,
    },
    PublicKey: {
      type: Sequelize.TEXT,
    },
    Account_Id: {
      type: Sequelize.TEXT,
    },
    UnderProcess: {
      type: Sequelize.TEXT,
    },
    ProcessingStatus: {
      type: Sequelize.TEXT,
    },
    LowBalance: {
      type: Sequelize.TEXT,
    },
    Balance: {
      type: Sequelize.TEXT,
    },
    ReservedBalance: {
      type: Sequelize.TEXT,
    },
    BalanceStoshis: {
      type: Sequelize.TEXT,
    },
    app: {
      type: Sequelize.TEXT,
    },
    fiatSymbol: {
      type: Sequelize.TEXT,
    },
  });

  return Wallet;
};
