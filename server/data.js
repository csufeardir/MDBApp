//Database Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = new Schema(
 {
    _id: Number,
     id: Number,
    firstName: String,
	lastName: String,
	age: Number,
	nationality: String
  },
    { collection: 'students' }
);

module.exports = mongoose.model("Data", DataSchema);