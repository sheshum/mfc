angular.module('messages', [])

.component('appMessages', {
    templateUrl: 'app/components/messages/messages.template.html',
    controller: ['$rootScope', 'Socket', function MessagesController( $rootScope,  Socket ){

        var self = this;
        self.messages = [];
        self.className = '';
       
      
        Socket.on('new_message', function( message ) {    
            self.messages.push(message);
        });
 
    }]
})