angular.module('parentModule').component('pricing', {
  templateUrl: '../../templates/pricing.html',
  bindings: {
    prices: '<'
  },
  controller: pricingCtrl
});

function pricingCtrl() {
  var vm = this;
  vm.onChange = function(change) {

  }
}