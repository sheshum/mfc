angular.module('signup', [])

.controller('SignupController', 
['$scope', '$http', 'AuthService', '$location', function( $scope, $http, AuthService, $location ){
    $scope.user =  {
        fullName: '',
        username: '',
        password: ''
    };

    $scope.signup = function () {
       
        var user = $scope.user;

        AuthService.signup( user , function( err, userData ){
            if( err ) {
                console.log('Error: ', err );
            } else {
                console.log('User data:', userData );

                $location.path(['/login']);

            }
        });

      
    };


}]);
