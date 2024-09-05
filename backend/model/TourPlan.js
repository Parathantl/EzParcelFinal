const mongoose = require("mongoose");

const TourPlanSchema = new mongoose.Schema({
  traveler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const TourPlan = mongoose.model("TourPlan", TourPlanSchema);

module.exports = TourPlan;
