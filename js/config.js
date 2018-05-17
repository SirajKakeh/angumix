angular.module('angumix')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      // Home
      .when("/", { template: `<home></home>` })
      // Pages
      .when("/about", { template: `<about></about>` })
      .when("/faq", { template: `<faq></faq>` })
      .when("/pricing", { template: `<pricing></pricing>` })
      .when("/services", { template: `<services></services>` })
      .when("/contact", { template: `<contact></contact>` })
      // Blog
      .when("/blog", { template: `<blog></blog>` })
      .when("/blog/post", { template: `<blog-item></blog-item>` })
      // else 404
      .otherwise("/error", { template: `<wrong-route></wrong-route>` })

    $locationProvider.html5Mode(true);
  }]);