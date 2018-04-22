angular.module('messages', [])

.component('appMessages', {
    templateUrl: 'app/components/messages/messages.template.html',
    controller: ['$rootScope', 'Socket', function MessagesController( $rootScope,  Socket ){

        var self = this;
        self.messages = [];
        self.className = '';
       
      
        Socket.on('new_message', function( message ) {    
            self.messages.push(message);
            scrollToBottom();
           /*  $('html, body, .chat__main').animate({
                scrollTop: document.body.scrollHeight
            }, 'fast'); */
        });


        function scrollToBottom() {
          
            var msg_list = $('.msg-list');
           
            
            var client_Height = msg_list.prop('clientHeight');
            var scroll_Top = msg_list.prop('scrollTop');
            var scroll_Height = msg_list.prop('scrollHeight');
            
           /*  if( client_Height + scroll_Top + last_messageHeight + secondToLastHeight >= scroll_Height ) {

            } */
        
          msg_list.scrollTop(scroll_Height);
          msg_list.animate({
              scroll_Top: scroll_Height
          }, 'slow');


        }
 
    }]
})