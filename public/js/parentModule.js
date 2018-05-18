angular.module('parentModule', ['ngRoute', 'toastr', 'mainPageModule', 'blogModule']);
angular.module('parentModule').run(function ($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function (e, next, prev, err) {
        if (err === "AUTH_REQUIRED") {
            $location.path("/login");
        }
        if (err === 'NOT_AUTHORIZED') {
            $location.path("/home");
        }
    });
});
angular.element(document).ready(function () {
    angular.bootstrap(document.body, ['parentModule']);
});
//# sourceMappingURL=parentModule.js.map