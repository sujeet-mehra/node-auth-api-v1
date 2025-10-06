const express = require('express');
const app = express();
const apiRoutes = require('./routes');

// http://localhost:4001/api/
app.use('/api', apiRoutes);

module.exports = app;