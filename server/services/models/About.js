const mongoose = require('mongoose');


const aboutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    location: { type: String, required: true },
    education: { type: String, required: true },
    description: { type: String, required: true },
    profileImage: { type: String, required: true },
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;