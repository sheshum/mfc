angular.module('message', [])

.component('appMessage', {
    bindings: {
        "msg": '<'
    },
    templateUrl: 'app/components/message/message.template.html',
    controller: ['AuthService', function MessageController( AuthService ) {
       
        var self = this;
      
        this.$onInit = function() {
            
            self.name = AuthService.getName()
            self.text = self.msg.text;

            if( self.msg.from === self.name ) {

                self.className = 'user';
                
            } else {
                self.className = 'contact';
            }
        }



    }]
})