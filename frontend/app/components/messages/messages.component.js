angular.module('messages', [])

.component('appMessages', {
    templateUrl: 'app/components/messages/messages.template.html',
    controller: ['$rootScope', 'Socket', function MessagesController( $rootScope,  Socket ){

        var self = this;
        self.messages = [];
        self.className = '';
        self.showImage = true;
       
      
        Socket.on('new_message', function( message ) {

            var length = self.messages.length;

            if( length > 0 ) {

                var lastMessage = self.messages[length - 1];
                if( lastMessage.from === message.from ) self.showImage = false;
                else self.showImage = true;

            } else {
                self.showImage = true;
            }
            self.messages.push( message );
            
            scrollToBottom();
        });


        function scrollToBottom() {
          
            var msg_list = $('.msg-list');
           
            
            var client_Height = msg_list.prop('clientHeight');
            var scroll_Top = msg_list.prop('scrollTop');
            var scroll_Height = msg_list.prop('scrollHeight');
            
           /*  if( client_Height + scroll_Top + last_messageHeight + secondToLastHeight >= scroll_Height ) {

            } */
        
          msg_list.scrollTop(scroll_Height);
          /* msg_list.animate({
              scroll_Top: scroll_Height
          }, 'slow'); */


        }
 
    }]
})