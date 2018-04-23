angular.module('header', [])

.component('appHeader', {
    templateUrl: 'app/components/header/header.template.html',
    controller: ['$location', '$rootScope', 'AuthService', function HeaderController( $location, $rootScope, AuthService ) {
        
        var self = this;
        self.username = $rootScope.globals.currentUser.username;
        
        self.logout = function() {
            AuthService.logout(function(){
                
                $location.path(['/']);
            });
        }
    }]
})