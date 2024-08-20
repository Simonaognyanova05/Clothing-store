const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

// TyvixWjDwKCgyF7d

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function createAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 10);

        let admin = new Admin({ username, hashedPass });

        await admin.save();
    } catch (e) {
        throw e;
    }
}

module.exports = { createAdmin };