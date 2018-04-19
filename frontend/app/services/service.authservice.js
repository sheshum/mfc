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

        function signup() {

        }

        function login() {

        }

        function logout() {

        }

        function setCredentials() {

        }

        function clearCredentials() {

        }


    }


})();