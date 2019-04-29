export class AuthController{
    constructor($auth){
        'ngInject';
        //gets put into the property of the object that is being constructed
        this.$auth = $auth;
    }
    register(){
        
        this.$auth.signup({email: 'dylancant@code.com'});
    }
}