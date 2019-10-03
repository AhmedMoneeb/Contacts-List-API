const app = require('./app');

//getting the port number from "config/" folder
const portNumber = process.env.PORT;

//starting server
const server = app.listen(portNumber, () => {
    console.log(`Server started on port ${portNumber}`);
})
