const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to protect routes for patients and doctors
router.use(authMiddleware.authenticatePatientOrDoctor);

router.get('/', appointmentController.getAppointments);
router.put('/:appointmentId', authMiddleware.authenticateDoctor, appointmentController.updateAppointment);

module.exports = router;
