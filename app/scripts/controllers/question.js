'use strict';

angular.module('gotitAnswerApp')
    .controller('QuestionCtrl', ['$scope', '$location', '$upload', 'Question', function ($scope, $location, $upload, Question)  {                      
        console.log("jump in question");
        	
        $scope.uploading = false;
        $scope.question = Question.get();
        $scope.answer_body = "";
        $scope.attachment = false;
        $scope.files = null;
        
        if(!$scope.question) {
        	// back to main
        	$location.path("/");
        }
        
        $scope.$watch('uploading', function () {
			if($scope.uploading) {
				$('#modalPosting').modal({
					backdrop: 'static'
				  })
			} else {
				$('#modalPosting').modal("hide");
			}
		});
        
        $scope.changeFile = function() {
        	if ($scope.files && $scope.files.length) {
        		$scope.attachment = true;
        	} else {
        		$scope.attachment = false;
        	}
        };
        
        $scope.upload = function () {
        	var files = $scope.files;
			if (files && files.length) {
				$scope.uploading = true;
				var file = files[0];
				$upload.upload({
					url: GI_CONFIG.api_url + '/sequestion/answer',
					fields: {
								'qid': $scope.question.qid,
								'body': $scope.answer_body
							},
					file: file
				}).progress(function (evt) {
					var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
					console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
				}).success(function (data, status, headers, config) {
					console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
					$location.path("/");
				}).error(function (data, status, headers, config) {
					console.log("upload error");
					$location.path("/");
				});
			} else {
				// no image, normal post
				$scope.uploading = true;
				Question.answer(
					{
						'qid': $scope.question.qid,
						'body': $scope.answer_body
					},
					function(response) {
						console.log("post success");
						$location.path("/");
					},
					function(error) {
						console.log("error");
						$location.path("/");
					}
				);
			}
		}
    }]);
