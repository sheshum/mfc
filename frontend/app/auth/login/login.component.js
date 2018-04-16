angular.module('login', [])

.controller('LoginController', ['$rootScope', '$scope', '$location', 'AuthService', 'Socket', function( $rootScope, $scope, $location, AuthService, Socket ) {
    $scope.user = {
        username: '',
        password: ''
    }

    $scope.login = function() {
        var user = $scope.user;
        AuthService.login( user, function( err ) {
            if( err ) {
                console.log( err );
            } else {
                $location.path(['/auth']);
            }
        });
       
       
    }


}]);



