const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 8080;
const dbConnect = require('./config/dbConnect')
const app = express();

dbConnect();

app.use(express.json());

const User = require('./modules/User');

app.get('/', (req, res) => {
    res.json({
        message: "welcome to my DB connection"
    })
});
app.listen(PORT, () => console.log(`App listening on port${PORT}`))
