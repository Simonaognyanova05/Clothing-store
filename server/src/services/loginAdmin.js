const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function loginAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        let admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(400).json();
        }

        const comparedPassword = await bcrypt.compare(password, admin.hashedPass);

        if (!comparedPassword) {
            return res.status(401).json();
        };

        return res.status(200).json({ _id: admin._id, username: admin.username });
    } catch (e) {
        throw e;
    }
}

module.exports = { loginAdmin };