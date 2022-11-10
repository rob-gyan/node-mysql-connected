module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payments", {
    Currency: {
      type: Sequelize.TEXT,
    },
    PaymentDate: {
      type: Sequelize.TEXT,
    },
    ToWalletAddress: {
      type: Sequelize.TEXT,
    },
    PaymentType: {
      type: Sequelize.TEXT,
    },
    StatusMessage: {
      type: Sequelize.TEXT,
    },
    TransectionId: {
      type: Sequelize.TEXT,
    },
    Amount: {
      type: Sequelize.TEXT,
    },
    AmountSent: {
      type: Sequelize.TEXT,
    },
    NetworkFee: {
      type: Sequelize.TEXT,
    },
    Fee: {
      type: Sequelize.TEXT,
    },
    Confirms: {
      type: Sequelize.TEXT,
    },
    Account_Id: {
      type: Sequelize.TEXT,
    },
    PaymentStatus_Id: {
      type: Sequelize.TEXT,
    },
    Revenue: {
      type: Sequelize.TEXT,
    },
    RefferralPercent: {
      type: Sequelize.TEXT,
    },
    RefferralAmount: {
      type: Sequelize.TEXT,
    },
    RefferralAmount: {
      type: Sequelize.TEXT,
    },
    FiatCurrency: {
      type: Sequelize.TEXT,
    },
    FiatAmount: {
      type: Sequelize.TEXT,
    },
    BankAccountTitle: {
      type: Sequelize.TEXT,
    },
    BankAccountNumber: {
      type: Sequelize.TEXT,
    },
    BankName: {
      type: Sequelize.TEXT,
    },
    Source: {
      type: Sequelize.TEXT,
    },
    Reason: {
      type: Sequelize.TEXT,
    },
    Spread: {
      type: Sequelize.TEXT,
    },
    ActualAmount: {
      type: Sequelize.TEXT,
    },
    InvoiceNo: {
      type: Sequelize.TEXT,
    },
    DeviceId: {
      type: Sequelize.TEXT,
    },
    App: {
      type: Sequelize.TEXT,
    },
    AppName: {
      type: Sequelize.TEXT,
    },
  });

  return Payment;
};
