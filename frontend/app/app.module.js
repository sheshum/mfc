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


// OVO IZBACITI KAD  ODLUCIM STA CU SA SOCKET KONEKCIJOM
.component('appRoot', {
    templateUrl: 'app/app.template.html',
    controller: ['Socket', function RootController( Socket ) {
      
            //Socket.connect();
           
        
    }]
})

.factory('AuthService', ['$http', '$rootScope', '$timeout', function authServiceFactory( $http, $rootScope, $timeout ) {
    
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

            console.log('Response front end:' , response.data);
            //PODACI O KORISNIKU  U RAM-u
            //treba da ima i token
            authService.loggedInUser = {
                name: response.username
            };

            callback();

        }).catch(function( err ){
            callback(err.data.errmsg);
        });

    }

    authService.getName = function() {
        return this.loggedInUser.name;
    }



    return authService;

}]);