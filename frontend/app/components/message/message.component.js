angular.module('message', [])

.component('appMessage', {
    bindings: {
        "msg": '<'
    },
    templateUrl: 'app/components/message/message.template.html',
    controller: ['AuthService', '$rootScope', function MessageController( AuthService, $rootScope ) {
       
        var self = this;
      
        this.$onInit = function() {
            
            //self.name = AuthService.loggedInUser.name;
            self.name = $rootScope.globals.currentUser.username;
            self.text = self.msg.text;

            if( self.msg.from === self.name ) {

                self.className = 'user';
                
            } else {
                self.className = 'contact';
            }
        }



    }]
})