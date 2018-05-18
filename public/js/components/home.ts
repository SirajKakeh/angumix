angular.module('parentModule').component('home', {
  templateUrl: '../../templates/home.html',
  bindings: {
  },
  controller: homeCtrl
});

function homeCtrl() {
  this.$onInit = function() {
  };
}