angular.module('sidebar', [])

.component('sidebarApp', {
    templateUrl: 'app/components/sidebar/sidebar.template.html',
    controller: ['UserService', function SidebarController( UserService ) {

        var self = this;
        self.show = 'contacts'
        self.query = '';
        self.contacts = [];


        self.$onInit = function() {
        
            self.contacts = UserService.getAllContacts(function( err, contacts ) {
                    if( err ) {
                        console.log( err );
                    } else {
                        self.contacts = contacts;
                    }
            });

        }
        

    }]
})