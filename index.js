// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName (){
	customerName = customerName.toUpperCase(); 
	return customerName;
}

function setBestCustomer(){
	bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
	bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'ken';

function changeLeastFavoriteCustomer(){
	leastFavoriteCustomer = 'cate';
}