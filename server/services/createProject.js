const mongoose = require('mongoose');
const Project = require('./models/Project');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function createProject(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, subtitle, description, gitLink, img } = req.body;

    try {
        const project = new Project({ title, subtitle, description, gitLink, img });

        await project.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
}

module.exports = { createProject };