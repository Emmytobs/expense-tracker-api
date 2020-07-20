const path = require('path');
const express = require('express');
const app = express();

// Load in the environment variables
require('dotenv').config();
// Setup Mongoose
require('./db/mongoose');

app.use(express.json())

const PORT = process.env.PORT || 3000;


const userRoute = require('./routes/userRoutes');
const transactionRoute = require('./routes/transactionRoutes');
app.use('/user', userRoute);
app.use(transactionRoute);

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
