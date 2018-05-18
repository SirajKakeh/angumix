webpackJsonp([3],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(75);
var static_1 = __webpack_require__(52);
// import './app/rxjsOperations';
var app_module_1 = __webpack_require__(154);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // downgrades
    // angular.module('parentModule')
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['parentModule']);
    console.log('hybrid app bootstrapped');
});


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(14);
var forms_1 = __webpack_require__(82);
var static_1 = __webpack_require__(52);
var http_1 = __webpack_require__(76);
var router_1 = __webpack_require__(77);
var app_component_1 = __webpack_require__(155);
function getLocation(i) { return i.get('$location'); }
exports.getLocation = getLocation;
function getCurrentIdentity(i) { return i.get('currentIdentity'); }
exports.getCurrentIdentity = getCurrentIdentity;
function getAuth(i) { return i.get('auth'); }
exports.getAuth = getAuth;
function getUnreviewedSessionCount(i) { return i.get('unreviewedSessionCount'); }
exports.getUnreviewedSessionCount = getUnreviewedSessionCount;
function getToastr() { return toastr; }
exports.getToastr = getToastr;
var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { console.log('match', url.toString().startsWith("/admin/results"), url.toString()); return url.toString().startsWith("/admin/results"); };
    Ng1Ng2UrlHandlingStrategy.prototype.extract = function (url) { return url; };
    Ng1Ng2UrlHandlingStrategy.prototype.merge = function (url, whole) { return url; };
    return Ng1Ng2UrlHandlingStrategy;
}());
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
        ],
        declarations: [
            app_component_1.AppComponent
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
            { provide: 'unreviewedSessionCount',
                useFactory: getUnreviewedSessionCount,
                deps: ['$injector'] },
            // { provide: TOASTR_TOKEN, useFactory: getToastr },
            { provide: router_1.UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
            { provide: '$scope', useExisting: '$rootScope' },
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        entryComponents: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;


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
var core_1 = __webpack_require__(4);
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


/***/ })

},[153]);
//# sourceMappingURL=app.bundle.js.map