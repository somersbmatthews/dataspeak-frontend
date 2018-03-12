console.log('hey stocks added.js')





app.controller('stocksController', ['$scope','$http', function($scope,$http){

	$scope.message= "we have a stocksController"
	$scope.formdata = {}
	console.log(	"$scope is formdata from stocks controller",	$scope.formdata)
	$scope.stocksArray=[{companyName:"Microsoft", shares: 400, symbol: "MSFT"},{companyName: "Ford Motors", shares: 300, symbol: "F"}]
	$scope.portfoliosArray = [{portfolioName: "My Portfolio", portfolioId: 99},{portfolioName: "second portfolio", portfolioId: 100}]
	$scope.reportsArray = [{name: "daily"},{name: "monthly"},{name: "annually"}]
	$scope.companyName = ""


    
	$scope.report = "before get report"

	$scope.option1="APPL = Apple"
	$scope.option2=""
	$scope.option3=""
	$scope.option4=""
	$scope.option5=""
	$scope.option6=""
	$scope.option7=""
	$scope.option8=""


	$scope.getSymbols= function(){
		var that =	$scope
		$http({
			url: "https://sandbox.tradier.com/v1/",
			method: 'GET',
			data:	$scope.formdata,
			headers: {
				authorization: "iZMPXbULMaePC93ctummgopf7qHG",
				accept: "application/json"
			}

		}).then(function(response){
			console.log(	"$scope IS RESPONSE FROM GET SYMBOL", response)

		})
	}
	$scope.addStockToList = function(){
		var that =	$scope
		newStock = {companyName: "Apple", shares: 700, symbol: "APPL"}
		that.stocksArray.push(newStock)

	}
	$scope.getFinancialData = function(){
		var that =	$scope
		$http({
			url: "https://sandbox.tradier.com/v1/",
			method: 'GET',
			data:	$scope.formdata,
			headers: {
				authorization: "YA7LJZICP2KP4Q8T",
				accept: "application/json"
			}

		}).then(function(response){
			console.log(	"$scope IS RESPONSE FROM GET SYMBOL", response)

		})


	}
	$scope.getReport = function(){
		

		console.log(	"$scope IS GETREPORT",	$scope.report)
			$scope.report  = "Further, given that Apple's largest acquisition to date was about $3 billion for Beats in 2014, it's hard to see the company doling out the necessary funds to buy Snap. The social media company currently sports a market cap of $21.8 billion." 
	}


}])