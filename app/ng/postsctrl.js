/**
 * Created by danielniclas on 1/4/16.
 */


var app = angular.module('myApp', []);


    app.controller('PostsCtrl', function ($scope, postSvc) {



        $scope.data = "test";

        $scope.flightsModel =

                        {
                             id:"JBU915",
                             num:"A321",
                             code:"John F Kennedy Intl (KJFK)",
                             dep:"2015-04-18T13:41:56-05:00",
                             arriv:1434510780,
                             price:123.2256
                        };

                       // {
                       //     id:"UAL1731",
                       //     num:"B739",
                       //     code:"Houston Bush Int'ctl (KIAH)",
                       //     dep:"2015-04-18T13:41:56-05:00",
                       //     arriv:1434510598,
                       //     price:532.226
                       // }
                       //
                       //];


        //  GET  GET  GET POSTS

        postSvc.fetch().success(function (posts) {
            $scope.posts = posts;                       //  << posts
        });


        //  Functions:

        // POST  POST  POST

        $scope.addPost = function() {


            postObject = $scope.flightsModel;       //  <<  OBJECT to POST  -- flightsModel

            postSvc.create(postObject).success(function () {
                console.log("Posting Successful")
            })
        }

    });

app.service('postSvc', function ($http) {

    this.fetch = function () {
        return $http.get('api/posts');                 //  $http.get() SERVICE  -- returns a PROMISE
    };
    this.create = function (post) {                     //  $http.post() SERVICE --  returns a PROMISE
        return $http.post('api/posts', post)
    };

});


