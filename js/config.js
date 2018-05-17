angular.module('tutorialWebApp')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      // Home
      .when("/", { templateUrl: "templates/home.html", controller: "PageCtrl" })
      // Pages
      .when("/about", { templateUrl: "templates/about.html", controller: "PageCtrl" })
      .when("/faq", { templateUrl: "templates/faq.html", controller: "PageCtrl" })
      .when("/pricing", { templateUrl: "templates/pricing.html", controller: "PageCtrl" })
      .when("/services", { templateUrl: "templates/services.html", controller: "PageCtrl" })
      .when("/contact", { templateUrl: "templates/contact.html", controller: "PageCtrl" })
      // Blog
      .when("/blog", { templateUrl: "templates/blog.html", controller: "BlogCtrl" })
      .when("/blog/post", { templateUrl: "templates/blog_item.html", controller: "BlogCtrl" })
      // else 404
      .otherwise("/404", { templateUrl: "templates/404.html", controller: "PageCtrl" });
      
    $locationProvider.html5Mode(true);
  }]);