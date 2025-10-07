const express = require('express');
const app = express();
const apiRoutes = require('./routes');
// const dbConnection = require('./database/mysql.db');

// Middleware to parse JSON bodies
app.use(express.json());

// http://localhost:4001/api/
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});
module.exports = app;