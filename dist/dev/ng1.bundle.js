webpackJsonp([2],{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import "./js/mainPageModule";
// import "./js/blogModule";
__webpack_require__(164);
// import "./js/mainPageConfig";
// import "./js/blogConfig";
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(169);
__webpack_require__(171);
__webpack_require__(173);
__webpack_require__(175);
__webpack_require__(177);
__webpack_require__(179);
__webpack_require__(181);


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

angular.module('parentModule', ['ngRoute']);
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
angular.module('parentModule')
    .config(['$routeProvider', '$locationProvider', mainConfig]);
function mainConfig($routeProvider, $locationProvider) {
    var routeResolvers = {
        loggedIn: function (authService) {
            return authService.requireLogin();
        },
        waitForAuth: function (authService) {
            return authService.waitForAuth();
        },
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
        .when("/blog", { template: "<blog></blog>" })
        .when("/blog/post", { template: "<blog-item></blog-item>" })
        .when("/error", { template: "<wrong-route></wrong-route>" });
    // else 404
    // .otherwise({
    //   redirectTo: '/error'
    // });
    $locationProvider.html5Mode(true);
}


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

angular.module('parentModule').factory('authService', function ($q, $http, currentUserService) {
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

/***/ 166:
/***/ (function(module, exports) {

angular.module('parentModule').factory('currentUserService', function ($http, $q) {
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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('contact', {
    template: __webpack_require__(168),
    bindings: {},
    controller: contactCtrl
});
function contactCtrl() {
    var vm = this;
}


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">Contact\n                <small>We'd Love to Hear From You!</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">Contact</li>\n            </ol>\n        </div>\n\n        <div class=\"col-lg-12\">\n            <!-- Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! -->\n            <iframe width=\"100%\" height=\"400px\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed\"></iframe>\n        </div>\n\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-8\">\n            <h3>Let's Get In Touch!</h3>\n\n            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes\n                nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n                beatae vitae dicta sunt explicabo.</p>\n\n            <form role=\"form\" method=\"POST\" action=\"#\">\n                <div class=\"row\">\n                    <div class=\"form-group col-lg-4\">\n                        <label for=\"input1\">Name</label>\n                        <input type=\"text\" name=\"contact_name\" class=\"form-control\" id=\"input1\">\n                    </div>\n                    <div class=\"form-group col-lg-4\">\n                        <label for=\"input2\">Email Address</label>\n                        <input type=\"email\" name=\"contact_email\" class=\"form-control\" id=\"input2\">\n                    </div>\n                    <div class=\"form-group col-lg-4\">\n                        <label for=\"input3\">Phone Number</label>\n                        <input type=\"phone\" name=\"contact_phone\" class=\"form-control\" id=\"input3\">\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"form-group col-lg-12\">\n                        <label for=\"input4\">Message</label>\n                        <textarea name=\"contact_message\" class=\"form-control\" rows=\"6\" id=\"input4\"></textarea>\n                    </div>\n                    <div class=\"form-group col-lg-12\">\n                        <input type=\"hidden\" name=\"save\" value=\"contact\">\n                        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <h3>Modern Business</h3>\n            <h4>A Start Bootstrap Template</h4>\n\n            <p>\n                5555 44th Street N.\n                <br> Bootstrapville, CA 32323\n                <br>\n            </p>\n\n            <p>\n                <i class=\"fa fa-phone\"></i>\n                <abbr title=\"Phone\">P</abbr>: (555) 984-3600</p>\n\n            <p>\n                <i class=\"fa fa-envelope-o\"></i>\n                <abbr title=\"Email\">E</abbr>:\n                <a href=\"mailto:feedback@startbootstrap.com\">feedback@startbootstrap.com</a>\n            </p>\n\n            <p>\n                <i class=\"fa fa-clock-o\"></i>\n                <abbr title=\"Hours\">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-page\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-company-page\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-page\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n    <!-- /.row -->\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('services', {
    template: __webpack_require__(170),
    bindings: {},
    controller: servicesCtrl
});
function servicesCtrl() {
}


/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">Services\n                <small>What We Do</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">Services</li>\n            </ol>\n        </div>\n\n    </div>\n    <!-- /.row -->\n    <div class=\"col-lg-4 col-md-4\">\n        <h3 style=\"text-align:center;color: rgb(208, 20, 39)\">\n            <i class=\"fa fa-check-circle\"></i>\n            This Page is Built and Routed to Using AngularJS\n        </h3>\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/1200x300\">\n        </div>\n\n    </div>\n    <!-- /.row -->\n\n    <!-- Service Paragraphs -->\n\n    <div class=\"row\">\n\n        <div class=\"col-md-8\">\n            <h2 class=\"page-header\">Our Premium Services</h2>\n\n            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes\n                nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n                beatae vitae dicta sunt explicabo.</p>\n        </div>\n\n        <div class=\"col-md-4\">\n            <h2 class=\"page-header\">Something More</h2>\n\n            <p>Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.\n            </p>\n            <a class=\"btn btn-primary\" href=\"#\">Click Me!</a>\n        </div>\n\n    </div>\n    <!-- /.row -->\n\n    <!-- Service Tabs -->\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">Tabbed Services</h2>\n            <ul id=\"myTab\" class=\"nav nav-tabs\">\n                <li class=\"active\">\n                    <a href=\"#service-one\" data-toggle=\"tab\">Service One</a>\n                </li>\n                <li>\n                    <a href=\"#service-two\" data-toggle=\"tab\">Service Two</a>\n                </li>\n                <li>\n                    <a href=\"#service-three\" data-toggle=\"tab\">Service Three</a>\n                </li>\n                <li>\n                    <a href=\"#service-four\" data-toggle=\"tab\">Service Four</a>\n                </li>\n                <li>\n                    <a href=\"#service-five\" data-toggle=\"tab\">Service Five</a>\n                </li>\n            </ul>\n            <div id=\"myTabContent\" class=\"tab-content\">\n                <div class=\"tab-pane fade in active\" id=\"service-one\">\n                    <i class=\"fa fa-gear pull-left fa-4x\"></i>\n\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim.\n                        In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque\n                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam placerat nunc\n                        ut tellus tristique, non posuere neque iaculis. Fusce aliquet dui ut felis rhoncus, vitae molestie\n                        mauris auctor. Donec pellentesque feugiat leo a adipiscing. Pellentesque quis tristique eros, sed\n                        rutrum mauris.</p>\n\n                    <p>Nam fringilla quis enim in eleifend. Suspendisse sed lectus mauris. Nam commodo, arcu et posuere placerat,\n                        tellus tortor dignissim eros, sit amet eleifend urna lorem sit amet nulla. Praesent sem nibh, vulputate\n                        nec congue eu, dapibus vitae augue. Suspendisse cursus urna sit amet metus porttitor, in pharetra\n                        quam feugiat. Etiam tempus euismod nulla eget pellentesque.</p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"service-two\">\n                    <i class=\"fa fa-gears pull-left fa-4x\"></i>\n\n                    <p>Nam fringilla quis enim in eleifend. Suspendisse sed lectus mauris. Nam commodo, arcu et posuere placerat,\n                        tellus tortor dignissim eros, sit amet eleifend urna lorem sit amet nulla. Praesent sem nibh, vulputate\n                        nec congue eu, dapibus vitae augue. Suspendisse cursus urna sit amet metus porttitor, in pharetra\n                        quam feugiat. Etiam tempus euismod nulla eget pellentesque.</p>\n\n                    <p>Vestibulum laoreet molestie urna ac vehicula. Phasellus laoreet semper ipsum ac gravida. Sed in varius\n                        tortor. Nullam blandit in neque quis aliquet. Fusce volutpat pellentesque sem non convallis. Suspendisse\n                        sit amet magna pulvinar, gravida mauris eu, tincidunt massa. Nam lectus mi, viverra non quam nec,\n                        mollis malesuada dolor. Vivamus hendrerit nunc interdum turpis egestas, a lobortis odio consequat.\n                        Fusce posuere purus quis ligula faucibus lacinia. Curabitur sit amet congue dolor. Duis dapibus hendrerit\n                        nunc et gravida. Phasellus mollis, lectus quis ornare aliquam, arcu orci posuere lectus, vehicula\n                        bibendum sem ante quis lacus.</p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"service-three\">\n                    <i class=\"fa fa-magic pull-left fa-4x\"></i>\n\n                    <p>Vestibulum laoreet molestie urna ac vehicula. Phasellus laoreet semper ipsum ac gravida. Sed in varius\n                        tortor. Nullam blandit in neque quis aliquet. Fusce volutpat pellentesque sem non convallis. Suspendisse\n                        sit amet magna pulvinar, gravida mauris eu, tincidunt massa. Nam lectus mi, viverra non quam nec,\n                        mollis malesuada dolor. Vivamus hendrerit nunc interdum turpis egestas, a lobortis odio consequat.\n                        Fusce posuere purus quis ligula faucibus lacinia. Curabitur sit amet congue dolor. Duis dapibus hendrerit\n                        nunc et gravida. Phasellus mollis, lectus quis ornare aliquam, arcu orci posuere lectus, vehicula\n                        bibendum sem ante quis lacus.</p>\n\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim.\n                        In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque\n                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam placerat nunc\n                        ut tellus tristique, non posuere neque iaculis. Fusce aliquet dui ut felis rhoncus, vitae molestie\n                        mauris auctor. Donec pellentesque feugiat leo a adipiscing. Pellentesque quis tristique eros, sed\n                        rutrum mauris.</p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"service-four\">\n                    <i class=\"fa fa-flask pull-left fa-4x\"></i>\n\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim.\n                        In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque\n                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam placerat nunc\n                        ut tellus tristique, non posuere neque iaculis. Fusce aliquet dui ut felis rhoncus, vitae molestie\n                        mauris auctor. Donec pellentesque feugiat leo a adipiscing. Pellentesque quis tristique eros, sed\n                        rutrum mauris.</p>\n\n                    <p>Nam fringilla quis enim in eleifend. Suspendisse sed lectus mauris. Nam commodo, arcu et posuere placerat,\n                        tellus tortor dignissim eros, sit amet eleifend urna lorem sit amet nulla. Praesent sem nibh, vulputate\n                        nec congue eu, dapibus vitae augue. Suspendisse cursus urna sit amet metus porttitor, in pharetra\n                        quam feugiat. Etiam tempus euismod nulla eget pellentesque.</p>\n                </div>\n                <div class=\"tab-pane fade\" id=\"service-five\">\n                    <i class=\"fa fa-flag pull-left fa-4x\"></i>\n\n                    <p>Nam fringilla quis enim in eleifend. Suspendisse sed lectus mauris. Nam commodo, arcu et posuere placerat,\n                        tellus tortor dignissim eros, sit amet eleifend urna lorem sit amet nulla. Praesent sem nibh, vulputate\n                        nec congue eu, dapibus vitae augue. Suspendisse cursus urna sit amet metus porttitor, in pharetra\n                        quam feugiat. Etiam tempus euismod nulla eget pellentesque.</p>\n\n                    <p>Vestibulum laoreet molestie urna ac vehicula. Phasellus laoreet semper ipsum ac gravida. Sed in varius\n                        tortor. Nullam blandit in neque quis aliquet. Fusce volutpat pellentesque sem non convallis. Suspendisse\n                        sit amet magna pulvinar, gravida mauris eu, tincidunt massa. Nam lectus mi, viverra non quam nec,\n                        mollis malesuada dolor. Vivamus hendrerit nunc interdum turpis egestas, a lobortis odio consequat.\n                        Fusce posuere purus quis ligula faucibus lacinia. Curabitur sit amet congue dolor. Duis dapibus hendrerit\n                        nunc et gravida. Phasellus mollis, lectus quis ornare aliquam, arcu orci posuere lectus, vehicula\n                        bibendum sem ante quis lacus.</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /.row -->\n\n    <!-- Service Images -->\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">Service Images</h2>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>Service One</h3>\n\n            <p>Service one description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl\n                vestibulum dignissim. In hac habitasse platea dictumst.</p>\n            <a class=\"btn btn-link btn-sm pull-right\">More\n                <i class=\"fa fa-angle-right\"></i>\n            </a>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>Service Two</h3>\n\n            <p>Service two description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl\n                vestibulum dignissim. In hac habitasse platea dictumst.</p>\n            <a class=\"btn btn-link btn-sm pull-right\">More\n                <i class=\"fa fa-angle-right\"></i>\n            </a>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>Service Three</h3>\n\n            <p>Service three description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl\n                vestibulum dignissim. In hac habitasse platea dictumst.</p>\n            <a class=\"btn btn-link btn-sm pull-right\">More\n                <i class=\"fa fa-angle-right\"></i>\n            </a>\n        </div>\n\n    </div>\n    <!-- /.row -->\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('wrongRoute', {
    template: __webpack_require__(172),
    bindings: {},
    controller: wrongRouteCtrl
});
function wrongRouteCtrl() {
}


/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">404\n                <small>Page Not Found</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">404</li>\n            </ol>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <p class=\"error-404\">404</p>\n\n            <p class=\"lead\">The page you're looking for could not be found.</p>\n\n            <p>Here are some helpful links to help you find what you're looking for:</p>\n            <ul>\n                <li>\n                    <a href=\"#\">Home</a>\n                </li>\n                <li>\n                    <a href=\"#\">About</a>\n                </li>\n                <li>\n                    <a href=\"#\">Services</a>\n                </li>\n                <li>\n                    <a href=\"#\">Contact</a>\n                </li>\n                <li>\n                    <a href=\"#\">Blog</a>\n                </li>\n                <li>\n                    <a href=\"#\">Other</a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('blog', {
    template: __webpack_require__(174),
    bindings: {},
    controller: blogCtrl
});
function blogCtrl() {
}


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">Blog Home 2\n                <small>Blog Homepage</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">Blog Home 2</li>\n            </ol>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-1\">\n            <p>\n                <i class=\"fa fa-camera fa-4x\"></i>\n            </p>\n\n            <p>May 24, 2013</p>\n        </div>\n        <div class=\"col-md-5\">\n            <a href=\"blog-post.html\">\n                <img src=\"http://placehold.it/600x300\" class=\"img-responsive\">\n            </a>\n        </div>\n        <div class=\"col-md-6\">\n            <h3>\n                <a href=\"blog-post.html\">A Blog Home Template for Bootstrap 3</a>\n            </h3>\n\n            <p>by\n                <a href=\"#\">Start Bootstrap</a>\n            </p>\n\n            <p>This is a very basic starter template for a blog homepage. It makes use of Font Awesome icons that are built\n                into the 'Modern Business' template, and it makes use of the Bootstrap 3 pager at the bottom of the page.</p>\n            <a class=\"btn btn-primary\" href=\"blog-post.html\">Read More\n                <i class=\"fa fa-angle-right\"></i>\n            </a>\n        </div>\n\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-1\">\n            <p>\n                <i class=\"fa fa-film fa-4x\"></i>\n            </p>\n\n            <p>May 24, 2013</p>\n        </div>\n        <div class=\"col-md-5\">\n            <a href=\"blog-post.html\">\n                <img src=\"http://placehold.it/600x300\" class=\"img-responsive\">\n            </a>\n        </div>\n        <div class=\"col-md-6\">\n            <h3>\n                <a href=\"blog-post.html\">A Blog Home Template for Bootstrap 3</a>\n            </h3>\n\n            <p>by\n                <a href=\"#\">Start Bootstrap</a>\n            </p>\n\n            <p>This is a very basic starter template for a blog homepage. It makes use of Font Awesome icons that are built\n                into the 'Modern Business' template, and it makes use of the Bootstrap 3 pager at the bottom of the page.</p>\n            <a class=\"btn btn-primary\" href=\"blog-post.html\">Read More\n                <i class=\"fa fa-angle-right\"></i>\n            </a>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-1\">\n            <p>\n                <i class=\"fa fa-file-text fa-4x\"></i>\n            </p>\n\n            <p>May 24, 2013</p>\n        </div>\n        <div class=\"col-md-5\">\n            <a href=\"blog-post.html\">\n                <img src=\"http://placehold.it/600x300\" class=\"img-responsive\">\n            </a>\n        </div>\n        <div class=\"col-md-6\">\n            <h3>\n                <a href=\"blog-post.html\">A Blog Home Template for Bootstrap 3</a>\n            </h3>\n\n            <p>by\n                <a href=\"#\">Start Bootstrap</a>\n            </p>\n\n            <p>This is a very basic starter template for a blog homepage. It makes use of Font Awesome icons that are built\n                into the 'Modern Business' template, and it makes use of the Bootstrap 3 pager at the bottom of the page.</p>\n            <a class=\"btn btn-primary\" href=\"blog-post.html\">Read More\n                <i class=\"fa fa-angle-right\"></i>\n            </a>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n\n        <ul class=\"pager\">\n            <li class=\"previous\">\n                <a href=\"#\">&larr; Older</a>\n            </li>\n            <li class=\"next\">\n                <a href=\"#\">Newer &rarr;</a>\n            </li>\n        </ul>\n\n    </div>\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('blogItem', {
    template: __webpack_require__(176),
    bindings: {},
    controller: blogItemCtrl
});
function blogItemCtrl() {
}


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">Blog Post\n                <small>A Sample Blog Post</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">Blog Post</li>\n            </ol>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-8\">\n\n            <!-- the actual blog post: title/author/date/content -->\n            <hr>\n            <p>\n                <i class=\"fa fa-clock-o\"></i> Posted on August 24, 2013 at 9:00 PM by\n                <a href=\"#\">Start Boostrap</a>\n            </p>\n            <hr>\n            <img src=\"http://placehold.it/900x300\" class=\"img-responsive\">\n            <hr>\n            <p class=\"lead\">Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back\n                from science. The early warnings about technological dangers also come from science.\n            </p>\n\n            <p>You know, being a test pilot isn't always the healthiest business in the world.</p>\n\n            <p>Cookie jelly beans soufflé icing. Gummi bears tootsie roll powder chupa chups cheesecake chocolate jelly-o lollipop\n                lollipop. Halvah applicake chupa chups. Marshmallow chocolate jujubes icing lollipop gummi bears chupa chups\n                pudding bonbon. Jelly beans jelly soufflé jujubes. Sesame snaps lollipop icing donut lemon drops soufflé.</p>\n\n            <p>Donut caramels gingerbread. Sweet roll macaroon pastry cotton candy oat cake sesame snaps biscuit lemon drops\n                dessert. Candy canes carrot cake danish carrot cake soufflé jelly chocolate cake muffin. Topping brownie\n                donut. Oat cake marzipan dragée cheesecake. Donut chocolate cake jujubes tart dragée toffee.</p>\n\n            <p>Tilefish electric knifefish salmon shark southern Dolly Varden. Pacific argentine tope golden shiner ilisha barreleye\n                loosejaw catla, dogteeth tetra catfish tenpounder nase scup Ragfish brotula.\" Codlet brook lamprey pleco,\n                Japanese eel convict cichlid titan triggerfish, plownose chimaera topminnow Black scalyfin. Walleye pollock,\n                blue shark Sacramento blackfish prickleback airbreathing catfish yellowfin cutthroat trout, goby southern\n                sandfish. North Pacific daggertooth dorab cepalin weever flying gurnard.\n            </p>\n\n            <p>\n                <strong>Placeholder text by:</strong>\n            </p>\n            <ul>\n                <li>\n                    <a href=\"http://spaceipsum.com/\">Space Ipsum</a>\n                </li>\n                <li>\n                    <a href=\"http://cupcakeipsum.com/\">Cupcake Ipsum</a>\n                </li>\n                <li>\n                    <a href=\"http://tunaipsum.com/\">Tuna Ipsum</a>\n                </li>\n            </ul>\n\n            <hr>\n\n            <!-- the comment box -->\n            <div class=\"well\">\n                <h4>Leave a Comment:</h4>\n\n                <form role=\"form\">\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" rows=\"3\"></textarea>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </form>\n            </div>\n\n            <hr>\n\n            <!-- the comments -->\n            <h3>Start Bootstrap\n                <small>9:41 PM on August 24, 2013</small>\n            </h3>\n            <p>This has to be the worst blog post I have ever read. It simply makes no sense. You start off by talking about\n                space or something, then you randomly start babbling about cupcakes, and you end off with random fish names.</p>\n\n            <h3>Start Bootstrap\n                <small>9:47 PM on August 24, 2013</small>\n            </h3>\n            <p>Don't listen to this guy, any blog with the categories 'dinosaurs, spaceships, fried foods, wild animals, alien\n                abductions, business casual, robots, and fireworks' has true potential.</p>\n\n        </div>\n\n        <div class=\"col-lg-4\">\n            <div class=\"well\">\n                <h4>Blog Search</h4>\n\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\">\n                            <i class=\"fa fa-search\"></i>\n                        </button>\n                    </span>\n                </div>\n                <!-- /input-group -->\n            </div>\n            <!-- /well -->\n            <div class=\"well\">\n                <h4>Popular Blog Categories</h4>\n\n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <ul class=\"list-unstyled\">\n                            <li>\n                                <a href=\"#dinosaurs\">Dinosaurs</a>\n                            </li>\n                            <li>\n                                <a href=\"#spaceships\">Spaceships</a>\n                            </li>\n                            <li>\n                                <a href=\"#fried-foods\">Fried Foods</a>\n                            </li>\n                            <li>\n                                <a href=\"#wild-animals\">Wild Animals</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <ul class=\"list-unstyled\">\n                            <li>\n                                <a href=\"#alien-abductions\">Alien Abductions</a>\n                            </li>\n                            <li>\n                                <a href=\"#business-casual\">Business Casual</a>\n                            </li>\n                            <li>\n                                <a href=\"#robots\">Robots</a>\n                            </li>\n                            <li>\n                                <a href=\"#fireworks\">Fireworks</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!-- /well -->\n            <div class=\"well\">\n                <h4>Side Widget Well</h4>\n\n                <p>Bootstrap's default well's work great for side widgets! What is a widget anyways...?</p>\n            </div>\n            <!-- /well -->\n        </div>\n    </div>\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('faq', {
    template: __webpack_require__(178),
    bindings: {},
    controller: faqCtrl
});
function faqCtrl() {
    var vm = this;
}


/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">FAQ\n                <small>Frequently Asked Questions</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">FAQ</li>\n            </ol>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n\n            <div class=\"panel-group\" id=\"accordion\">\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n                                Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n                                Aenean consequat lorem ut felis ullamcorper?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseFour\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\">\n                                Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseFive\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\">\n                                Aenean consequat lorem ut felis ullamcorper?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseSix\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSeven\">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseEight\">\n                                Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseEight\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseNine\">\n                                Aenean consequat lorem ut felis ullamcorper?\n                            </a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseNine\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n                            moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch\n                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n                            Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n                            synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('pricing', {
    template: __webpack_require__(180),
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

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">Pricing Table\n                <small>Our Pricing Options</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">Pricing Table</li>\n            </ol>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default text-center\">\n                <div class=\"panel-heading\">\n                    <strong>Basic</strong>\n                </div>\n                <div class=\"panel-body\">\n                    <h3 class=\"panel-title price\">$9\n                        <span class=\"price-cents\">99</span>\n                        <span class=\"price-month\">mo.</span>\n                    </h3>\n                </div>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">5 Projects</li>\n                    <li class=\"list-group-item\">5 GB of Storage</li>\n                    <li class=\"list-group-item\">Up to 100 Users</li>\n                    <li class=\"list-group-item\">10 GB Bandwidth</li>\n                    <li class=\"list-group-item\">Security Suite</li>\n                    <li class=\"list-group-item\">\n                        <a class=\"btn btn-primary\">Sign Up Now!</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default text-center\">\n                <div class=\"panel-heading\">\n                    <strong>Plus</strong>\n                </div>\n                <div class=\"panel-body\">\n                    <h3 class=\"panel-title price\">$19\n                        <span class=\"price-cents\">99</span>\n                        <span class=\"price-month\">mo.</span>\n                    </h3>\n                </div>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">10 Projects</li>\n                    <li class=\"list-group-item\">10 GB of Storage</li>\n                    <li class=\"list-group-item\">Up to 250 Users</li>\n                    <li class=\"list-group-item\">25 GB Bandwidth</li>\n                    <li class=\"list-group-item\">Security Suite</li>\n                    <li class=\"list-group-item\">\n                        <a class=\"btn btn-primary\">Sign Up Now!</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default text-center\">\n                <div class=\"panel-heading\">\n                    <strong>Premium\n                        <span class=\"label label-success\">Best Value!</span>\n                    </strong>\n                </div>\n                <div class=\"panel-body\">\n                    <h3 class=\"panel-title price\">$29\n                        <span class=\"price-cents\">99</span>\n                        <span class=\"price-month\">mo.</span>\n                    </h3>\n                </div>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Unlimited</li>\n                    <li class=\"list-group-item\">50 GB of Storage</li>\n                    <li class=\"list-group-item\">Up to 1000 Users</li>\n                    <li class=\"list-group-item\">100 GB Bandwidth</li>\n                    <li class=\"list-group-item\">Security Suite</li>\n                    <li class=\"list-group-item\">\n                        <a class=\"btn btn-primary\">Sign Up Now!</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default text-center\">\n                <div class=\"panel-heading\">\n                    <strong>Ultimate</strong>\n                </div>\n                <div class=\"panel-body\">\n                    <h3 class=\"panel-title price\">$49\n                        <span class=\"price-cents\">99</span>\n                        <span class=\"price-month\">mo.</span>\n                    </h3>\n                </div>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Unlimited</li>\n                    <li class=\"list-group-item\">150 GB of Storage</li>\n                    <li class=\"list-group-item\">Unlimited</li>\n                    <li class=\"list-group-item\">500 GB Bandwidth</li>\n                    <li class=\"list-group-item\">Security Suite</li>\n                    <li class=\"list-group-item\">\n                        <a class=\"btn btn-primary\">Sign Up Now!</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

angular.module('parentModule').component('login', {
    template: __webpack_require__(182),
    bindings: {},
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
        });
    };
}
;


/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4 col-md-4\">\n  <h3 style=\"text-align:center;color: rgb(208, 20, 39)\">\n    <i class=\"fa fa-check-circle\"></i>\n    This Page is Built With and Routed to Using AngularJS\n  </h3>\n</div>\n\n<h1>Please Login</h1>\n\n<p>Use username \"a\" to login</p>\n<form class=\"form\">\n  <div class=\"row\">\n    <div class=\"form-group col-sm-6\">\n      <input type=\"text\" autofocus placeholder=\"username\" ng-model=\"$ctrl.username\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" ng-click=\"$ctrl.login()\">Login</button>\n    </div>\n  </div>\n</form>";

/***/ })

},[163]);
//# sourceMappingURL=ng1.bundle.js.map