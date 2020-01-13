const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    // properties go here
    // don't forget custom error messages
},
{timestamps: true}
);

mongoose.model('Quote', QuoteSchema);