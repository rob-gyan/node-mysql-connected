"use strict";
const assert = require("assert");
const dotenv = require("dotenv");

dotenv.config();

const {
  PORT,
  HOST,
  USER,
  PASSWORD,
  DATABASE,
  FTX_PUBLIC_KEY,
  FTX_PRIVATE_KEY,
} = process.env;
assert(PORT, "PORT is require");

module.exports = {
  port: PORT,
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  FTX_PUBLIC_KEY: FTX_PUBLIC_KEY,
  FTX_PRIVATE_KEY: FTX_PRIVATE_KEY,
};
