const { default: mongoose } = require('mongoose');
const express = require('express')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully")
    }
    catch (error) {
        console.error("Database failed to connect");
        proce
    }
}