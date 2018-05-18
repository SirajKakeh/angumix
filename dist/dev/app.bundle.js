webpackJsonp([3],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(76);
var static_1 = __webpack_require__(31);
var app_module_1 = __webpack_require__(157);
var about_component_1 = __webpack_require__(83);
var header_component_1 = __webpack_require__(84);
var home_component_1 = __webpack_require__(85);
var upgrade_1 = __webpack_require__(162);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // downgrades
    angular.module('parentModule')
        .directive('about', static_1.downgradeComponent({
        component: about_component_1.AboutComponent
    }))
        .directive('ngHeader', static_1.downgradeComponent({
        component: header_component_1.NgHeader
    }))
        .directive('home', static_1.downgradeComponent({
        component: home_component_1.Home
    }));
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['parentModule']);
    upgrade_1.setUpLocationSync(upgrade);
    console.log('hybrid app bootstrapped');
});


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(14);
var forms_1 = __webpack_require__(82);
var static_1 = __webpack_require__(31);
var http_1 = __webpack_require__(77);
var router_1 = __webpack_require__(52);
var app_component_1 = __webpack_require__(158);
var about_component_1 = __webpack_require__(83);
var header_component_1 = __webpack_require__(84);
var home_component_1 = __webpack_require__(85);
function getLocation(i) { return i.get('$location'); }
exports.getLocation = getLocation;
function getCurrentIdentity(i) { return i.get('currentIdentity'); }
exports.getCurrentIdentity = getCurrentIdentity;
function getAuth(i) { return i.get('auth'); }
exports.getAuth = getAuth;
var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return url.toString().startsWith("/about"); };
    Ng1Ng2UrlHandlingStrategy.prototype.extract = function (url) { return url; };
    Ng1Ng2UrlHandlingStrategy.prototype.merge = function (url, _) { return url; };
    return Ng1Ng2UrlHandlingStrategy;
}());
exports.Ng1Ng2UrlHandlingStrategy = Ng1Ng2UrlHandlingStrategy;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            static_1.UpgradeModule,
            router_1.RouterModule.forRoot([
                {
                    path: "about",
                    component: about_component_1.AboutComponent,
                },
            ], { useHash: false })
        ],
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            header_component_1.NgHeader,
            home_component_1.Home
        ],
        providers: [
            {
                provide: '$location',
                useFactory: getLocation,
                deps: ['$injector']
            },
            {
                provide: 'currentIdentity',
                useFactory: getCurrentIdentity,
                deps: ['$injector']
            },
            {
                provide: 'auth',
                useFactory: getAuth,
                deps: ['$injector']
            },
            { provide: router_1.UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
            { provide: '$scope', useExisting: '$rootScope' },
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        entryComponents: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            header_component_1.NgHeader,
            home_component_1.Home
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-ng-app',
        template: "\n  <div class=\"ng-view\"></div>\n  <router-outlet></router-outlet>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">About\n                <small>It's Nice to Meet You!</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">About</li>\n            </ol>\n        </div>\n\n    </div>\n    <div class=\"col-lg-4 col-md-4\">\n        <h3 style=text-align:center;color:royalblue>\n            <i class=\"fa fa-check-circle\"></i>\n            This Page is Built With and Routed to using Angular\n        </h3>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-md-6\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n        </div>\n        <div class=\"col-md-6\">\n            <h2>Welcome to 'Modern Business'</h2>\n\n            <p>This is a great place to introduce your company or project and describe what you do. This about page features\n                general company information, employee bios, and other helpful elements.</p>\n\n            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes\n                nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n        </div>\n\n    </div>\n\n    <!-- Team Member Profiles -->\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">Our Team</h2>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n\n    <!-- Our Customers -->\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">Our Customers</h2>\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n    </div>\n\n</div>";

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!-- You'll want to use a responsive image option so this logo looks good on devices - I recommend using something like retina.js (do a quick Google search for it and you'll find it) -->\n            <a class=\"navbar-brand\" href=\"/\">Angumixed</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"services\">Services</a>\n                </li>\n                <li>\n                    <a href=\"pricing\">Pricing Table</a>\n                </li>\n                <li>\n                    <a href=\"/about\">About</a>\n                </li>\n                <li>\n                    <a href=\"faq\">FAQ</a>\n                </li>\n                <li>\n                    <a href=\"contact\">Contact</a>\n                </li>\n                <li class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Blog\n                        <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li>\n                            <a href=\"blog\">List of Posts</a>\n                        </li>\n                        <li>\n                            <a href=\"blog/post\">View One Post</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>";

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div id=\"myCarousel\" class=\"carousel slide\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>  \n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <div class=\"fill\" style=\"background-image:url('http://placehold.it/1900x1080  text=Specialists');\"></div>\n      <div class=\"carousel-caption\">\n        <h1>Reduce costs of finishing operations by 65%</h1>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"fill\" style=\"background-image:url('http://placehold.it/1900x1080&text=Wordlwide');\"></div>\n      <div class=\"carousel-caption\">\n        <h1>International Buyer Financing Available</h1>\n      </div>\n    </div>\n    <div class=\"item\">\n      <div class=\"fill\" style=\"background-image:url('http://placehold.it/1900x1080&text=Since 1910');\"></div>\n      <div class=\"carousel-caption\">\n        <h1>Family Owned for Four Generations</h1>\n      </div>\n    </div>\n  </div>\n\n    <!-- Controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n    <span class=\"icon-prev\"></span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n    <span class=\"icon-next\"></span>\n  </a>\n</div>\n\n<div class=\"section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4\">\n        <h3 style=text-align:center;color:royalblue>\n          <i class=\"fa fa-check-circle\"></i>\n          This Page is Built With Angular \n          <span style=\"color: rgb(208, 20, 39)\">and routed to using AngularJS</span>\n        </h3>\n      </div>\n      <div class=\"col-lg-4 col-md-4\">\n        <h3>\n          <i class=\"fa fa-pencil\"></i> Ready to Style &amp; Edit\n        </h3>\n          <p>You're ready to go with this pre-built page structure, now all you need to do is add your\n            own custom stylings!\n            You can see some free themes over at\n            <a href=\"http://bootswatch.com\">Bootswatch</a>, or come up with your own using\n            <a href=\"http://getbootstrap.com/customize/\">the Bootstrap customizer</a>!\n          </p>\n      </div>\n            <div class=\"col-lg-4 col-md-4\">\n                <h3>\n                    <i class=\"fa fa-folder-open\"></i> Many Page Options</h3>\n                <p>This template features many common pages that you might see on a business website. Pages include: about,\n                    contact, portfolio variations, blog, pricing, FAQ, 404, services, and general multi-purpose pages.</p>\n            </div>\n        </div>\n        <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.section -->\n\n<div class=\"section-colored text-center\">\n\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h2>Modern Business: A Clean &amp; Simple Full Website Template by Start Bootstrap</h2>\n                <p>A complete website design featuring various single page templates from Start Bootstraps library of free HTML\n                    starter templates.</p>\n                <hr>\n            </div>\n        </div>\n        <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.section-colored -->\n\n<div class=\"section\">\n\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2>Display Some Work on the Home Page Portfolio</h2>\n                <hr>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-home-portfolio\" src=\"http://placehold.it/700x450\">\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-home-portfolio\" src=\"http://placehold.it/700x450\">\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-home-portfolio\" src=\"http://placehold.it/700x450\">\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-home-portfolio\" src=\"http://placehold.it/700x450\">\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-home-portfolio\" src=\"http://placehold.it/700x450\">\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <a href=\"portfolio-item.html\">\n                    <img class=\"img-responsive img-home-portfolio\" src=\"http://placehold.it/700x450\">\n                </a>\n            </div>\n        </div>\n        <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.section -->\n\n<div class=\"section-colored\">\n\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                <h2>Modern Business Features Include:</h2>\n                <ul>\n                    <li>Bootstrap 3 Framework</li>\n                    <li>Mobile Responsive Design</li>\n                    <li>Predefined File Paths</li>\n                    <li>Working PHP Contact Page</li>\n                    <li>Minimal Custom CSS Styles</li>\n                    <li>Unstyled: Add Your Own Style and Content!</li>\n                    <li>Font-Awesome fonts come pre-installed!</li>\n                    <li>100%\n                        <strong>Free</strong> to Use</li>\n                    <li>Open Source: Use for any project, private or commercial!</li>\n                </ul>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                <img class=\"img-responsive\" src=\"http://placehold.it/700x450/ffffff/cccccc\">\n            </div>\n        </div>\n        <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.section-colored -->\n\n<div class=\"section\">\n\n    <div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                <img class=\"img-responsive\" src=\"http://placehold.it/700x450\">\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                <h2>Modern Business Features Include:</h2>\n                <ul>\n                    <li>Bootstrap 3 Framework</li>\n                    <li>Mobile Responsive Design</li>\n                    <li>Predefined File Paths</li>\n                    <li>Working PHP Contact Page</li>\n                    <li>Minimal Custom CSS Styles</li>\n                    <li>Unstyled: Add Your Own Style and Content!</li>\n                    <li>Font-Awesome fonts come pre-installed!</li>\n                    <li>100%\n                        <strong>Free</strong> to Use</li>\n                    <li>Open Source: Use for any project, private or commercial!</li>\n                </ul>\n            </div>\n        </div>\n        <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.section -->\n\n<div class=\"container\">\n\n    <div class=\"row well\">\n        <div class=\"col-lg-8 col-md-8\">\n            <h4>'Modern Business' is a ready-to-use, Bootstrap 3 updated, multi-purpose HTML theme!</h4>\n            <p>For more templates and more page options that you can integrate into this website template, visit Start Bootstrap!</p>\n        </div>\n        <div class=\"col-lg-4 col-md-4\">\n            <a class=\"btn btn-lg btn-primary pull-right\" href=\"http://startbootstrap.com\">See More Templates!</a>\n        </div>\n    </div>\n    <!-- /.row -->\n\n</div>\n<!-- /.container -->";

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterUpgradeInitializer", function() { return RouterUpgradeInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationSyncBootstrapListener", function() { return locationSyncBootstrapListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpLocationSync", function() { return setUpLocationSync; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__ = __webpack_require__(31);
/**
 * @license Angular v4.4.7
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @whatItDoes Creates an initializer that in addition to setting up the Angular
 * router sets up the ngRoute integration.
 *
 * @howToUse
 *
 * ```
 * @NgModule({
 *  imports: [
 *   RouterModule.forRoot(SOME_ROUTES),
 *   UpgradeModule
 * ],
 * providers: [
 *   RouterUpgradeInitializer
 * ]
 * })
 * export class AppModule {
 *   ngDoBootstrap() {}
 * }
 * ```
 *
 * @experimental
 */
var RouterUpgradeInitializer = {
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_BOOTSTRAP_LISTENER"],
    multi: true,
    useFactory: locationSyncBootstrapListener,
    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__["UpgradeModule"]]
};
/**
 * @internal
 */
function locationSyncBootstrapListener(ngUpgrade) {
    return function () { setUpLocationSync(ngUpgrade); };
}
/**
 * @whatItDoes Sets up a location synchronization.
 *
 * History.pushState does not fire onPopState, so the Angular location
 * doesn't detect it. The workaround is to attach a location change listener
 *
 * @experimental
 */
function setUpLocationSync(ngUpgrade) {
    if (!ngUpgrade.$injector) {
        throw new Error("\n        RouterUpgradeInitializer can be used only after UpgradeModule.bootstrap has been called.\n        Remove RouterUpgradeInitializer and call setUpLocationSync after UpgradeModule.bootstrap.\n      ");
    }
    var router = ngUpgrade.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]);
    var url = document.createElement('a');
    ngUpgrade.$injector.get('$rootScope')
        .$on('$locationChangeStart', function (_, next, __) {
        url.href = next;
        router.navigateByUrl(url.pathname + url.search + url.hash);
    });
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the router/upgrade package.
 */

//# sourceMappingURL=upgrade.es5.js.map


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "about",
        template: __webpack_require__(159)
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var NgHeader = (function () {
    function NgHeader() {
    }
    return NgHeader;
}());
NgHeader = __decorate([
    core_1.Component({
        selector: "ng-header",
        template: __webpack_require__(160)
    })
], NgHeader);
exports.NgHeader = NgHeader;


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var Home = (function () {
    function Home() {
    }
    return Home;
}());
Home = __decorate([
    core_1.Component({
        selector: "home",
        template: __webpack_require__(161)
    })
], Home);
exports.Home = Home;


/***/ })

},[156]);
//# sourceMappingURL=app.bundle.js.map