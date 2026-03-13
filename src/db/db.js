const mongoose = require('mongoose');


async function connectDB() {
    await mongoose.connect("mongodb+srv://aaditya:Aaditya1528@ytbackend.nyj8epr.mongodb.net/halley")

    console.log("Connected to MongoDB")
}


module.exports = connectDB