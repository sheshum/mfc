angular.module('header', [])

.component('appHeader', {
    templateUrl: 'app/components/header/header.template.html',
    controller: ['$location', 'Socket', function HeaderController( $location, Socket ) {
        
        this.logout = function() {
            $location.path(['/']);
            Socket.disconnect();
        }
    }]
})