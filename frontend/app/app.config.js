angular.module('mfc-app')
.config(['$locationProvider', '$routeProvider', function config( $locationProvider, $routeProvider ) {

            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/login', {
                    templateUrl: 'app/auth/login/login.template.html'
                })
                .when('/signup', {
                    templateUrl: 'app/auth/signup/signup.template.html'
                })
                .when('/auth', {
                    templateUrl: 'app/app.template.html'
                })
                .otherwise('/login')           

    }   
])
.run(['$rootScope', '$location', '$cookies', '$http', function run( $rootScope, $location, $cookies, $http ) {

    $rootScope.globals = $cookies.getObject('globals') || {};

    if( $rootScope.globals.currentUser ) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.token;
    }


    $rootScope.$on('$locationChangeStart', function( event, next, current ) {
        
        var restrictedPage = $.inArray($location.path(), ['/login', '/signup']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if( restrictedPage && !loggedIn ) {
            $location.path('/login');
        } 

    });


}]);