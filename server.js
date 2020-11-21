import express from 'express';
express.app();

require('dotenv').config();

app.use(express.static('public'))
app.use('view engine', 'ejs')

const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Listening on http://localhost/${PORT}`)