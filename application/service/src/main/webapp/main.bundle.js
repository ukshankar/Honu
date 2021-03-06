webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(73);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_signon__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_main__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_regconf__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_google__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_signon__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_config__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_contactus_contactus_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_13__services_signon__["a" /* SignonService */], __WEBPACK_IMPORTED_MODULE_14__services_utils__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_15__services_config__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_16__guards__["a" /* AuthGuard */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_signon__["a" /* SignonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_main__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_regconf__["a" /* RegconfComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_google__["a" /* GoogleSignInComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_contactus_contactus_component__["a" /* ContactusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* PreloadAllModules */] }),
            __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["a" /* ToastyModule */].forRoot()
        ],
        providers: [APP_PROVIDERS],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_signon__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_regconf__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contactus_contactus_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });







var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_home__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__components_home__["a" /* HomeComponent */] },
    { path: 'signon', component: __WEBPACK_IMPORTED_MODULE_1__components_signon__["a" /* SignonComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__components_signup__["a" /* SignupComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_5__components_contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__components_main__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards__["a" /* AuthGuard */]] },
    { path: 'regconf', component: __WEBPACK_IMPORTED_MODULE_4__components_regconf__["a" /* RegconfComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards__["a" /* AuthGuard */]] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* unused harmony export GoogleSignInSuccess */
/* unused harmony export GoogleSignInFailure */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleSignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    function GoogleSignInComponent(route) {
        this.route = route;
        this.id = 'google-signin2';
        this.googleSignInSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.googleSignInFailure = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
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
        if ("undefined" === typeof gapi) {
            this.route.navigate(['/']);
            return;
        }
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], GoogleSignInComponent.prototype, "scope", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "width", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "height", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "longTitle", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], GoogleSignInComponent.prototype, "theme", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], GoogleSignInComponent.prototype, "clientId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], GoogleSignInComponent.prototype, "cookiePolicy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], GoogleSignInComponent.prototype, "fetchBasicProfile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], GoogleSignInComponent.prototype, "hostedDomain", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], GoogleSignInComponent.prototype, "openidRealm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], GoogleSignInComponent.prototype, "googleSignInSuccess", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], GoogleSignInComponent.prototype, "googleSignInFailure", void 0);
GoogleSignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'google-signin',
        template: '<div [id]="id"></div>',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], GoogleSignInComponent);

var _a, _b, _c;
//# sourceMappingURL=google.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_component__ = __webpack_require__(109);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__google_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(toastyService, toastyConfig) {
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.toastyConfig.theme = 'default';
        this.toastyConfig.position = "top-center";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showMessage = function () {
        //this.toastyService.default('Hi there');
        var toastOptions = {
            title: "Feature",
            msg: "Coming Soon ...",
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        this.toastyService.info(toastOptions);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(configService, httpService, route, formBuilder) {
        this.configService = configService;
        this.httpService = httpService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.name = null;
        this.aoiList = [{ value: "Software Engineer", id: "softeng" }, { value: "Customer Service Representative", id: "csr" }, { value: "Business Analyst", id: "ba" }, { value: "Other", id: "other" }];
        this.userdetails = "";
        this.name = JSON.parse(localStorage.getItem("user")).firstName;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            aoi: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            exp: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            message: [, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            location: [],
            otheraoi: []
        });
        /*this.httpService.get(this.configService.serviceHost + "calendar/events")
                       .subscribe(result => {
                         this.slotList =result.json()
                        });*/
    };
    MainComponent.prototype.submitForm = function (value) {
        var _this = this;
        this.httpService.post(this.configService.serviceHost + "users/skills", value).subscribe(function (res) {
            console.log(res);
            _this.route.navigate(['regconf']);
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(186),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_config__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_config__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_utils__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utils__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], MainComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegconfComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegconfComponent = (function () {
    function RegconfComponent() {
        this.name = null;
        this.name = JSON.parse(localStorage.getItem("user")).firstName;
    }
    RegconfComponent.prototype.ngOnInit = function () {
    };
    return RegconfComponent;
}());
RegconfComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-regconf',
        template: __webpack_require__(187),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], RegconfComponent);

//# sourceMappingURL=regconf.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_signon_signon_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignonComponent; });
/// <reference path="../../../../node_modules/@types/gapi.auth2/index.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignonComponent = (function () {
    function SignonComponent(route, signonService, zone, formBuilder) {
        this.route = route;
        this.signonService = signonService;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.myLongTitle = "true";
        this.myTheme = "dark";
        this.myWidth = "240";
        this.myClientId = '280072419521-l9s8j0jig6oee7hqrs1a53itd86dre0h.apps.googleusercontent.com';
        this.userAuth = false;
    }
    SignonComponent.prototype.ngOnInit = function () {
        this.signInForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
        });
    };
    SignonComponent.prototype.onGoogleSignInSuccess = function (event) {
        var _this = this;
        this.zone.run(function () {
            var googleUser = event.googleUser;
            var profile = googleUser.getBasicProfile();
            console.log('Name: ' + profile.getName());
            _this.usrObj = { "googleToken": googleUser.getAuthResponse().id_token, "email": profile.getEmail(), "password": "" };
            _this.userAuth = true;
            _this.signIn(_this.usrObj);
        });
    };
    SignonComponent.prototype.signIn = function (usrObj) {
        var _this = this;
        this.signonService.signIn(usrObj)
            .subscribe(function (user) {
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('user_token', user.jwtToken);
            _this.route.navigate(['main']);
        });
    };
    return SignonComponent;
}());
SignonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-signon',
        template: __webpack_require__(188),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_signon_signon_service__["a" /* SignonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_signon_signon_service__["a" /* SignonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], SignonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signon.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_component__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])()
], AuthGuard);

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signon_service__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signon_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('jwt_header', "" + localStorage.getItem('user_token'));
    };
    HttpService.prototype.getPresignOn = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.postPresignOn = function (url, data) {
        return this.http.post(url, data);
    };
    HttpService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpService.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "nav {\r\n  margin-top: 16px;\r\n}\r\n\r\nnav a {\r\n  background-color: #00838F;\r\n  color: white;\r\n  padding: 8px 16px;\r\n  margin: 8px;\r\n  vertical-align: middle;\r\n  line-height: 1.25;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: 4px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<footer class=\"w3-container w3-padding-64 w3-center\">\r\n    <span>&copy;CareerRail</span> <span style=\"margin-left: 20px;\"><a style=\"text-decoration: none;\" [routerLink]=\"['/contactus']\">ContactUs </a></span>\r\n</footer>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" >\r\n    <div class=\"w3-container w3-panel w3-padding-64 w3-center w3-opacity\">\r\n      <h1 id=\"header\"><a [routerLink]=\"['/home']\" style=\"text-decoration:none;\">HONU</a></h1>\r\n    </div>\r\n</Header>\r\n<div class=\"w3-content w3-section w3-margin\" style=\"max-width:1500px; text-align: justify; text-justify: inter-word;\">\r\nCareerRail was conceived with a singular mission, to help professionals remove roadblocks and grow in their careers. \r\nWe at CareerRail understand that the real challenge in the age of information is too much information. This primarily creates difficulty for anyone trying to achieve focused growth. \r\nOur aim is to help by providing personalized career services that meet your individual needs.\r\n</div>\r\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" >\r\n    <div class=\"w3-container w3-panel w3-padding-48 w3-center w3-opacity\">\r\n    <h1 id=\"header\"><a [routerLink]=\"['/home']\" style=\"text-decoration:none;\">HONU</a></h1>\r\n    </div>\r\n</Header>\r\n<div class=\"w3-content\" style=\"max-width:1500px\">\r\n  <!-- Header -->\r\n  <div class=\"w3-container w3-center\">\r\n    <div class=\"w3-panel\"> <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\" [routerLink]=\" ['/signon'] \">Mock Interview</button> </div>\r\n    <div class=\"w3-panel\"> <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\" [routerLink]=\" ['/signon'] \">Resume & Cover Letter</button>      </div>\r\n    <div class=\"w3-panel\">\r\n      <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\" (click)=\"showMessage()\">Career Advice</button> </div>\r\n     <div class=\"w3-panel\">\r\n      <button class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:350px\" (click)=\"showMessage()\">Coach & Mentor</button> </div>\r\n  </div>\r\n  <ng2-toasty></ng2-toasty>\r\n  <!-- End Page Content -->\r\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-center w3-opacity\">\r\n   <h1 id=\"header\"><a [routerLink]=\"['/home']\" style=\"text-decoration:none;\">HONU</a></h1>\r\n</Header>\r\n<div class=\"w3-row\">\r\n  <div class=\"w3-container\">Hi {{name}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"w3-row\">\r\n  <div class=\"w3-container\">Thank you for your interest\r\n  </div>\r\n</div>\r\n\r\n\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm(registerForm.value)\">\r\n<div class=\"w3-row\" style=\"margin-top: 20px;\">\r\n\r\n  <div class=\"w3-container w3-quarter\"><label>Category:</label>\r\n  </div>\r\n  <div class=\"w3-container w3-half\">\r\n    <select class=\"w3-select\" formControlName=\"aoi\">\r\n    <option value=\"\" disabled selected>Choose your category</option>\r\n    <option *ngFor=\"let aoi of aoiList\" [ngValue]=\"aoi.id\">{{aoi.value}}</option>\r\n    </select>\r\n    <input placeholder=\"Enter area of interest\" *ngIf=\"registerForm.get('aoi').value ==='other'\"  class=\"w3-input w3-border\" type=\"text\" formControlName=\"otheraoi\">\r\n    <p *ngIf=\"(registerForm.controls.aoi.touched && registerForm.controls.aoi.errors)||(registerForm.get('aoi').value =='other' && registerForm.controls.otheraoi.touched && registerForm.controls.otheraoi.errors)\">This field is required!</p>\r\n  </div>\r\n  <div class=\"w3-container w3-quarter\">\r\n  </div>\r\n</div>\r\n<div class=\"w3-row\" style=\"margin-top: 20px;\">\r\n  <div class=\"w3-container w3-quarter\"><label>No. of years experience:</label>\r\n  </div>\r\n  <div class=\"w3-container w3-half\">\r\n    <select class=\"w3-select\" formControlName=\"exp\">\r\n  <option value=\"\" disabled selected>Choose years</option>\r\n  <option value=\"1\">0-2</option>\r\n  <option value=\"2\">3-5</option>\r\n  <option value=\"3\">5-10</option>\r\n  <option value=\"3\">>10</option>\r\n</select>\r\n       <p *ngIf=\"registerForm.controls.exp.touched && registerForm.controls.exp.errors\">This field is required!</p>\r\n\r\n  </div>\r\n  <div class=\"w3-container w3-quarter\">\r\n  </div>\r\n</div>\r\n<div class=\"w3-row\" style=\"margin-top: 20px;\">\r\n  <div class=\"w3-container w3-quarter\"><label>Location</label>\r\n  </div>\r\n  <div class=\"w3-container w3-half\">\r\n    <input class=\"w3-input w3-border\" type=\"text\" formControlName=\"location\" placeholder=\"e.g Toronto, Montreal\">\r\n  </div>\r\n  <div class=\"w3-container w3-quarter\">\r\n  </div>\r\n</div>\r\n<div class=\"w3-row\" style=\"margin-top: 20px;\">\r\n  <div class=\"w3-container w3-quarter\"><label>Details about yourself:</label>\r\n  </div>\r\n  <div class=\"w3-container w3-half\">\r\n    <textarea formControlName=\"message\" class=\"w3-text\" rows=\"10\" style=\"width: 100%;\"></textarea>\r\n        <p *ngIf=\"registerForm.controls.message.touched && registerForm.controls.message?.errors\">This field is required!</p>\r\n\r\n  </div>\r\n  <div class=\"w3-container w3-quarter\">\r\n  </div>\r\n</div>\r\n<!--\r\n<div class=\"w3-row\" style=\"margin-top: 20px;\">\r\n  <div class=\"w3-container w3-quarter\"><label>Available Timeslot:</label>\r\n  </div>\r\n  <div class=\"w3-container w3-half\">\r\n<select class=\"w3-select\" [(ngModel)]=\"form.timeSlot\">\r\n    <option value=\"\" disabled selected>Choose your timeslot</option>\r\n    <option *ngFor=\"let slot of slotList\" [ngValue]=\"slot.id\">{{slot.start.dateTime.value | date: 'medium'}} - {{slot.end.dateTime.value | date: 'shortTime'}}</option>\r\n</select>\r\n  </div>\r\n  <div class=\"w3-container w3-quarter\">\r\n  </div>\r\n</div>\r\n-->\r\n<div class=\"w3-padding-small\"></div>\r\n<div class=\"w3-row\">\r\n  <div class=\"w3-container w3-quarter\">\r\n  </div>\r\n  <div class=\"w3-container w3-half\" style=\"text-align: right;\">\r\n    <button class=\"w3-btn w3-grey w3-round\" type=\"submit\" [disabled]=\"!registerForm.valid\">Submit</button>\r\n  </div>\r\n  <div class=\"w3-container w3-quarter\">\r\n  </div>\r\n</div>\r\n  </form>\r\n\r\n\r\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-center w3-opacity\">\r\n    <h1 id=\"header\">HONU</h1>\r\n</Header>\r\n\r\n\r\n<div class=\"w3-row\">\r\n    <div class=\"w3-container\">Thank you {{name}} !!! for your interest. Will get back to you shortly\r\n    </div>\r\n</div>\r\n\r\n<div class=\"w3-row w3-center\">\r\n    <div class=\"w3-container\"> <button class=\"w3-btn w3-grey w3-round\" routerLink=\"/home\">Home Page</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-padding-48 w3-center w3-opacity\">\r\n   <h1 id=\"header\"><a [routerLink]=\"['/home']\" style=\"text-decoration:none;\">HONU</a></h1>\r\n</Header>\r\n<div class=\"w3-row\">\r\n  <div class=\"w3-col s2\"><p></p></div>\r\n  <div class=\"w3-col s6\">Sign in</div>\r\n  <div class=\"w3-col s2  w3-center\"></div>\r\n</div>\r\n<div class=\"w3-row w3-margin-top\">\r\n  <div class=\"w3-col s2  w3-center\"><p></p></div>\r\n  <div class=\"w3-col s8  w3-center\"><google-signin  [clientId]=\"myClientId\" [width]=\"myWidth\" [theme]=\"myTheme\" [scope]=\"myScope\" [longTitle]=\"myLongTitle\"\r\n      (googleSignInSuccess)=\"onGoogleSignInSuccess($event)\"></google-signin></div>\r\n  <div class=\"w3-col s2  w3-center\"><p></p></div>\r\n</div>\r\n<div class=\"w3-row w3-margin-top w3-center\">\r\n  or\r\n</div>\r\n<form [formGroup]=\"signInForm\" (ngSubmit)=\"signIn(signInForm.value)\">\r\n<div class=\"w3-row w3-margin-top\">\r\n  <div class=\"w3-col s2  w3-center\"><p></p></div>\r\n  <div class=\"w3-col s8  w3-center\">\r\n<input class=\"w3-input\" type=\"text\" placeholder=\"Email\" formControlName=\"email\"></div>\r\n  <div class=\"w3-col s2  w3-center\"><p></p></div>\r\n</div>\r\n<div class=\"w3-row w3-margin-top\">\r\n  <div class=\"w3-col s2  w3-center\"><p></p></div>\r\n  <div class=\"w3-col s8  w3-center\">\r\n<input class=\"w3-input\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></div>\r\n  <div class=\"w3-col s2  w3-center\"><p></p></div>\r\n</div>\r\n<div class=\"w3-row w3-margin-top\">\r\n  <div class=\"w3-col s2 w3-center\"><p></p></div>\r\n  <div class=\"w3-col s8 w3-center\"><button class=\"w3-btn\" style=\"float: right;\" type=\"submit\" [disabled]=\"!signInForm.valid\">Sign in</button></div>\r\n  <div class=\"w3-col s2 w3-center\"><p></p></div>\r\n</div>\r\n</form>\r\n<div class=\"w3-row w3-margin-top\">\r\n  <div class=\"w3-col s4  w3-center\"><p></p></div>\r\n  <div class=\"w3-col s8  w3-center\"><a [routerLink]=\" ['/signup'] \">Create an account</a></div>\r\n  <div class=\"w3-col s3  w3-center\"><p></p></div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<Header id=\"home\" class=\"w3-container w3-panel w3-padding-64 w3-center w3-opacity\">\r\n  <h1 id=\"header\">HONU</h1>\r\n</Header>\r\n<div class=\"w3-center  w3-row \">\r\n  <div class=\"w3-col s3\">Email</div>\r\n  <div class=\"w3-col s8\"><input class=\"w3-input w3-border\" type=\"text\" [(ngModel)]=\"user.email\">\r\n</div>\r\n<div class=\"w3-center  w3-row w3-padding-64\">\r\n  <div class=\"w3-col s3\">Password</div>\r\n  <div class=\"w3-col s8\"><input class=\"w3-input w3-border\" type=\"password\" [(ngModel)]=\"user.password\">\r\n</div>\r\n<div class=\"w3-center  w3-row w3-padding-64\">\r\n  <div class=\"w3-col s3\">Confirm Password</div>\r\n  <div class=\"w3-col s8\"><input class=\"w3-input w3-border\" type=\"password\" [(ngModel)]=\"user.password2\">\r\n</div>\r\n<div class=\"w3-row w3-padding-64\">\r\n  <div class=\"w3-col w3-container\" style=\"width:20%\"></div>\r\n  <div class=\"w3-col w3-container\"><button (click)=\"submit()\" class=\"w3-btn-block w3-grey w3-round\" style=\"max-width:100px\">Submit</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignonService = (function () {
    function SignonService(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        console.log('Hello Home Provider');
    }
    SignonService.prototype.signIn = function (user) {
        return this.httpService.postPresignOn(this.configService.serviceHost + 'signon', user)
            .map(function (res) { return (res.json()); });
    };
    SignonService.prototype.signUp = function (user) {
        return this.httpService.postPresignOn(this.configService.serviceHost + 'signup', user)
            .map(function (res) { return (res.json()); });
    };
    return SignonService;
}());
SignonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_utils__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utils__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__config_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], SignonService);

var _a, _b;
//# sourceMappingURL=signon.service.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-contactus',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], ContactusComponent);

//# sourceMappingURL=contactus.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(111);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_component__ = __webpack_require__(112);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__regconf_component__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__regconf_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signon_component__ = __webpack_require__(114);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signon_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_signon_signon_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(route, signonService) {
        this.route = route;
        this.signonService = signonService;
        this.user = {
            "email": "",
            "password": "",
            "password2": ""
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.user.email);
        this.signonService.signUp({ "email": this.user.email, "password": this.user.password })
            .subscribe(function (user) {
            console.log(user);
            //       localStorage.setItem('user', JSON.stringify(user));
            //       localStorage.setItem('user_token', user.jwtToken);
            _this.route.navigate(['regconf']);
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(189),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_signon_signon_service__["a" /* SignonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_signon_signon_service__["a" /* SignonService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(116);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = (function () {
    function ConfigService() {
        this.serverHost = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].service.host;
        this.serviceHost = this.serverHost + "/services/";
    }
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_service__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__config_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    service: {
        host: ''
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map