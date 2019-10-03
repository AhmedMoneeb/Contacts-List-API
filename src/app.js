const express = require('express');
//running a module that conncets to the mongoDB server
require('./db/mongoose')
const conatctRouter = require('./routers/contacts-router');

const app = express();

/*
parses incoming requests with JSON payloads and a new body object 
containing the parsed data is populated on the request object after
the middleware
*/
app.use(express.json());

app.use(conatctRouter);

//exporting the app object to be used in index.js and tests folder 
module.exports = app;