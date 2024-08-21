const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function addContact(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { name, email, message } = req.body;

    try {
        const contact = new Contact({ name, email, message });

        await contact.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
}

module.exports = { addContact };
