angular.module('mainPageModule')
  .config(['$routeProvider', '$locationProvider', mainConfig]);

function mainConfig($routeProvider, $locationProvider) {
  var routeResolvers = {
    loggedIn: function (authService) {
      return authService.requireLogin();
    },
    waitForAuth: function (authService) {
      return authService.waitForAuth();
    },
    requireAdmin: function (authService) {
      return authService.requireAdmin();
    },
    userSessions: function (sessions, currentIdentity, authService) {
      return authService.requireLogin().then(function () {
        return sessions.getSessionsByUser(currentIdentity.currentUser.id);
      });
    },
    allSessions: function (sessions, authService) {
      return authService.requireLogin().then(function () {
        return sessions.getAllSessions();
      });
    },
    allUsers: function (users, authService) {
      return authService.requireLogin().then(function () {
        return users.getAllUsers();
      });
    }
  }

  $routeProvider
    // Home
    .when("/home", {
      redirectTo: '/'
    })
    .when("/", {
      template: `<home></home>`,
      resolve: {
        login: routeResolvers.loggedIn,
      }
    })
    // Pages
    .when("/about", { template: `<about></about>` })
    .when("/login", {
      template: `<login></login>`,
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .when("/faq", { template: `<faq></faq>` })
    .when("/pricing", { template: `<pricing prices="$resolve.prices"></pricing>` })
    .when("/services", { template: `<services></services>` })
    .when("/contact", { template: `<contact></contact>` })
    .when("/error", { template: `<wrong-route></wrong-route>` })
    // else 404
    .otherwise({
      redirectTo: '/error'
    });

  $locationProvider.html5Mode(true);

}