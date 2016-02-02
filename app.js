var app = angular.module('myApp', [])
	app.controller('inspireController', ['$scope', function($scope){

		console.log('hello')
		$scope.quotes = [
			{
				author: "H. Jackson Brown, Jr.",
				text: "The best preparation for tomorrow is doing your best today.",
			},
			{
				author: "Salvador Dali",
				text: "Intelligence without ambition is a bird without wings.",
			},
			{
				author: "Lao Tzu",
				text: "When you realize nothing is lacking, the whole world belongs to you.",
			},
		]

		$scope.addQuote = function(event){

		}


	}]);