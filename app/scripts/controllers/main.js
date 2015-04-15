'use strict';

angular.module('gotitAnswerApp')
    .controller('MainCtrl', ['$scope', '$route', '$location', 'Question', function ($scope, $route, $location, Question)  {                      
        console.log("jump in main");
        
        $scope.state = 0; // loading
        
        $scope.question = Question.get();
        
        // load question
        
        Question.getQuestion(
        	{},
        	function(response) {
        		Question.set(response.data.question);
        		$scope.question = Question.get();
        		console.log($scope.question);
        		$scope.state = 1; // load successfully
        	},
        	function(error) {
        		$scope.state = -1; // load fail
        	}
        ); 
        
        $scope.skip = function() {
        	console.log("skip");
        	Question.skip(
        		{qid:$scope.question.qid},
        		function(response) {
        			$route.reload();
        		},
        		function(error) {
        			console.log("skip error");
        			$route.reload();
        		}
        	);
        };
        
        $scope.answer = function() {
        	console.log("claim");
        	Question.claim(
        		{qid:$scope.question.qid},
        		function(response) {
        			$location.path('/question');
        		},
        		function(error) {
        			console.log("claim error");
        			$location.path('/question');
        		}
        	);
        }     
        
    }]);
