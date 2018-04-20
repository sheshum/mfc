angular.module('header', [])

.component('appHeader', {
    templateUrl: 'app/components/header/header.template.html',
    controller: ['$location', 'Socket', 'AuthService', function HeaderController( $location, Socket, AuthService ) {
        
        this.logout = function() {
            AuthService.logout(function(){
                
                $location.path(['/']);
            })
            //Socket.disconnect();
        }
    }]
})