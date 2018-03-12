console.log('hey')

const app = angular.module('dataspeak', [])


app.controller('mainController', [ '$http', function($http){

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
	this.message = "we have a controller"
	this.formdata = {};
	console.log('this is formdata', this.formdata)



	// this.includePath = 'partials/LoginPartial.html';
	this.includePath = 'partials/LoggedInPartial.html';


	this.triggerLoggedIn = function() {
		isLoggedIn = true
		console.log("THIS IS LOGGED IN",isLoggedIn)
		this.includePath = 'partials/LoggedInPartial.html'
	}

	this.processRegistrationForm = function() {
		var that = this
		$http({
			url: 'http://localhost:3000/users/',
			method: 'POST',
			data: this.formdata
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
	this.processLoginForm = function(){
		var that = this
		$http({
			url: 'http://localhost:3000/users/login',
			method: 'POST',
			data: this.formdata
		}).then(function(response){
			that.formdata = {};
			if(response.data.status === 404) {
				that.loginError = response.data.message
			} else {
				that.triggerLoggedIn()
			}
		}).then(()=>{
			this.formdata = {};
		})
	}

	this.register = function(){

		this.includePath = 'partials/RegistrationPartial.html'
	}

}])
