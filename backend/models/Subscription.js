const mongoose =
require("mongoose");

const subscriptionSchema =
new mongoose.Schema({

  plan: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  duration: {
    type: String,
    required: true
  },

  features: [
    {
      type: String
    }
  ]

});

module.exports =
mongoose.model(
  "Subscription",
  subscriptionSchema
);