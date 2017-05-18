'use strict';

angular.module("idistApp")
	.service('stateS', function($state, $window, $rootScope, $timeout, $filter){

    // Go Function Section
  	this.go = function (page, params, $event){
			// 페이지가 없으면 실행하지 않는다
      if(!page) return false;
			var notify = true;
			if(params&&_.isBoolean(params.reload)) notify = params.reload;
			// Ctrl 키가 눌렸을 때
      if($event&&$event.ctrlKey){
  			var url = $state.href(page, params, {absolute: true, notify:notify});
  			window.open(url,'_blank');
				return true;
  		}
			// Shift 키가 눌렸을 때
  		else if($event&&$event.shiftKey){
  			var url = $state.href(page, params, {absolute: true, notify:notify}, '_blank');
  			window.open(url,'_blank');
				return true;
  		}
			// 평범할 때
  		else{
  			$state.go(page, params, {notify:notify});
				return true;
  		}
  	};

		// Go Function Section
		this.goBack = function (){
			if($state.get($state.fromState.name)){ $window.history.back(); }
			else{ this.go('landing'); }
		};

		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			var self = this;
			$state.toState = toState;
			$state.toParams = toParams;
			$state.fromState = fromState;
			$state.fromParams = fromParams;
	  });

  });
