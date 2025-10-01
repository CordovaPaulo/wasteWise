const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    zone: { type: String, required: true },
    barangay: { type: String, required: true },
    day: { type: String, required: true },
    type: { type: String, required: true },
}, { collection: 'schedules' });

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;