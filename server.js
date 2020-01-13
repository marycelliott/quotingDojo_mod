// REQUIREMENTS/DEPENDENCIES
const express = require("express");
const flash = require('express-flash');
const session = require('express-session');

// SET UP EXPRESS
const app = express();
app.use(express.static(__dirname + "/static"));
app.use(flash());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

// ALLOWS ACCESS TO MONGOOSE MODELS AND ROUTES
require("./server/config/mongoose.js");
require('./server/config/routes')(app);

app.listen(8000, () => console.log("listening on port 8000"));