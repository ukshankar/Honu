var ac_main =
webpackJsonpac__name_([3],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });


var AppConfig = (function () {
    function AppConfig() {
        //serverHost='http://localhost:8888'
        this.serverHost = '';
    }
    return AppConfig;
}());
AppConfig = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], AppConfig);



/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(441);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(444);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(64);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_component__ = __webpack_require__(65);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_component__["a"]; });



/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regconf_component__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__regconf_component__["a"]; });



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(2);

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signon_provider__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signon_component__ = __webpack_require__(68);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__signon_component__["a"]; });




/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOnProvider; });





var SignOnProvider = (function () {
    function SignOnProvider(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        console.log('Hello Home Provider');
    }
    SignOnProvider.prototype.signIn = function (user) {
        return this.http.post(this.appConfig.serverHost + '/service/signon', user)
            .map(function (res) { return (res.json()); });
    };
    return SignOnProvider;
}());
SignOnProvider = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__config__["a" /* AppConfig */]])
], SignOnProvider);



/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(770);

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(31);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(143);

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(819);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(442);

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(440);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });



var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 227))
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    return AboutComponent;
}());
AboutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'about',
        styles: ["\n  "],
        template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
], AboutComponent);



/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });



/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

/*
 * Angular 2 decorators and services
 */


/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(81)
        ],
        template: __webpack_require__(74)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */]])
], AppComponent);

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signon__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_google__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__regconf__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environment__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_resolver__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__no_content__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__styles_styles_scss__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__styles_headings_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__styles_headings_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });











/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component










// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_14__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_15__app_service__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_19__config__["a" /* AppConfig */],
    __WEBPACK_IMPORTED_MODULE_20__common_auth__["a" /* AuthGuard */],
    __WEBPACK_IMPORTED_MODULE_20__common_auth__["b" /* AuthHttp */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__signon__["a" /* SignOnComponent */],
            __WEBPACK_IMPORTED_MODULE_8__common_google__["a" /* GoogleSignInComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_18__no_content__["a" /* NoContentComponent */],
            __WEBPACK_IMPORTED_MODULE_10__regconf__["a" /* RegConfComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["PreloadAllModules"] })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_15__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });





var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signon__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__regconf__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_content__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_auth__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });






var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'signon', component: __WEBPACK_IMPORTED_MODULE_1__signon__["a" /* SignOnComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__common_auth__["a" /* AuthGuard */]] },
    { path: 'regconf', component: __WEBPACK_IMPORTED_MODULE_3__regconf__["a" /* RegConfComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__common_auth__["a" /* AuthGuard */]] },
    { path: 'detail', loadChildren: function() { return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 226))  .then( function(module) { return module['DetailModule']; } ); } },
    { path: 'barrel', loadChildren: function() { return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 225))  .then( function(module) { return module['BarrelModule']; } ); } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__no_content__["a" /* NoContentComponent */] },
];


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(443);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('user')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], AuthGuard);



/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttp; });



var AuthHttp = (function () {
    function AuthHttp(http) {
        this.http = http;
    }
    AuthHttp.prototype.createAuthorizationHeader = function (headers) {
        headers.append('jwt_header', "" + localStorage.getItem('user_token'));
    };
    AuthHttp.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    AuthHttp.prototype.post = function (url, data) {
        console.log("This is the text message - 1");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    return AuthHttp;
}());
AuthHttp = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], AuthHttp);



/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* unused harmony export GoogleSignInSuccess */
/* unused harmony export GoogleSignInFailure */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleSignInComponent; });


var GoogleSignInSuccess = (function () {
    function GoogleSignInSuccess(googleUser) {
        this.googleUser = googleUser;
    }
    return GoogleSignInSuccess;
}());

var GoogleSignInFailure = (function () {
    function GoogleSignInFailure() {
    }
    return GoogleSignInFailure;
}());

var GoogleSignInComponent = (function () {
    function GoogleSignInComponent() {
        this.id = 'google-signin2';
        this.googleSignInSuccess = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.googleSignInFailure = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(GoogleSignInComponent.prototype, "width", {
        get: function () {
            return this._width.toString();
        },
        set: function (value) {
            this._width = Number(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleSignInComponent.prototype, "height", {
        get: function () {
            return this._height.toString();
        },
        set: function (value) {
            this._height = Number(value);
            gapi.load('', function () { });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleSignInComponent.prototype, "longTitle", {
        get: function () {
            return this._longTitle.toString();
        },
        set: function (value) {
            this._longTitle = Boolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleSignInComponent.prototype, "fetchBasicProfile", {
        get: function () {
            return this._fetchBasicProfile.toString();
        },
        set: function (s) {
            this._fetchBasicProfile = Boolean(s);
        },
        enumerable: true,
        configurable: true
    });
    GoogleSignInComponent.prototype.ngAfterViewInit = function () {
        this.auth2Init();
        this.renderButton();
    };
    GoogleSignInComponent.prototype.auth2Init = function () {
        var _this = this;
        if (this.clientId == null)
            throw new Error('clientId property is necessary. (<google-signin [clientId]="..."></google-signin>)');
        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: _this.clientId,
                cookie_policy: _this.cookiePolicy,
                fetch_basic_profile: _this._fetchBasicProfile,
                hosted_domain: _this.hostedDomain,
                openid_realm: _this.openidRealm
            });
        });
    };
    GoogleSignInComponent.prototype.handleFailure = function () {
        this.googleSignInFailure.next(new GoogleSignInFailure());
    };
    GoogleSignInComponent.prototype.handleSuccess = function (googleUser) {
        this.googleSignInSuccess.next(new GoogleSignInSuccess(googleUser));
    };
    GoogleSignInComponent.prototype.renderButton = function () {
        var _this = this;
        gapi.signin2.render(this.id, {
            scope: this.scope,
            width: this._width,
            height: this._height,
            longtitle: this._longTitle,
            theme: this.theme,
            onsuccess: function (googleUser) { return _this.handleSuccess(googleUser); },
            onfailure: function () { return _this.handleFailure(); }
        });
    };
    return GoogleSignInComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String)
], GoogleSignInComponent.prototype, "scope", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "width", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "height", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "longTitle", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String)
], GoogleSignInComponent.prototype, "theme", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String)
], GoogleSignInComponent.prototype, "clientId", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String)
], GoogleSignInComponent.prototype, "cookiePolicy", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "fetchBasicProfile", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String)
], GoogleSignInComponent.prototype, "hostedDomain", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String)
], GoogleSignInComponent.prototype, "openidRealm", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], GoogleSignInComponent.prototype, "googleSignInSuccess", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], GoogleSignInComponent.prototype, "googleSignInFailure", void 0);
GoogleSignInComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'google-signin',
        template: '<div [id]="id"></div>',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush
    })
], GoogleSignInComponent);



/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_component__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__google_component__["a"]; });



/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });



var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(appState) {
        this.appState = appState;
        // Set our default values
        this.localState = { value: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('hello `Home`');
        // this.title.getData().subscribe(data => this.data = data);
    };
    HomeComponent.prototype.submitState = function (value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    };
    return HomeComponent;
}());
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'home',
        // We need to tell Angular's Dependency Injection which providers are in our app.
        // Our list of styles in our component. We may add more to compose many styles together
        styles: [__webpack_require__(82)],
        // Every Angular template is first compiled by the browser before Angular runs it's compiler
        template: __webpack_require__(75)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */]])
], HomeComponent);



/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });





var MainComponent = (function () {
    function MainComponent(appConfig, authHttp, route) {
        this.appConfig = appConfig;
        this.authHttp = authHttp;
        this.route = route;
        this.name = null;
        this.userdetails = "Area of expertise:" +
            "No. of years experience:    " +
            "Location:  " +
            "How can we help you to find a better job:";
        this.name = JSON.parse(localStorage.getItem("user")).firstName;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.submitDetails = function () {
        var _this = this;
        var obj = {
            "reqId": 123,
            "type": null,
            "message": this.userdetails,
            "createdTs": null,
            "updatedTs": null
        };
        this.authHttp.post(this.appConfig.serverHost + "/service/users/skills", obj).subscribe(function (res) {
            console.log(res);
            _this.route.navigate(['regconf']);
        });
    };
    return MainComponent;
}());
MainComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'user-home',
        styles: [__webpack_require__(83)],
        template: __webpack_require__(76)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_3__common_auth__["b" /* AuthHttp */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
], MainComponent);



/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });


var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegConfComponent; });





var RegConfComponent = (function () {
    function RegConfComponent(appConfig, authHttp, route) {
        this.appConfig = appConfig;
        this.authHttp = authHttp;
        this.route = route;
        this.name = null;
        this.name = JSON.parse(localStorage.getItem("user")).firstName;
    }
    RegConfComponent.prototype.ngOnInit = function () {
    };
    return RegConfComponent;
}());
RegConfComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(77)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_3__common_auth__["b" /* AuthHttp */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
], RegConfComponent);



/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signon_provider__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOnComponent; });
/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />





var SignOnComponent = (function () {
    function SignOnComponent(route, appState, signOnProvider) {
        this.route = route;
        this.appState = appState;
        this.signOnProvider = signOnProvider;
        this.myLongTitle = "true";
        this.myTheme = "dark";
        this.myWidth = "223";
        this.myClientId = '280072419521-l9s8j0jig6oee7hqrs1a53itd86dre0h.apps.googleusercontent.com';
        console.log('Test is the best');
    }
    SignOnComponent.prototype.ngOnInit = function () {
    };
    SignOnComponent.prototype.onGoogleSignInSuccess = function (event) {
        var _this = this;
        var googleUser = event.googleUser;
        var profile = googleUser.getBasicProfile();
        console.log('Name: ' + profile.getName());
        this.appState.set("name", profile.getName());
        var usrObj = { "googleToken": googleUser.getAuthResponse().id_token, "email": profile.getEmail(), "password": "" };
        this.signOnProvider.signIn(usrObj)
            .subscribe(function (user) {
            _this.appState.set("email", profile.getEmail());
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('user_token', user.jwtToken);
            _this.route.navigate(['main']);
        });
    };
    return SignOnComponent;
}());
SignOnComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'signon',
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__signon_provider__["a" /* SignOnProvider */]
        ],
        styles: ["\n  "],
        template: __webpack_require__(78),
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_4__signon_provider__["a" /* SignOnProvider */]])
], SignOnComponent);



/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\nnav {\n  margin-top: 16px; }\n\nnav a {\n  background-color: #00838F;\n  color: white;\n  padding: 8px 16px;\n  margin: 8px;\n  vertical-align: middle;\n  line-height: 1.25;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n", ""]);

// exports


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;    \n  background-color: #2e3141;\n  color: #ffffff;\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  /*font-size: 16.5pt;font-weight: 300;line-height: 1.65;*/\n}\n\na.active {\n  background-color: gray;\n}\n  \nh1 {\n  letter-spacing: 6px\n}\n\n#header{    \n  border-bottom: solid 2px rgba(255, 255, 255, 0.125);\n}\n\n.w3-row-padding img {\n  margin-bottom: 12px\n}\n\nfooter{\n  font-size: 10pt;\n}\n\na.active {  \n  background-color: gray;\n}", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/\n#home {\n    margin-top: 64px;\n    margin-bottom: 64px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "#header{\n    margin-top: 1px;\n    margin-bottom: 1px;\n}", ""]);

// exports


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "h1 {\n  color: #00BCD4;\n}", ""]);

// exports


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = "\n<main>\n    <router-outlet></router-outlet>\n</main>\n<footer class=\"w3-container w3-padding-64 w3-center\">\n    <p>&copy;CareerRail</p>\n</footer>"

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-padding-64 w3-center w3-opacity\">\n    <h1 id=\"header\">HONU</h1>\n</Header>\n<div class=\"w3-content\" style=\"max-width:1500px\">\n  <!-- Header -->\n  <div class=\"w3-container w3-center\">\n    <div class=\"w3-panel\"> <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\" [routerLink]=\" ['/signon'] \">Resume & Cover Letter</button>      </div>\n    <div class=\"w3-panel\"> <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\">Mock Interview</button> </div>\n    <div class=\"w3-panel\">\n      <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\">Career Advice</button> </div>\n    <div class=\"w3-panel\">\n      <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\">Coach & Mentor</button> </div>\n  </div>\n  <!-- End Page Content -->\n</div>"

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-center w3-opacity\">\n    <h1 id=\"header\">HONU</h1>\n</Header>\n<div class=\"w3-row\">\n    <div class=\"w3-container\">Hi {{name}}\n    </div>\n</div>\n\n<div class=\"w3-row\">\n    <div class=\"w3-container\">Thank you for your interest\n    </div>\n</div>\n\n\n\n<div class=\"w3-row\" style=\"margin-top: 20px;\">\n    <div class=\"w3-container w3-quarter\"><label>Details About Yourself :</label>\n    </div>\n    <div class=\"w3-container w3-half\">\n        <textarea [(ngModel)]=\"userdetails\" class=\"w3-text\" rows=\"10\" style=\"width: 100%;\">Industry:    \n</textarea>\n    </div>\n    <div class=\"w3-container w3-quarter\">\n    </div>\n</div>\n<div class=\"w3-row\">\n    <div class=\"w3-container w3-quarter\">\n    </div>\n    <div class=\"w3-container w3-half\" style=\"text-align: right;\">\n <button class=\"w3-btn w3-grey w3-round\"  (click)=\"submitDetails()\">Submit</button>\n    </div>\n    <div class=\"w3-container w3-quarter\">\n    </div>\n</div>"

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-center w3-opacity\">\n    <h1 id=\"header\">HONU</h1>\n</Header>\n\n\n<div class=\"w3-row\">\n    <div class=\"w3-container\">Thank you {{name}} !!! for your interest. Will get back to you shortly\n    </div>\n</div>\n\n<div class=\"w3-row w3-center\">\n    <div class=\"w3-container\"> <button class=\"w3-btn w3-grey w3-round\"  routerLink=\"/home\">Home Page</button>\n    </div>\n</div>\n"

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-padding-64 w3-center w3-opacity\">\n    <h1 id=\"header\">HONU</h1>\n</Header>\n<div class=\"w3-row w3-padding-8\">\n  <div class=\"w3-col w3-container\" style=\"width:20%\"></div>\n  <div class=\"w3-col w3-container\" style=\"width:60%\"><google-signin [clientId]=\"myClientId\" [width]=\"myWidth\" [theme]=\"myTheme\" [scope]=\"myScope\" [longTitle]=\"myLongTitle\"\n            (googleSignInSuccess)=\"onGoogleSignInSuccess($event)\"></google-signin></div>\n  <div class=\"w3-col w3-container\" style=\"width:20%\"></div>\n</div>\n<div class=\"w3-row w3-padding-8\">\n  <div class=\"w3-col w3-container\" style=\"width:20%\"></div>\n  <div class=\"w3-col w3-container\" style=\"width:80%\"><input type=\"text\" class=\"w3-text\" style=\"width: 223px;\" placeholder=\"Email\">\n </div>\n <div class=\"w3-row\">\n  <div class=\"w3-col w3-container\" style=\"width:35%\"></div>\n  <div class=\"w3-col w3-container w3-padding-16\" style=\"width:65%\"><button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:100px\">Submit</button>\n </div>\n"

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(22)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });


var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], AppState);



/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(22)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(70);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(71);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(72);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(0);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authguard_provider__ = __webpack_require__(60);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authguard_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authhttp_provider__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authhttp_provider__["a"]; });




/***/ })

},[223]);
//# sourceMappingURL=main.bundle.js.map