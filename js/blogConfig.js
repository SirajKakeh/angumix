angular.module('blogModule')
  .config(['$routeProvider', blogconfig]);

function blogconfig($routeProvider) {
  $routeProvider
    .when("/blog", { template: `<blog></blog>` })
    .when("/blog/post", { template: `<blog-item></blog-item>` });
}
