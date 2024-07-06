const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: Date, default: Date.now },
  reportContent: { type: String },
});

module.exports = mongoose.model('Report', reportSchema);
