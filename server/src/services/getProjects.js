const mongoose = require('mongoose');
const Project = require('./models/Project');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getProjects(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const projects = await Project.find({});

        return projects;
    } catch (e) {
        throw e;
    }
}

module.exports = { getProjects };