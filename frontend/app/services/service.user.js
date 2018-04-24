(function() {
    'use strict'

    angular.module('users', [])
    
        .factory('UserService', UserService);


        UserService.$inject = ['$http'];
        function UserService( $http ) {

            var userService = {};
            userService.getAllContacts = getAllContacts;


            return userService;

            function getAllContacts( callback ) {
                $http.get('../../mock_data/contacts.json').then(function( response ) {
                                     
                    var contacts = response.data.contacts;
                    callback( null, contacts );

                }).catch(function( response ) {

                    callback('There was an error while fetching contacts.');
                    
                });
            }


        }

})();

