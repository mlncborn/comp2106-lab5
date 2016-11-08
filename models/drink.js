var mongoose = require('mongoose');

// define a schema for the drink model
// this and all other models inherit from mongoose.Schema
var drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'Please enter a name'
    },
    
    drinkType: {
        type: String,
        require: 'Please choose a type'
    },
    
    size: {
        type: Number,
        require: 'Please enter the size'
    },
    
    units: {
        type: String,
        require: 'Please enter the units'
    },
    
    alcoholPercentage: {
        type: Number,
        require: 'Please enter the alcohol %'
    }
});

// make the class public
module.exports = mongoose.model('Drink', drinkSchema);