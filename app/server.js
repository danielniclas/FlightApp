/**
 * Created by danielniclas on 1/7/16.
 */


//  EXPRESS App Entry Point
//  Most Express Apps have a single entry point like this to start an instance of a server ,,

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


// app.use(require('./controllers/api/posts'));             //  This file using the Express Router OBJECT  --  Get/Post Endpoints

//  REQUIRE:  ENDPOINTS  --  These files EXPORT the Router OBJECT

app.use('/api/posts', require('./controllers/api/posts'));  //  >>  ./controllers/api/posts
app.use('/', require('./controllers/static'));              //  Shell Page:  ./controllers/static


app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> FlIGHT APP - server.js Node App')
});
