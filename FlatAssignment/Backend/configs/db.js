const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://sri:sri_123@cluster0.r9qke.mongodb.net/unitassignment?retryWrites=true&w=majority"
    );
};

module.exports = connect;
