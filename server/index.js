const express = require('express');
const cors = require('cors');
const { loginAdmin } = require('./services/loginAdmin');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await loginAdmin(req, res);
})
app.listen(2005);