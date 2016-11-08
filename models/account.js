// linke to mongoose
var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

var accountSchema = new mongoose.Schema({
});

accountSchema.plugin(plm);

module.exports = mongoose.model('Account', accountSchema);