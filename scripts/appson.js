'use strict';

angular.module('confusionApp', [])

.controller('DishDetailController', ['$scope', function ($scope) {

    $scope.dish = {
        name: 'Uthapizza',
        image: 'images/uthapizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
                               },
            {
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
                               },
            {
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
                               },
            {
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
                               },
            {
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "25 Cent",
                date: "2011-12-02T17:57:28.556094Z"
                               }

                           ]
    };
   

        }])



     .controller('DishCommentController', ['$scope', function ($scope) {
			   $scope.myrate = '5';
               $scope.mydate = new Date().toISOString();
			    //Step 1: Create a JavaScript object to hold the comment from the form
			    //var usercomment = new Object();
                
			    $scope.submitComment = function () {
                    var usercomment = new Object();
                
			        usercomment.rating = parseInt($scope.myrate);
			        usercomment.comment = $scope.mycomment;
			        $scope.mycomment='';
			        usercomment.author = $scope.myname;
			        $scope.myname='';
			        //Step 2: This is how you record the date
			        //"The date property of your JavaScript object holding the comment" = new Date().toISOString();
                     usercomment.date = new Date().toISOString();
			        // Step 3: Push your comment into the dish's comment array
			        $scope.dish.comments.push(usercomment);
			        //Step 4: reset your form to pristine
			        $scope.CommentFormname.$setPristine();
                    $scope.myrate='5';
			        //Step 5: reset your JavaScript object that holds your comment
			       // this.usercomment = new Object();
    };
			    
        }])

        // .controller('DishCommentController', ['$scope', function($scope) {
            
            
        //     $scope.submitComment = function () {
           
        //         $scope.dish.comments.push($scope.comment);
        //         $scope.usercomment = {author: "", rating: 5, comment: "", date: new Date().toISOString()};
                
        //     };
        // }])
