const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function markAsRead(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let messageId = req.params.messageId;

    try {
        await Contact.findByIdAndDelete(messageId);

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { markAsRead };