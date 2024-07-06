const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Report = require('../models/Report');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new doctor
exports.createDoctor = async (req, res) => {
  const { name, specialization } = req.body;

  try {
    const newDoctor = new Doctor({
      name,
      specialization,
    });

    await newDoctor.save();

    res.status(201).json({ message: 'Doctor created successfully', doctor: newDoctor });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update doctor details
exports.updateDoctor = async (req, res) => {
  const { name, specialization } = req.body;

  try {
    let doctor = await Doctor.findById(req.params.doctorId);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.name = name;
    doctor.specialization = specialization;

    await doctor.save();

    res.json({ message: 'Doctor updated successfully', doctor });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    await doctor.remove();

    res.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get patients assigned to a doctor
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ doctor: req.params.doctorId });

    res.json(patients);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a medical report for a patient
exports.createReport = async (req, res) => {
  const { patientId, reportContent } = req.body;
  const doctorId = req.user.id; // Assuming authenticated doctor's ID is in req.user

  try {
    const newReport = new Report({
      patient: patientId,
      doctor: doctorId,
      reportContent,
    });

    await newReport.save();

    res.status(201).json({ message: 'Report created successfully', report: newReport });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
