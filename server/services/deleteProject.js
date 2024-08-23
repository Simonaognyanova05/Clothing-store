const mongoose = require('mongoose');
const Project = require('./models/Project');

const dbUrl = 'mongodb+srv://portfolio_db:TyvixWjDwKCgyF7d@portfolio.rv4xs.mongodb.net/portfolio_db';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function deleteProject(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const projectId = req.params.projectId;

    try {
        await Project.findByIdAndDelete(projectId);

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
}

module.exports = { deleteProject };