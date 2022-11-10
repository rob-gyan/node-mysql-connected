const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: config.acquire,
    idle: config.idle,
  },
});

// check user authenticate or not
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!!");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.wallets = require("./wallet.model.js")(sequelize, Sequelize);
db.payments = require("./payment.model.js")(sequelize, Sequelize);
db.principleorders = require("./principalorders.model.js")(
  sequelize,
  Sequelize
);
db.totalprincipleorders = require("./adminprofitorder.model.js")(
  sequelize,
  Sequelize
);
db.profitorders = require("./profitorders.model.js")(sequelize, Sequelize);
db.currencylist = require("./currency.model.js")(sequelize, Sequelize);

// ******socialmedia related table end*****

// create table if not exist in our database
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Synchronize all table!!");
  })
  .catch(function () {
    console.log("Synchronize Rejected");
  });

module.exports = db;
