// app / module 
 var app = angular.module("myApp", [])  

// controller
app.controller('ValidationCtrl', function($scope) {  
	// validation passed
	$scope.pass = function() {  
		if ($scope.checkout_form.$valid) {  
			alert("Form is Valid..!!")  
		}  
	}  
})    