const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: [String], default: [] },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
}, { collection: 'reports' });

const Report = mongoose.model('Reports', reportSchema);

module.exports = Report;