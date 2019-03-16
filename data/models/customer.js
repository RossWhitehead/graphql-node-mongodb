const mongoose =require('mongoose');

const Schema = mongoose.Schema;

// Create the User Schema.
const CustomerSchema = new Schema({
  customerID: {
    type: String,
    required: true,
    unique: true
  },
  contactName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model("Customer", CustomerSchema, "customers");

module.exports = Customer