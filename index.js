angular.module('internationalization', ['tmh.dynamicLocale','ngMaterial', 'ngMessages'])
.controller('demo', function(tmhDynamicLocale, $scope){
	
	// $locale.localeID= 'en_IN';
	// $locale.id='en-in';
	// console.log($locale);
	// $scope.date=new Date(1288323623006);
	$scope.clickedIndia= function(){
		tmhDynamicLocale.set('en-in');
	};

	$scope.clickedGermany= function(){
		tmhDynamicLocale.set('de-de');
	};

	$scope.clickedSpain= function(){
		tmhDynamicLocale.set('eu-es');
	};
});