var app = angular.module('myApp', [])
	app.controller('inspireController', ['$scope', '$timeout', function($scope, $timeout){

		console.log('hello')
		$scope.randomQ = {}
		$scope.quotes = [
			{
				author: "H. Jackson Brown, Jr.",
				text: "The best preparation for tomorrow is doing your best today.",
				rating: 0,
			},
			{
				author: "Salvador Dali",
				text: "Intelligence without ambition is a bird without wings.",
				rating: 0,
			},
			{
				author: "Lao Tzu",
				text: "When you realize nothing is lacking, the whole world belongs to you.",
				rating: 0,
			},
			{
				author: "Dr. Wayne Dyer",
				text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.",
				rating: 0,
			},
		]

		$scope.addQuote = function(event){
			var newQuote = {
				author: $scope.addAuthor,
				text: $scope.addText,
			}
			$scope.quotes.push(newQuote)
			event.preventDefault();
			$scope.addAuthor = ''
			$scope.addText = ''
		}

		var sort = function(){$scope.quotes.sort(function(a, b){
			return b.rating - a.rating
			});
		}
		//------------ ratings ---------------
		$scope.addRating = function(index){
			if($scope.quotes[index].rating < 5){
				$scope.quotes[index].rating += 1
			}
			sort()
		}
		$scope.subtractRating = function(index){
			if($scope.quotes[index].rating > 0){
			$scope.quotes[index].rating -= 1
			}
		}
		//----------- end ratings -------------

		$scope.removeQuote = function(index){
			$scope.quotes.splice(index, 1)
		}

		$scope.random = function(event){
			 var pick = Math.floor(Math.random() * $scope.quotes.length)
			 $scope.randomQ = $scope.quotes[pick]
			 $scope.showPopup = true;
		}

		$scope.closePop = function(){
			$scope.showPopup = false;
			randomQ = {}
		}


	}]);