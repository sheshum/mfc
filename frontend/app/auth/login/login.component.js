angular.module('login', [])

.controller('LoginController', ['$rootScope', '$scope', '$location', 'AuthService', 'Socket', function( $rootScope, $scope, $location, AuthService, Socket ) {
    
    $scope.username = '';
    $scope.password = '';
    
    $scope.showAlert = false;
    $scope.message = null;
    $scope.error = false;

    $scope.login = function() {
        var user = {
            username: $scope.username,
            password: $scope.password
        }
        AuthService.login( user, function( err ) {
      
            if( err ) {
                $scope.error = true;
                $scope.showAlert = true;
                $scope.message = err.data.errmsg;
              
            } else {
                $scope.error = false;
                $location.path(['/auth']);
            }
        });
       
       
    }


}]);



