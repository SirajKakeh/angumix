declare var toastr;

(function() {
  angular.module('toastr', []);
  toastr.options.timeOut = 1000;
  angular.module('toastr').value('toastr', toastr);
  
}())