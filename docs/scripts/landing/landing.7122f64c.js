'use strict';

angular.module('idistApp')
  .controller('LandingCtrl', function ($scope, $resource, $rootScope) {

  	$scope.initialize = function(){
	    $scope.infos =[
		    {text:'ceo@idist.ai', icon:'ion-ios-email'},
		    {text:'010.4084.0660', icon:'ion-ios-telephone'},
		    {text:'서울 중구 다산로 258 동대문리마크빌', icon:'ion-ios-location'}
	    ];
   	};
   	$scope.initialize();
  });
