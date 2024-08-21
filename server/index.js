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

app.put('/admin/projects', async (req, res) => {
    await updateProjects(req, res);
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

app.listen(2005);