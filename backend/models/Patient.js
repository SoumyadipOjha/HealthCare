const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dob: { type: Date },
  contactInfo: { type: String },
});

module.exports = mongoose.model('Patient', patientSchema);
