console.log('hey stocks added.js')





app.controller('stocksController', ['$http', function($http){

	this.message= "we have a stocksController"
	this.formdata = {}
	console.log("this is formdata from stocks controller", this.formdata)
	this.stocksArray=[{companyName:"Microsoft", shares: 400, symbol: "MSFT"},{companyName: "Apple", shares: 300, symbol: "APPL"}]

	this.option1="fake option"
	this.option2=""
	this.option3=""
	this.option4=""
	this.option5=""
	this.option6=""
	this.option7=""
	this.option8=""

	this.getSymbols= function(){
		var that = this
		$http({
			url: "https://sandbox.tradier.com/v1/",
			method: 'GET',
			data:this.formdata,
			headers: {
				authorization: "iZMPXbULMaePC93ctummgopf7qHG",
				accept: "application/json"
			}

		}).then(function(response){
			console.log("THIS IS RESPONSE FROM GET SYMBOL", response)
		})
	}

}])