const mongoose = require("mongoose");

//connecting to the MongoDB server
//and logs a message whether the connection was successful or failed
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB");

}).catch((error) => {
    console.log("DB connection Failed", error);
});