const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String, default: "" },
  name: { type: String, default: "" }
});

module.exports = mongoose.model("User", UserSchema);
