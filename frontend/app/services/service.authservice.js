(function(){
    'use strict';

    angular.module('mfc-app')
    .factory('AuthService', AuthService);

    AuthService.$inject = ['$http', '$rootScope', '$cookies'];

    function AuthService( $http, $rootScope, $cookies ) {

        var authService = {};
        authService.signup = signup;
        authService.login = login;
        authService.logout = logout;
        authService.setCredentials = setCredentials;
        authService.clearCredentials = clearCredentials;
        
        return authService;

        function signup( user, callback ) {
            $http.post('/api/signup', { user }).then(function( response ){

                callback(null, response );
    
            }).catch(function( err ){
    
                callback( err.statusText );
    
            });
        }

        function login( user, callback ) {
            $http.post('/api/login', { user } ).then(function( response ){

                var _username = response.data.user.username;
                var _token = response.data.token;
                var _expiresIn = response.data.expiresIn;

                 $rootScope.globals = {
                     currentUser : {
                         username: _username,
                         token: _token
                     }
                 };
                 
                 setCredentials( _username, _token );
   
                 callback();
     
             }).catch(function( err ){
                 callback(err);
             });
        }


        function logout( callback ) {
            clearCredentials();
            callback();
        }

        function setCredentials( username, token ) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + token;
            
            var cookieExp = new Date();
            var miliseconds = cookieExp.getUTCMilliseconds();
            cookieExp.setUTCMilliseconds(miliseconds + 720000);

            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
        }

        function clearCredentials() {
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common['Authorization'] = 'Basic';
        }


    }


})();