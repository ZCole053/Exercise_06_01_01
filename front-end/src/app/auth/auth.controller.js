export class AuthController{
    constructor($auth){
        'ngInject';
        //gets put into the property of the object that is being constructed
        this.$auth = $auth;
    }
    register(){
        var vm = this;
        //grabs the current user object
        this.$auth.signup(this.user)
        //can return promise
        .then(function(token) {
            //grabs current object and holds it for later use
            vm.$auth.setToken(token);
        });
    }

    login(){
        var vm = this;
        this.$auth.login(this.login.user)
        .then(function(token){
            vm.$auth.setToken(token);
        });
    }
}