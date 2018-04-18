angular.module('footer', [])

.component('appFooter', {
    templateUrl: 'app/components/footer/footer.template.html',
    controller: ['AuthService', 'Socket', function FooterController ( AuthService, Socket ) {
       
        this.message = '';

        this.onSend = function sendMessage() {
            
            Socket.emit('send_message', {
                from: AuthService.loggedInUser.name,
                text: this.message
            })
            this.message = '';
        }
    }]
})