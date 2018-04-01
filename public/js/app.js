
const app = angular.module('dataspeak', [])

app.controller('mainController', [ '$scope','$http', function($http, $scope){

	// test.testfunc()

	// $http({
	// 	method: 'GET',
	// 	url: 'http://localhost:3000/users'
	// }).then((response)=>{
	// 	this.notices = response.data
	// 	console.log(response)
	// }).then((error)=>{
	// 	console.log(error)
	// })

	let isLoggedIn = false
	$scope.message = "we have a controller"
	$scope.formdata = {};
	console.log('this is formdata', this.formdata)



	// this.includePath = 'partials/Login.html';
	this.includePath = 'partials/LoggedIn.html';


	$scope.triggerLoggedIn = function() {
		var that = this
		isLoggedIn = true
		console.log("THIS IS LOGGED IN",isLoggedIn)
		that.includePath = 'partials/LoggedIn.html'
	}

	$scope.processRegistrationForm = function() {
		var that = this
		$http({
			url: 'http://localhost:3000/users/',
			method: 'POST',
			data: that.formdata
		}).then(function(response){
			console.log
			that.formdata = {};
			if(response.data.status === 404) {
				that.loginError = response.data.message
			} else {
				that.triggerLoggedIn()
			}
		})
	}
	$scope.processLoginForm = function(){
		var that = this
		$http({
			url: 'http://localhost:3000/users/login',
			method: 'POST',
			data: that.formdata
		}).then(function(response){
			that.formdata = {};
			if(response.data.status === 404) {
				that.loginError = response.data.message
			} else {
				that.triggerLoggedIn()
			}
		}).then(()=>{
			$scope.formdata = {};
		})
	}

	$scope.register = function(){

		that.includePath = 'partials/Registration.html'
	}

}])
