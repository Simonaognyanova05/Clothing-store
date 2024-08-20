const express = require('express');
const cors = require('cors');
const { createAdmin } = require('./services/createAdmin');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
    await createAdmin(req, res);
})
app.listen(2005);