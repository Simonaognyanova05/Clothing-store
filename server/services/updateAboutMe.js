const mongoose = require('mongoose');
const About = require('./models/About');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function updateAboutMe(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { name, specialty, location, education, description, profileImage } = req.body;
    try {
        await About.findOneAndUpdate({ $set: { name, specialty, location, education, description, profileImage } });

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { updateAboutMe };