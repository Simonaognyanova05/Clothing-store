const mongoose = require('mongoose');
const Project = require('./models/Project');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDetailsProjects(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    let projectId = req.params.projectId;

    try {
        const project = await Project.findById(projectId);

        return project;
    } catch (e) {
        throw e;
    }
}

module.exports = { getDetailsProjects };