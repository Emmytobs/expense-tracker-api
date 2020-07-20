const path = require('path');

const express = require('express');
const cors = require('cors');
const app = express();

// Setup Mongoose
require('./db/mongoose');

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;


const userRoute = require('./routes/userRoutes');
const transactionRoute = require('./routes/transactionRoutes');
app.use('/user', userRoute);
app.use(transactionRoute);

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
