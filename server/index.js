const express = require('express');
const cors = require('cors');

const { loginAdmin } = require('./services/loginAdmin');
const { welcomeUser } = require('./services/welcomeUser');
const { getWelcomeData } = require('./services/getWelcomeData');
const { updateAboutMe } = require('./services/updateAboutMe');
const { getAboutData } = require('./services/getAboutData');
const { updateProjects } = require('./services/updateProjects');
const { addContact } = require('./services/addContact');
const { getContacts } = require('./services/getContacts');
const { markAsRead } = require('./services/markAsRead');
const { createProject } = require('./services/createProject');
const { getProjects } = require('./services/getProjects');
const { getDetailsProjects } = require('./services/getDetailsProject');
const { deleteProject } = require('./services/deleteProject');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await loginAdmin(req, res);
});

app.put('/admin/about', async (req, res) => {
    await updateAboutMe(req, res);
});

app.get('/about', async (req, res) => {
    let result = await getAboutData(req, res);
    res.json(result);
});

app.put('/admin/updateProject', async (req, res) => {
    await updateProjects(req, res);
});

app.post('/admin/createProject', async (req, res) => {
    await createProject(req, res);
});

app.get('/admin/getProjects', async (req, res) => {
    let result = await getProjects(req, res);
    res.json(result);
});

app.get('/admin/getDetails/:projectId', async (req, res) => {
    let result = await getDetailsProjects(req, res);
    res.json(result);
});

app.delete('/admin/deleteProject/:projectId', async (req, res) => {
    await deleteProject(req, res);
});

app.put('/admin/welcome', async (req, res) => {
    await welcomeUser(req, res);
});

app.get('/', async (req, res) => {
    let data = await getWelcomeData(req, res);
    res.json(data);
});

app.post('/contact', async (req, res) => {
    await addContact(req, res);
});

app.get('/contact', async (req, res) => {
    let result = await getContacts(req, res);
    res.json(result);
});

app.delete('/contact/:messageId', async (req, res) => {
    await markAsRead(req, res);
})

app.listen(2005);