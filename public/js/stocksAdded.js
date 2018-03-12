console.log('hey stocks added.js')





app.controller('stocksController', ['$scope','$http', function($scope,$http){

	this.message= "we have a stocksController"
	this.formdata = {}
	console.log("this is formdata from stocks controller", this.formdata)
	this.stocksArray=[{companyName:"Microsoft", shares: 400, symbol: "MSFT"},{companyName: "Ford Motors", shares: 300, symbol: "F"}]
	this.portfoliosArray = [{portfolioName: "My Portfolio", portfolioId: 99},{portfolioName: "second portfolio", portfolioId: 100}]
	this.reportsArray = [{name: "daily"},{name: "monthly"},{name: "annually"}]
	this.companyName = ""


    
	$scope.report1 = "before get report"

	this.option1="APPL = Apple"
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
	this.addStockToList = function(){
		var that = this
		newStock = {companyName: "Apple", shares: 700, symbol: "APPL"}
		that.stocksArray.push(newStock)

	}
	this.getFinancialData = function(){
		var that = this
		$http({
			url: "https://sandbox.tradier.com/v1/",
			method: 'GET',
			data:this.formdata,
			headers: {
				authorization: "YA7LJZICP2KP4Q8T",
				accept: "application/json"
			}

		}).then(function(response){
			console.log("THIS IS RESPONSE FROM GET SYMBOL", response)

		})


	}
	$scope.getReport = function($scope){
		var that = this;

		console.log("THIS IS GETREPORT", this.report)
		 $scope.report1  = "Further, given that Apple's largest acquisition to date was about $3 billion for Beats in 2014, it's hard to see the company doling out the necessary funds to buy Snap. The social media company currently sports a market cap of $21.8 billion." 
	}


}])