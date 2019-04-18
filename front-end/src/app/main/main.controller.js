// cleared out and made our own stuff
export class MainController {
  constructor($http) {
    'ngInject';
// this object maincontroller set to http service
    this.$http = $http;
  }

  postMessage(){
    //refers to current object that we post
    this.$http.post('http://localhost:8080/api/message', {
      msg: this.message
    });
  }
}
