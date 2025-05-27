const mongoose = require('mongoose');

const piFormSchema = new mongoose.Schema({
  institute: String,
  piName: String,
  department: String,
  email: String,
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('PIForm', piFormSchema);
