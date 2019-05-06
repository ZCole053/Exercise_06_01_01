
//exports out to index.module.js
export class NavbarController{
    //not default because we want to inject nav bar with services
    constructor($auth){
        'ngInject';
        //sets the current $auth to $auth
        this.$auth = $auth;
        this.isAuthenticated = $auth.isAuthenticated;
    }
    //logout method uses the current $suth object to call from the service a logout method
    logout(){
        this.$auth.logout();
    }

}