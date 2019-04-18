export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  //instead of when we use state
  //when route recognized execute this code
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      //nicknames controller
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
