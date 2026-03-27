const express = require('express');

const app = express();
app.use(express.json()); // to process JSON in request body

// Routes

module.exports = app;