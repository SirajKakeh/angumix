angular.module('parentModule').component('login', {
  templateUrl: '../../templates/login.html',
  bindings: {
  },
  controller: ['currentUserService', 'authService', '$location', loginCtrl]
});

function loginCtrl(currentUserService, authService, $location) {
  if (currentUserService.authenticated()) {
    $location.path('/');
  }
  this.login = function () {
    authService.login({
      username: this.username,
      password: "pass"
    }).then(function () {
      $location.path('/');
    }, function (err) {
      console.log("error in sign in");
      console.log(err);
    })
  }
};

