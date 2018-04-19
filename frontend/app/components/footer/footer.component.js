angular.module('footer', [])

.component('appFooter', {
    templateUrl: 'app/components/footer/footer.template.html',
    controller: ['AuthService', 'Socket', '$rootScope', function FooterController ( AuthService, Socket, $rootScope ) {
       
        this.message = '';

        this.onSend = function sendMessage() {
            
            Socket.emit('send_message', {
                //from: AuthService.loggedInUser.name,
                from: $rootScope.globals.currentUser.username,
                text: this.message
            })
            this.message = '';
        }
    }]
})