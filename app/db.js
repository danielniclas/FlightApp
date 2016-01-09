/**
 * Created by danielniclas on 1/7/16.
 */


//  CONNECTION WITH MONGODB using MONGOOSE:


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flight',function() {          //  Create and Connect with DB named:  flight
    console.log('mongodb FLIGHT MODEL connected');
});

module.exports = mongoose;

//   /models/posts   var db = require('../db');
//   /models/posts   var Post = db.model('Post', {OBJECT})     Creates OBJECT called Post  --  Post MODEL
//   Post is ADDED to the DB