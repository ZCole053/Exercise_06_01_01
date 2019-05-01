export class AuthController{
    constructor($auth){
        'ngInject';
        //gets put into the property of the object that is being constructed
        this.$auth = $auth;
    }
    register(){
        //grabs the current user object
        this.$auth.signup(this.user);
    }
}