/**
 * Created by danielniclas on 1/7/16.
 */



var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flight',function() {
    console.log('mongodb FLIGHT MODEL connected');
});


module.exports = mongoose;