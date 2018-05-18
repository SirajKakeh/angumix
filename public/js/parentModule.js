var parentModule = angular.module('parentModule', ['ngRoute', 'mainPageModule', 'blogModule']);

parentModule.run(function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(e, next, prev, err) {
    if(err === "AUTH_REQUIRED") {
      $location.path("/login");
    }
    if(err === 'NOT_AUTHORIZED') {
      $location.path("/home");
    }
  })
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['parentModule']);
});