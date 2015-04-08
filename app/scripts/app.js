'use strict';

// Declare app level module which depends on views, and components
angular.module('gotitAnswerApp', [
  'ngRoute',
  'angularFileUpload'
]).
config(['$routeProvider', "$httpProvider", function($routeProvider, $httpProvider) {
  $routeProvider
	.when('/', {
		templateUrl: '/views/main.html',
		controller: 'MainCtrl'
	})
	.when('/question/', {
		templateUrl: '/views/question.html',
		controller: 'QuestionCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	
	
	$httpProvider.defaults.headers.common = {
		Authorization: GI_CONFIG.authKey,
		TUClientPlatform: GI_CONFIG.clientInfo,
		TUClientVersion: GI_CONFIG.clientVersion
	}; 
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
}]);