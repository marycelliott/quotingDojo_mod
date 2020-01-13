const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: (req,res) => {
        res.render("index");
    },
    create: (req,res) => {
        // code here
    },
    show: (req, res) => {
        // code here
    }
}