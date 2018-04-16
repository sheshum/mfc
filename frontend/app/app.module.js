angular.module('mfc-app', [
    'sidebar',
    'messages',
    'message', 
    'footer', 
    'header',
    'login',
    'signup',
    'Socket',
    'ngRoute'
])

.component('appRoot', {
    templateUrl: 'app/app.template.html',
    controller: ['Socket', function RootController( Socket ) {
      
            //Socket.connect();
           
        
    }]
})

.factory('AuthService', ['$http', '$rootScope', '$timeout', function authServiceFactory( $http, $rootScope, $timeout ) {
    
    var authService = {};

    authService.login = function ( user, callback ) {

        authService.loggedInUser = {
            name: user.username
        };


        $timeout(function(){
            var response = { success: user.username === 'test' && user.password === 'test'};
            if(!response.success){
                response.message = 'Username or password is incorect';
            }

            callback( response );

        }, 1000);

        //return $http.get('/login', { username: username, password: password });


    }

    authService.getName = function() {
        return this.loggedInUser.name;
    }



    return authService;

}]);