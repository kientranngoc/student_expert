<?php

function parseRequestHeaders() {
    $headers = array();
    foreach($_SERVER as $key => $value) {
        if (substr($key, 0, 5) <> 'HTTP_') {
            continue;
        }
        $header = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($key, 5)))));
        $headers[$header] = $value;
    }
    return $headers;
}
$headers = parseRequestHeaders();
$authenKey = isset($headers["Authorization"])?$headers["Authorization"]:"";
$authenKey = "RWAoBKENRBBgY0YuTG2z3nZMoYDsdjHxIQAfqXMf";
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="gotitAnswerApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="gotitAnswerApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="gotitAnswerApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="gotitAnswerApp" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Gotit Answer App</title>
  	<meta name="description" content="Web view included in GotIt app">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<script type="text/javascript">                        
		var GI_CONFIG = {
			authKey : "<?= $authenKey ?>",
			api_url : "http://api.tutoruniverse.net",
			clientVersion : "1.9.0",
			clientInfo : 10
		};
	</script>
	    <!-- CSS Global -->  
    <link href="/css/style.css" rel="stylesheet">

    <!-- Plugins -->
    <!-- Override plugins' css attributes -->
    <link href="/css/plugins.css" rel="stylesheet">
</head>
<body>
	<div ng-view></div>
	<script src="bower_components/jquery/jquery.js"></script>
    <script src="bower_components/jquery/jquery-migrate.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>	
    <script src="bower_components/angular/angular.js"></script>
	<script src="bower_components/angular-route/angular-route.js"></script>
	<script src="bower_components/ng-file-upload/angular-file-upload.js"></script>
	<script src="scripts/app.js"></script>
	<script src="scripts/services/question.js"></script>
	<script src="scripts/controllers/main.js"></script>
	<script src="scripts/controllers/question.js"></script>
</body>
</html>