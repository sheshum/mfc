angular.module('login', [])

.controller('LoginController', ['$rootScope', '$scope', '$location', 'AuthService', 'Socket', function( $rootScope, $scope, $location, AuthService, Socket ) {
    
    $scope.username = '';
    $scope.password = '';
    

    $scope.login = function() {
        var user = {
            username: $scope.username,
            pssword: $scope.password
        }
        AuthService.login( user, function( err ) {
            if( err ) {
                console.log( err );
            } else {
                $location.path(['/auth']);
            }
        });
       
       
    }


}]);



