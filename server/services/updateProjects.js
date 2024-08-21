const mongoose = require('mongoose');
const Project = require('./models/Project');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function updateProjects(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, description, img } = req.body;

    try {
        await Project.findOneAndUpdate({ $set: { title, description, img } });

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { updateProjects };