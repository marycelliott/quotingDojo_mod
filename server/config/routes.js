const quotes = require('../controllers/Quotes');

module.exports = function(app){
    app.get('/', quotes.index);
    app.post('/quotes', quotes.create);
    app.get('/quotes', quotes.show);
}