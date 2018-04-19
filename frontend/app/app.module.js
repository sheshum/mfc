angular.module('mfc-app', [
    'sidebar',
    'messages',
    'message', 
    'footer', 
    'header',
    'login',
    'signup',
    'Socket',
    'ngRoute',
    'ngCookies'
])


.factory('AuthService', ['$http', '$rootScope', '$cookies', function authServiceFactory( $http, $rootScope, $cookies ) {
    
    var authService = {};
   
    authService.signup = function( user , callback ) {
        $http.post('/api/signup', { user }).then(function( response ){

            callback(null, response );

        }).catch(function( err ){

            callback( err.statusText );

        });
       
    }

    authService.login = function ( user, callback ) {

        $http.post('/api/login', { user } ).then(function( response ){

           /*  authService.loggedInUser = {
                name: response.data.user.username,
                token: response.data.token
            }; */

            $rootScope.globals = {
                currentUser : {
                    username: response.data.user.username,
                    token: response.data.token
                }
            };

            //window.sessionStorage.setItem('token', response.data.token);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + response.data.token;
            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 1);
            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
            

            callback();

        }).catch(function( err ){
            callback(err);
        });

    }


    return authService;

}]);