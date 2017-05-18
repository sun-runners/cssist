'use strict';

// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

angular.module('idistApp')
  // Local Server
	.constant('ServerURL','http://127.0.0.1:8000/')

	// AWS Server
	// .constant('ServerURL','http://eb-instamall-app-dev.ap-northeast-2.elasticbeanstalk.com/')

	//  Server
	.constant('ModelUrl', 'Cssist')



	// CORE

	// Sign
	.factory('SignUpR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'SignUp/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('SignInR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'SignIn/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('TokenSignInR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'TokenSignIn/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// Change
	.factory('ChangePasswordR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'ChangePassword/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// Check
	.factory('CheckEmailR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'CheckEmail/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// Field
	.factory('FieldR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'Field/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('FieldBasicR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'Field/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// Team
	.factory('TeamR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'Team/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('TeamBasicR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'Team/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// User
	.factory('UserR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'User/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('UserBasicR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'User/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// FieldMembership
	.factory('FieldMembershipR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'FieldMembership/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('FieldMembershipBasicR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'FieldMembership/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// User
	.factory('TeamMembershipR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'TeamMembership/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('TeamMembershipBasicR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'TeamMembership/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

	// User
	.factory('FollowR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'Follow/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('FollowBasicR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'Follow/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })



	// PLANIST

	// UserProfile
	.factory('UserProfileR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+ModelUrl+'UserProfile/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
	.factory('UserProfileBasicR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+ModelUrl+'UserProfileBasic/:id/',{id: '@id'},{'update': { method:'PATCH'}}); });
