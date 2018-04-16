angular.module('signup', [])

.component('appSignup', {
    templateUrl: 'app/auth/signup/signup.template.html',
    controller: [function SignupController() {
        this.test = 'test';
    }]
})