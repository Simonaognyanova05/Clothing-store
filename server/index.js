const express = require('express');
const cors = require('cors');

const { loginAdmin } = require('./services/loginAdmin');
const { welcomeUser } = require('./services/welcomeUser');
const { getWelcomeData } = require('./services/getWelcomeData');
const { updateAboutMe } = require('./services/updateAboutMe');
const { getAboutData } = require('./services/getAboutData');


const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await loginAdmin(req, res);
});

app.put('/admin/about', async (req, res) => {
    await updateAboutMe(req, res);
});

app.get('/admin/about', async (req, res) => {
    let result = await getAboutData(req, res);
    res.json(result);
});

app.put('/admin/welcome', async (req, res) => {
    await welcomeUser(req, res);
});
app.get('/admin/welcome', async (req, res) => {
    let data = await getWelcomeData(req, res);
    res.json(data);
});
app.listen(2005);