
var mongoose = require('mongoose');

var adddata = new mongoose.Schema({

    First_Name: {
        type: String,
        required: true
    },

    Last_Name: {
        type: String,
        required: true
    },
    Email_ID: {
        type: String,
        required: true
    },

    Phone_Number: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        // required: true
    }
    
},
    {

        timestamps:true
    
    }
);
module.exports = mongoose.model('Data', adddata);