const mongoose = require('mongoose');
const Welcome = require('./models/Welcome');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getWelcomeData(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        let welcome = await Welcome.findOne({});

        return welcome;
    } catch (e) {
        throw e;
    }
};

module.exports = { getWelcomeData };