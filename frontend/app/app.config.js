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
]);