/**
 * Created by danielniclas on 1/7/16.
 */



//  EXPRESS -- Routes to Static Content:

var express = require('express');
var router = express.Router();                      //  Use Express Router OBJECT - Router Object acts like an App object

router.get('/', function (req, res) {                //  1.  GET Endpoint:  '/'  (This is the Landing Page - Shell Page)

    res.sendfile('layouts/flights.html');
    // res.sendFile(__dirname + 'layouts/posts.html');
    // res.render('posts.html')

});


router.use(express.static(__dirname + '/../ng'));   //  Express built-in middleware to SERVE STATIC ASSETS (stored in 'ng' directory)
                                                        //  __directory is a Node variable that points to the current file's directory (controllers)
                                                        //  Static Assets:  postsctrl.js



module.exports = router;                            //  EXPORTED as router OBJECT >>  to server-auth.js