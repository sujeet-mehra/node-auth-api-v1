const express = require('express');
const app = express();
const apiRoutes = require('./routes');
const dbConnection = require('./database/mysql.db');

// http://localhost:4001/api/
app.use('/api', apiRoutes);

module.exports = app;