angular.module('parentModule').component('login', {
  templateUrl: './templates/login.html',
  bindings: {
  },
  controller: ['currentUserService', 'authService', 'toastr', '$location', loginCtrl]
});

function loginCtrl(currentUserService, authService, toastr, $location) {
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
      toastr.error(err);
    })
  }
};

