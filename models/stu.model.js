const mongoose = require('mongoose');

var stuSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    classGrade: {
        type: Number
    },
    month: {
        type: Number
    },
    year: {
        type: Number
    },
    attCount: {
        type: Number
    }
});

mongoose.model('Student', stuSchema);