const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = ""
const url = ''

//password = 4PQBFPg0OHH3SVmT
//user pass = Mh37oQpUKrErGAaG
mongoose.connect('mongodb://localhost:27017/admin')
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

console.log('Connection attempt started...')

const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employee'), EmployeeRoute);

const UserRoute = require('./Routes/Users.route');
app.use(('/user'), UserRoute)

//Error if wrong endpoint
app.use((req, res, next) => {
    const err = new Error("Not Found");
});

//Middleware Express Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})