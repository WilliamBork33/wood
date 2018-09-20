////////////////////
// Mongo DB Stuff - Currently Unused
////////////////////

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var clientSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  task: String
});

// This creates our model from the above schema, using mongoose's model method
var Client = mongoose.model("Client", clientSchema);

// Export the Note model
module.exports = Client;
