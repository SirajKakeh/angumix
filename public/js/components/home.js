angular.module('mainPageModule').component('home', {
  templateUrl: './templates/home.html',
  bindings: {
  },
  controller: homeCtrl
});

function homeCtrl() {
  this.$onInit = function() {
    console.log("init homeCtrl");
  };
}