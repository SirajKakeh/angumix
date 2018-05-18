webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function () {
    angular.module('toastr', []);
    toastr.options.timeOut = 1000;
    angular.module('toastr').value('toastr', toastr);
}());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

angular.module('mainPageModule', ['ngRoute', 'toastr']);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

angular.module('blogModule', ['ngRoute']);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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
    };
    $routeProvider
        .when("/home", {
        redirectTo: '/'
    })
        .when("/", {
        template: "<home></home>",
        resolve: {
            login: routeResolvers.loggedIn,
        }
    })
        .when("/about", { template: "<about></about>" })
        .when("/login", {
        template: "<login></login>",
        resolve: {
            currentAuth: routeResolvers.waitForAuth
        }
    })
        .when("/faq", { template: "<faq></faq>" })
        .when("/pricing", { template: "<pricing prices=\"$resolve.prices\"></pricing>" })
        .when("/services", { template: "<services></services>" })
        .when("/contact", { template: "<contact></contact>" })
        .when("/error", { template: "<wrong-route></wrong-route>" })
        .otherwise({
        redirectTo: '/error'
    });
    $locationProvider.html5Mode(true);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

angular.module('blogModule')
    .config(['$routeProvider', blogconfig]);
function blogconfig($routeProvider) {
    $routeProvider
        .when("/blog", { template: "<blog></blog>" })
        .when("/blog/post", { template: "<blog-item></blog-item>" });
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

angular.module('mainPageModule').factory('authService', function ($q, $http, currentUserService) {
    return {
        login: function (credentials) {
            var dfd = $q.defer();
            $http.post('/api/login', credentials).then(function (response) {
                currentUserService.setUser(response.data.user);
                dfd.resolve();
            }, function (response) {
                dfd.reject("Invalid Credentials");
            });
            return dfd.promise;
        },
        logout: function () {
            var dfd = $q.defer();
            $http.post('/api/logout').then(function (response) {
                currentUserService.clearUser();
                dfd.resolve();
            }, function (response) {
                dfd.reject("Error Logging Out");
            });
            return dfd.promise;
        },
        waitForAuth: function () {
            var dfd = $q.defer();
            $http.get('/api/currentIdentity').then(function (response) {
                if (!!response.data) {
                    currentUserService.setUser(response.data);
                }
                dfd.resolve(currentUserService);
            });
            return dfd.promise;
        },
        requireLogin: function () {
            return this.waitForAuth().then(function () {
                if (currentUserService.authenticated()) {
                    return true;
                }
                else {
                    return $q.reject('AUTH_REQUIRED');
                }
            });
        },
        requireAdmin: function () {
            return this.waitForAuth().then(function () {
                if (currentUserService.authenticated() && currentUserService.currentUser.isAdmin) {
                    return true;
                }
                else {
                    return $q.reject('AUTH_REQUIRED');
                }
            });
        }
    };
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

angular.module('mainPageModule').factory('currentUserService', function ($http, $q) {
    return {
        currentUser: null,
        setUser: function (user) {
            this.currentUser = user;
        },
        clearUser: function () {
            this.currentUser = null;
        },
        authenticated: function () {
            return !!this.currentUser;
        },
        updateUser: function (newUserObj) {
            var dfd = $q.defer();
            $http.put('/api/users/' + this.currentUser.id, newUserObj).then(function (response) {
                this.currentUser.firstName = newUserObj.firstName;
                this.currentUser.lastName = newUserObj.lastName;
                dfd.resolve();
            }.bind(this), function (response) {
                dfd.reject("Error Logging Out");
            });
            return dfd.promise;
        }
    };
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('mainComp', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/main_comp.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: mainCompCtrl
});
function mainCompCtrl() {
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('home', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/home.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: homeCtrl
});
function homeCtrl() {
    this.$onInit = function () {
    };
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('ngHeader', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/header.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: headerCtrl
});
function headerCtrl() {
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('ngFooter', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/footer.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: footerCtrl
});
function footerCtrl() {
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('about', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/about.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: aboutCtrl
});
function aboutCtrl() {
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('contact', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/contact.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: contactCtrl
});
function contactCtrl() {
    var vm = this;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('services', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/services.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: servicesCtrl
});
function servicesCtrl() {
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('wrongRoute', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/wrong_route.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: wrongRouteCtrl
});
function wrongRouteCtrl() {
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('blogModule').component('blog', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/blog.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: blogCtrl
});
function blogCtrl() {
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('blogModule').component('blogItem', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/blog_item.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: blogItemCtrl
});
function blogItemCtrl() {
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('faq', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/faq.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
    controller: faqCtrl
});
function faqCtrl() {
    var vm = this;
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('mainPageModule').component('pricing', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/pricing.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {
        prices: '<'
    },
    controller: pricingCtrl
});
function pricingCtrl() {
    var vm = this;
    vm.onChange = function (change) {
    };
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('login', {
    template: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./templates/login.html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    bindings: {},
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
        });
    };
}
;


/***/ })
],[0]);
//# sourceMappingURL=ng1.bundle.js.map