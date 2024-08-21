const express = require('express');
const cors = require('cors');
const { loginAdmin } = require('./services/loginAdmin');
const { welcomeUser } = require('./services/welcomeUser');
const { getWelcomeData } = require('./services/getWelcomeData');
const { postAboutMe } = require('./services/postAboutMe');


const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await loginAdmin(req, res);
});

app.put('/admin/about', async (req, res) => {
    await postAboutMe(req, res);
});

app.put('/admin/welcome', async (req, res) => {
    await welcomeUser(req, res);
});
app.get('/admin/welcome', async (req, res) => {
    let data = await getWelcomeData(req, res);
    res.json(data);
});
app.listen(2005);