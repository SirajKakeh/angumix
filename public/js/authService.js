angular.module('mainPageModule').factory('authService', function ($q, $http, currentUserService) {
  return {
    login: function (credentials) {
      var dfd = $q.defer();
      $http.post('/api/login', credentials).then(function (response) {
        currentUserService.setUser(response.data.user);

        dfd.resolve();
      }, function (response) {
        dfd.reject("Invalid Credentials");
      })
      return dfd.promise;
    },
    logout: function () {
      var dfd = $q.defer();
      $http.post('/api/logout').then(function (response) {
        currentUserService.clearUser();
        dfd.resolve();
      }, function (response) {
        dfd.reject("Error Logging Out");
      })
      return dfd.promise;
    },

    waitForAuth: function () {
      var dfd = $q.defer();
      $http.get('/api/currentIdentity').then(function (response) {
        if (!!response.data) {
          currentUserService.setUser(response.data);
        }
        dfd.resolve(currentUserService);
      })
      return dfd.promise;
    },

    requireLogin: function () {
      return this.waitForAuth().then(function () {
        if (currentUserService.authenticated()) {
          return true;
        } else {
          return $q.reject('AUTH_REQUIRED');
        }
      })
    },

    requireAdmin: function () {
      return this.waitForAuth().then(function () {
        if (currentUserService.authenticated() && currentUserService.currentUser.isAdmin) {
          return true;
        } else {
          return $q.reject('AUTH_REQUIRED');
        }
      })
    }
  }
});
