const express =
require("express");

const router =
express.Router();

const {

  createSubscription,
  getSubscriptions

} = require(
  "../controllers/subscriptionController"
);

router.post(
  "/create",
  createSubscription
);

router.get(
  "/all",
  getSubscriptions
);

module.exports =
router;