webpackJsonp([3],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(75);
var static_1 = __webpack_require__(31);
var static_2 = __webpack_require__(31);
// import './app/rxjsOperations';
var app_module_1 = __webpack_require__(155);
var about_component_1 = __webpack_require__(184);
var header_component_1 = __webpack_require__(185);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // downgrades
    angular.module('parentModule')
        .directive('about', static_2.downgradeComponent({
        component: about_component_1.AboutComponent
    }))
        .directive('ngHeader', static_2.downgradeComponent({
        component: header_component_1.NgHeader
    }));
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['parentModule']);
    console.log('hybrid app bootstrapped');
});


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(14);
var forms_1 = __webpack_require__(82);
var static_1 = __webpack_require__(31);
var http_1 = __webpack_require__(76);
var router_1 = __webpack_require__(77);
var app_component_1 = __webpack_require__(156);
var about_component_1 = __webpack_require__(184);
var header_component_1 = __webpack_require__(185);
function getLocation(i) { return i.get('$location'); }
exports.getLocation = getLocation;
function getCurrentIdentity(i) { return i.get('currentIdentity'); }
exports.getCurrentIdentity = getCurrentIdentity;
function getAuth(i) { return i.get('auth'); }
exports.getAuth = getAuth;
// class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
//   shouldProcessUrl(url) { console.log('match', url.toString().startsWith("/admin/results"), url.toString()); return url.toString().startsWith("/admin/results"); }
//   extract(url) { return url; }
//   merge(url, whole) { return url; }
// }
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
            router_1.RouterModule.forRoot([])
        ],
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            header_component_1.NgHeader
        ],
        providers: [
            { provide: '$location',
                useFactory: getLocation,
                deps: ['$injector'] },
            { provide: 'currentIdentity',
                useFactory: getCurrentIdentity,
                deps: ['$injector'] },
            { provide: 'auth',
                useFactory: getAuth,
                deps: ['$injector'] },
            // { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
            { provide: '$scope', useExisting: '$rootScope' },
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        entryComponents: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            header_component_1.NgHeader
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-ng-app',
        template: "\n  <div class=\"ng-view\"></div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<ng-header></ng-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">About\n                <small>It's Nice to Meet You!</small>\n            </h1>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <a href=\"/\">Home</a>\n                </li>\n                <li class=\"active\">About</li>\n            </ol>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-6\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n        </div>\n        <div class=\"col-md-6\">\n            <h2>Welcome to 'Modern Business'</h2>\n\n            <p>This is a great place to introduce your company or project and describe what you do. This about page features\n                general company information, employee bios, and other helpful elements.</p>\n\n            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes\n                nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n        </div>\n\n    </div>\n\n    <!-- Team Member Profiles -->\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">Our Team</h2>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"col-sm-4\">\n            <img class=\"img-responsive\" src=\"http://placehold.it/750x450\">\n\n            <h3>John Smith\n                <small>Job Title</small>\n            </h3>\n            <p>What does this team member do? Keep it short! This is also a great spot for social links!</p>\n            <ul class=\"list-unstyled list-inline list-social-icons\">\n                <li class=\"tooltip-social facebook-link\">\n                    <a href=\"#facebook-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\n                        <i class=\"fa fa-facebook-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social linkedin-link\">\n                    <a href=\"#linkedin-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\n                        <i class=\"fa fa-linkedin-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social twitter-link\">\n                    <a href=\"#twitter-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\n                        <i class=\"fa fa-twitter-square fa-2x\"></i>\n                    </a>\n                </li>\n                <li class=\"tooltip-social google-plus-link\">\n                    <a href=\"#google-plus-profile\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Google+\">\n                        <i class=\"fa fa-google-plus-square fa-2x\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n    </div>\n\n    <!-- Our Customers -->\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">Our Customers</h2>\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\n            <img class=\"img-responsive img-customer\" src=\"http://placehold.it/500x300\">\n        </div>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!-- You'll want to use a responsive image option so this logo looks good on devices - I recommend using something like retina.js (do a quick Google search for it and you'll find it) -->\n            <a class=\"navbar-brand\" href=\"/\">Angumixed</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"services\">Services</a>\n                </li>\n                <li>\n                    <a href=\"pricing\">Pricing Table</a>\n                </li>\n                <li>\n                    <a href=\"about\">About</a>\n                </li>\n                <li>\n                    <a href=\"faq\">FAQ</a>\n                </li>\n                <li>\n                    <a href=\"contact\">Contact</a>\n                </li>\n                <li class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Blog\n                        <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li>\n                            <a href=\"blog\">List of Posts</a>\n                        </li>\n                        <li>\n                            <a href=\"blog/post\">View One Post</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container -->\n</nav>";

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "about",
        template: __webpack_require__(157)
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var NgHeader = (function () {
    function NgHeader() {
    }
    return NgHeader;
}());
NgHeader = __decorate([
    core_1.Component({
        selector: "ng-header",
        template: __webpack_require__(183)
    })
], NgHeader);
exports.NgHeader = NgHeader;


/***/ })

},[154]);
//# sourceMappingURL=app.bundle.js.map