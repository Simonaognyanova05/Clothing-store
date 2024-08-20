const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
});

const Welcome = mongoose.model('Welcome', welcomeSchema);

module.exports = Welcome;