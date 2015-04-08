'use strict';

angular.module('gotitAnswerApp')
    .factory('Question', ['$http', function ($http) {
    	var question = null;   
        return {  
        	set: function(q){                
                question = q;        
            },
            get: function(){                
                return question;
            },          
            getQuestion: function(params, success, error){
                return $http.get(GI_CONFIG.api_url + '/sequestion',
					$.param(params)
				).then(                        
					success,
					error
				);
            },
            skip: function(params, success, error){
                return $http.post(GI_CONFIG.api_url +'/sequestion/skip', 
                    $.param(params)
                ).then(
                	success,
                	error
                );
            },
            claim: function(params, success, error){
                return $http.post(GI_CONFIG.api_url +'/sequestion/claim', 
                    $.param(params)
                ).then(
                	success,
                	error
                );
            },
            answer: function(params, success, error){
                return $http.post(GI_CONFIG.api_url +'/sequestion/answer', 
                    $.param(params)
                ).then(
                	success,
                	error
                );
            }
        };
    }]);
