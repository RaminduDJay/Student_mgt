const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json()); 

// Update the MongoDB connection string for your local database
// const MONGODB_LOCAL_URL = "mongodb://localhost:27017/student_db";

// mongoose.connect(MONGODB_LOCAL_URL, {
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// mongoose.connect(MONGODB_LOCAL_URL, {
//     // Remove the following two options as they are deprecated
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     useCreateIndex: true, // Add this option if you need to create indexes
//     useFindAndModify: false,
//     useNewUrlParser: true, // Use the new URL parser
//     useUnifiedTopology: true, // Use the new topology engine
// });


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

const studentsRouter = require("./routes/students");

app.use("/students", studentsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
