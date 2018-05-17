angular.module('mainPageModule')
  .config(['$routeProvider', '$locationProvider', mainConfig]);

function mainConfig($routeProvider, $locationProvider) {
  var routeResolvers = {
    loggedIn: function (auth) {
      console.log('auth on login:', auth);
      return auth.requireLogin();
    },
    waitForAuth: function (auth) {
      return auth.waitForAuth();
    },
    pricePlans: function (sessions, auth) {
      return auth.requireLogin().then(function () {
        return sessions.getAllSessions();
      });
    }
  }
  
  $routeProvider
    // Home
    .when("/", {
      template: `<home></home>`,
      resolve: {
        login: routeResolvers.loggedIn,
      }
    })
    // Pages
    .when("/about", { template: `<about></about>` })
    .when("/faq", { template: `<faq></faq>` })
    .when("/pricing", {
      template: `<pricing prices="$resolve.prices"></pricing>`,
      resolve: {
        prices: routeResolvers.pricePlans
      }
    })
    .when("/services", { template: `<services></services>` })
    .when("/contact", { template: `<contact></contact>` })
    .when("/error", { template: `<wrong-route></wrong-route>` })
    // else 404
    .otherwise({
      redirectTo: '/error'
    });

  $locationProvider.html5Mode(true);

}