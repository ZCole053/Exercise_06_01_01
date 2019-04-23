// cleared out and made our own stuff
export class MainController {
  //passing angular http service
  constructor($http) {
    //key word ngInject 
    'ngInject';
// this object maincontroller set to http service
    this.$http = $http;
    this.getMessages();
  }

  postMessage(){
    //refers to current object that we post
    this.$http.post('http://localhost:8080/api/message', {
      msg: this.message
    });
  }

  //going into database to get messages
  getMessages(){
    var vm = this;
    //uses http get method
    this.$http.get('http://localhost:8080/api/message')//returns promises
    .then((result) => {
      //scope of angular message array
      vm.messages = result.data;
    });
  }
}
