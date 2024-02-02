(function(){

	var myApp = angular.module('myApp', ['ui.bootstrap']);

	myApp.controller('myCtrl', ['$scope', function($scope){
		$scope.artists = [
		{
			"name":"Jordan Snyder",
			"shortname":"jordan_snyder",
			"typeofmusic":"Electro",
			"bio":"this is the bio of Jordan"
		},
		{
			"name":"Kelly Butler",
			"shortname":"kelly_butler",
			"typeofmusic":"Jazz",
			"bio":"this is the bio of Kelly"
		},
		{
			"name":"Noelle Holland",
			"shortname":"noelle_holland",
			"typeofmusic":"Rock",
			"bio":"this is the bio of Noelle"
		},
		{
			"name":"Ron Lawson",
			"shortname":"ron_lawson",
			"typeofmusic":"House",
			"bio":"this is the bio of Ron"
		},
		{
			"name":"Clarence Morgan",
			"shortname":"clarence_morgan",
			"typeofmusic":"Classic",
			"bio":"this is the bio of Clarence"
		}
	]
	}]);

})();