angular.module('Socket', [])

.factory('Socket', function  ( $rootScope ) {

    
    var socket = io.connect();
    return {

        connect: function( callback ) {
            socket = io.connect();
                $rootScope.$apply(function() {
                    callback.apply();
                });
        }, 
        on: function( eventName, callback ) {
            socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply( socket, args );
                });
            });
        },
        emit: function( eventName, data, callback ) {
            socket.emit( eventName, data, function(){
                var args = arguments;
                $rootScope.$apply(function() {
                    if( callback ) {
                        callback.apply( socket, args );
                    }
                })
            });
        },
        disconnect: function() {
            socket.disconnect();
        } 
    }
});