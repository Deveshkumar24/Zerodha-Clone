const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingSchemas");

const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };