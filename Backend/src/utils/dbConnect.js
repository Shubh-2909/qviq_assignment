const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017/qviq");
  console.log("Mongo DB Conneted");
};

module.exports = dbConnect;
