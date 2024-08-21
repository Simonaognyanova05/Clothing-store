const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getContacts(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const contacts = await Contact.find({});

        return contacts;
    } catch (e) {
        throw e;
    }
};

module.exports = { getContacts };