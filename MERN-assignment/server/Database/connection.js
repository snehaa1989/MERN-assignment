const mongoose = require('mongoose');
// configuring database
mongoose.set('strictQuery', false);
const db = process.env.db;
mongoose.connect(db)
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.log(err));