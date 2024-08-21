const mongoose = require('mongoose');
const About = require('./models/About');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getAboutData(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const about = await About.findOne({});

        return about;
    } catch (e) {
        throw e;
    }
};

module.exports = { getAboutData };