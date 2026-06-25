const Subscription =
require("../models/Subscription");

const createSubscription =
async (req, res) => {

  try {

    const subscription =
      await Subscription.create(
        req.body
      );

    res.status(201).json(
      subscription
    );

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};

const getSubscriptions =
async (req, res) => {

  try {

    const subscriptions =
      await Subscription.find();

    res.json(
      subscriptions
    );

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }

};

module.exports = {

  createSubscription,
  getSubscriptions

};