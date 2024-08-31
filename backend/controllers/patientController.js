const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const Report = require('../models/Report');

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const { name, dob, contactInfo } = req.body;

    const newPatient = new Patient({
      name,
      dob,
      contactInfo,
    });

    await newPatient.save();

    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(patient);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a patient by ID
exports.updatePatient = async (req, res) => {
  try {
    const { name, dob, contactInfo } = req.body;

    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.patientId,
      { name, dob, contactInfo },
      { new: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json(updatedPatient);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a patient by ID
exports.deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.patientId);

    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Also delete related appointments and reports
    await Appointment.deleteMany({ patient: req.params.patientId });
    await Report.deleteMany({ patient: req.params.patientId });

    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
