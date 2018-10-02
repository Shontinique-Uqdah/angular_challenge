angular.module('challenge', ['ngAnimate', 'ui.bootstrap']);

angular.module('challenge')
.controller('Users', function($scope, $http) {
    $http.get('http://localhost:8080/user').
        then(function(response) {
            $scope.users = response.data;
        });
    
    $scope.status = {
    	    isFirstOpen: true,
    	    isFirstDisabled: false
    	  };
});
