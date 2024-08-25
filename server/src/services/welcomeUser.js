const mongoose = require('mongoose');
const Welcome = require('./models/Welcome');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function welcomeUser(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, subtitle, img1, img2, img3 } = req.body;
    try {
        await Welcome.findOneAndUpdate({ $set: { title, subtitle, img1, img2, img3 } });

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { welcomeUser };