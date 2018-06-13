(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/congrats/congrats.component */ "./src/app/user/congrats/congrats.component.ts");
/* harmony import */ var _user_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/forgot-pass/forgot-pass.component */ "./src/app/user/forgot-pass/forgot-pass.component.ts");
/* harmony import */ var _profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/user-info/user-info.component */ "./src/app/profile/user-info/user-info.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _main_page_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-page/chat/chat.component */ "./src/app/main-page/chat/chat.component.ts");
/* harmony import */ var _main_page_history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/history/history.component */ "./src/app/main-page/history/history.component.ts");
/* harmony import */ var _main_page_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-page/search/search.component */ "./src/app/main-page/search/search.component.ts");
/* harmony import */ var _main_page_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-page/settings/settings.component */ "./src/app/main-page/settings/settings.component.ts");
/* harmony import */ var _main_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-page/profile/profile.component */ "./src/app/main-page/profile/profile.component.ts");
/* harmony import */ var _main_page_search_visit_page_visit_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-page/search/visit-page/visit-page.component */ "./src/app/main-page/search/visit-page/visit-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'congrats', component: _user_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_6__["CongratsComponent"] },
            { path: 'forgot-pass', component: _user_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'signup', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
        ],
    },
    {
        path: 'user-info',
        component: _profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__["UserInfoComponent"]
    },
    {
        path: 'main',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__["MainPageComponent"],
        children: [
            {
                path: 'search',
                component: _main_page_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"]
            },
            { path: 'search/:id', component: _main_page_search_visit_page_visit_page_component__WEBPACK_IMPORTED_MODULE_15__["VisitPageComponent"] },
            { path: 'chat', component: _main_page_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"] },
            { path: 'history', component: _main_page_history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"] },
            { path: 'settings', component: _main_page_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"] },
            { path: 'profile', component: _main_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"] }
        ],
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _user_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_6__["CongratsComponent"], _user_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 601px) {\n\t.humburger-icon {\n\t\tdisplay: inline-block;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container *ngIf=\"!isUserLoggedIn()\"\n\t(window:resize)=\"onResizez($event)\">\n\t<mat-sidenav class=\"sidenav\" #sidenav>\n\t\t<ul class=\"sidenav\">\n\t\t\t<li><a mat-button routerLink=\"/\" class=\"sidenav__button\">Home</a></li>\n\t\t\t<li><a mat-button routerLink=\"login\" class=\"sidenav__button\">Login</a></li>\n\t\t\t<li><a mat-button routerLink=\"signup\" class=\"sidenav__button\">Signup</a></li>\n\t\t</ul>\n\t</mat-sidenav>\n\t<mat-sidenav-content>\n\t\t<nav>\n\t\t\t<div class=\"container\">\n\t\t\t\t<a class=\"brand-logo\">Matcha</a>\n\t\t\t\t<a *ngIf=\"windowWidth <= 992\"\n\t\t\t\t(click)=\"sidenav.toggle()\"\n\t\t\t\tmat-button\n\t\t\t\trouterLink=\".\">\n\t\t\t\t\t<i class=\"material-icons humburger-icon\">menu</i>\n\t\t\t\t</a>\n\t\t\t\t<ul class=\"right hide-on-med-and-down\">\n\t\t\t\t\t<li><a routerLink=\"/\">Home</a></li>\n\t\t\t\t\t<li><a routerLink=\"login\">Login</a></li>\n\t\t\t\t\t<li><a routerLink=\"signup\">Register</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class=\"section  cyan lighten-4\" style=\"height: 65em\">\n\t\t\t<div class=\"row container\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</mat-sidenav-content>\n</mat-sidenav-container> -->\n\n<!-- <router-outlet *ngIf=\"isUserLoggedIn()\"></router-outlet> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService) {
        this.cookieService = cookieService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _material_module_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-module/material.module */ "./src/app/material-module/material.module.ts");
/* harmony import */ var _user_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/congrats/congrats.component */ "./src/app/user/congrats/congrats.component.ts");
/* harmony import */ var _user_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/forgot-pass/forgot-pass.component */ "./src/app/user/forgot-pass/forgot-pass.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/user-info/user-info.component */ "./src/app/profile/user-info/user-info.component.ts");
/* harmony import */ var _profile_user_info_birthdate_birthdate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/user-info/birthdate/birthdate.component */ "./src/app/profile/user-info/birthdate/birthdate.component.ts");
/* harmony import */ var _profile_user_info_interests_interests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/user-info/interests/interests.component */ "./src/app/profile/user-info/interests/interests.component.ts");
/* harmony import */ var _profile_user_info_gender_gender_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/user-info/gender/gender.component */ "./src/app/profile/user-info/gender/gender.component.ts");
/* harmony import */ var _profile_user_info_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/user-info/preferences/preferences.component */ "./src/app/profile/user-info/preferences/preferences.component.ts");
/* harmony import */ var _profile_user_info_biography_biography_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/user-info/biography/biography.component */ "./src/app/profile/user-info/biography/biography.component.ts");
/* harmony import */ var _profile_user_info_profile_photo_profile_photo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/user-info/profile-photo/profile-photo.component */ "./src/app/profile/user-info/profile-photo/profile-photo.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _main_page_search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main-page/search/search.component */ "./src/app/main-page/search/search.component.ts");
/* harmony import */ var _main_page_chat_chat_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main-page/chat/chat.component */ "./src/app/main-page/chat/chat.component.ts");
/* harmony import */ var _main_page_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main-page/settings/settings.component */ "./src/app/main-page/settings/settings.component.ts");
/* harmony import */ var _profile_user_info_first_last_name_first_last_name_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile/user-info/first-last-name/first-last-name.component */ "./src/app/profile/user-info/first-last-name/first-last-name.component.ts");
/* harmony import */ var _profile_user_info_login_email_password_login_email_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/user-info/login-email-password/login-email-password.component */ "./src/app/profile/user-info/login-email-password/login-email-password.component.ts");
/* harmony import */ var _main_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main-page/profile/profile.component */ "./src/app/main-page/profile/profile.component.ts");
/* harmony import */ var _main_page_profile_avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./main-page/profile/avatar-photo/avatar-photo.component */ "./src/app/main-page/profile/avatar-photo/avatar-photo.component.ts");
/* harmony import */ var _main_page_profile_short_info_short_info_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./main-page/profile/short-info/short-info.component */ "./src/app/main-page/profile/short-info/short-info.component.ts");
/* harmony import */ var _main_page_profile_user_interests_user_interests_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./main-page/profile/user-interests/user-interests.component */ "./src/app/main-page/profile/user-interests/user-interests.component.ts");
/* harmony import */ var _main_page_profile_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./main-page/profile/more-info/more-info.component */ "./src/app/main-page/profile/more-info/more-info.component.ts");
/* harmony import */ var _main_page_profile_profile_biography_profile_biography_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./main-page/profile/profile-biography/profile-biography.component */ "./src/app/main-page/profile/profile-biography/profile-biography.component.ts");
/* harmony import */ var _main_page_profile_user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./main-page/profile/user-gallery/user-gallery.component */ "./src/app/main-page/profile/user-gallery/user-gallery.component.ts");
/* harmony import */ var _main_page_history_history_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./main-page/history/history.component */ "./src/app/main-page/history/history.component.ts");
/* harmony import */ var _main_page_search_visit_page_visit_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./main-page/search/visit-page/visit-page.component */ "./src/app/main-page/search/visit-page/visit-page.component.ts");
/* harmony import */ var _main_page_settings_change_profile_photo_change_profile_photo_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./main-page/settings/change-profile-photo/change-profile-photo.component */ "./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.ts");
/* harmony import */ var _main_page_settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./main-page/settings/change-email/change-email.component */ "./src/app/main-page/settings/change-email/change-email.component.ts");
/* harmony import */ var _main_page_settings_change_login_change_login_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./main-page/settings/change-login/change-login.component */ "./src/app/main-page/settings/change-login/change-login.component.ts");
/* harmony import */ var _main_page_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./main-page/settings/change-password/change-password.component */ "./src/app/main-page/settings/change-password/change-password.component.ts");
/* harmony import */ var _main_page_settings_change_first_name_change_first_name_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./main-page/settings/change-first-name/change-first-name.component */ "./src/app/main-page/settings/change-first-name/change-first-name.component.ts");
/* harmony import */ var _main_page_settings_change_last_name_change_last_name_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./main-page/settings/change-last-name/change-last-name.component */ "./src/app/main-page/settings/change-last-name/change-last-name.component.ts");
/* harmony import */ var _main_page_settings_change_gender_change_gender_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./main-page/settings/change-gender/change-gender.component */ "./src/app/main-page/settings/change-gender/change-gender.component.ts");
/* harmony import */ var _main_page_settings_change_preferences_change_preferences_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./main-page/settings/change-preferences/change-preferences.component */ "./src/app/main-page/settings/change-preferences/change-preferences.component.ts");
/* harmony import */ var _main_page_settings_change_biography_change_biography_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./main-page/settings/change-biography/change-biography.component */ "./src/app/main-page/settings/change-biography/change-biography.component.ts");
/* harmony import */ var _main_page_settings_change_interests_change_interests_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./main-page/settings/change-interests/change-interests.component */ "./src/app/main-page/settings/change-interests/change-interests.component.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var _main_page_chat_messenger_messenger_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./main-page/chat/messenger/messenger.component */ "./src/app/main-page/chat/messenger/messenger.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































// import { MatSnackBar } from '@angular/material';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["routingComponents"],
                _user_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_11__["CongratsComponent"],
                _user_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPassComponent"],
                _profile_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_14__["UserInfoComponent"],
                _profile_user_info_birthdate_birthdate_component__WEBPACK_IMPORTED_MODULE_15__["BirthdateComponent"],
                _profile_user_info_interests_interests_component__WEBPACK_IMPORTED_MODULE_16__["InterestsComponent"],
                _profile_user_info_gender_gender_component__WEBPACK_IMPORTED_MODULE_17__["GenderComponent"],
                _profile_user_info_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_18__["PreferencesComponent"],
                _profile_user_info_biography_biography_component__WEBPACK_IMPORTED_MODULE_19__["BiographyComponent"],
                _profile_user_info_profile_photo_profile_photo_component__WEBPACK_IMPORTED_MODULE_20__["ProfilePhotoComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_21__["MainPageComponent"],
                _main_page_search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
                _main_page_chat_chat_component__WEBPACK_IMPORTED_MODULE_23__["ChatComponent"],
                _main_page_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"],
                _profile_user_info_first_last_name_first_last_name_component__WEBPACK_IMPORTED_MODULE_25__["FirstLastNameComponent"],
                _profile_user_info_login_email_password_login_email_password_component__WEBPACK_IMPORTED_MODULE_26__["LoginEmailPasswordComponent"],
                _main_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"],
                _main_page_profile_avatar_photo_avatar_photo_component__WEBPACK_IMPORTED_MODULE_28__["AvatarPhotoComponent"],
                _main_page_profile_short_info_short_info_component__WEBPACK_IMPORTED_MODULE_29__["ShortInfoComponent"],
                _main_page_profile_user_interests_user_interests_component__WEBPACK_IMPORTED_MODULE_30__["UserInterestsComponent"],
                _main_page_profile_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_31__["MoreInfoComponent"],
                _main_page_profile_profile_biography_profile_biography_component__WEBPACK_IMPORTED_MODULE_32__["ProfileBiographyComponent"],
                _main_page_profile_user_gallery_user_gallery_component__WEBPACK_IMPORTED_MODULE_33__["UserGalleryComponent"],
                _main_page_history_history_component__WEBPACK_IMPORTED_MODULE_34__["HistoryComponent"],
                _main_page_search_visit_page_visit_page_component__WEBPACK_IMPORTED_MODULE_35__["VisitPageComponent"],
                _main_page_settings_change_profile_photo_change_profile_photo_component__WEBPACK_IMPORTED_MODULE_36__["ChangeProfilePhotoComponent"],
                _main_page_settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_37__["ChangeEmailComponent"],
                _main_page_settings_change_login_change_login_component__WEBPACK_IMPORTED_MODULE_38__["ChangeLoginComponent"],
                _main_page_settings_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__["ChangePasswordComponent"],
                _main_page_settings_change_first_name_change_first_name_component__WEBPACK_IMPORTED_MODULE_40__["ChangeFirstNameComponent"],
                _main_page_settings_change_last_name_change_last_name_component__WEBPACK_IMPORTED_MODULE_41__["ChangeLastNameComponent"],
                _main_page_settings_change_gender_change_gender_component__WEBPACK_IMPORTED_MODULE_42__["ChangeGenderComponent"],
                _main_page_settings_change_preferences_change_preferences_component__WEBPACK_IMPORTED_MODULE_43__["ChangePreferencesComponent"],
                _main_page_settings_change_biography_change_biography_component__WEBPACK_IMPORTED_MODULE_44__["ChangeBiographyComponent"],
                _main_page_settings_change_interests_change_interests_component__WEBPACK_IMPORTED_MODULE_45__["ChangeInterestsComponent"],
                _main_page_chat_messenger_messenger_component__WEBPACK_IMPORTED_MODULE_48__["MessengerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_0__["MaterializeModule"],
                // MatSnackBar,
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_49__["MatSnackBarModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"],
                _websocket_service__WEBPACK_IMPORTED_MODULE_46__["WebsocketService"],
                _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_47__["ChatService"],
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_50__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_50__["HashLocationStrategy"]
                }
                // FormControl
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-service/chat.service.ts":
/*!**********************************************!*\
  !*** ./src/app/chat-service/chat.service.ts ***!
  \**********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    function ChatService(userInfoService, wsService) {
        this.userInfoService = userInfoService;
        this.wsService = wsService;
        this.messages = wsService
            .connect('ws://localhost:8200')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var recievedMessage = JSON.parse(response.data);
            return {
                from_id: recievedMessage.from_id,
                from_login: recievedMessage.from_login,
                from_lastName: recievedMessage.from_lastName,
                from_firstName: recievedMessage.from_firstName,
                from_profilePhoto: recievedMessage.from_profilePhoto,
                to: recievedMessage.to,
                notification: recievedMessage.notification,
                message: recievedMessage.message
            };
        }));
    }
    ChatService.prototype.sendMessage = function (reciever_id, notificationText, messageText) {
        var _this = this;
        this.userInfoService.getUid().subscribe(function (result) {
            var message = {
                from_id: result['id'],
                from_login: result['login'],
                from_lastName: result['lastName'],
                from_firstName: result['firstName'],
                from_profilePhoto: result['profilePhoto'],
                to: reciever_id,
                notification: notificationText,
                message: messageText
            };
            _this.messages.next(message);
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"],
            _websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer pink lighten-2\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col l6 s12\">\n\t\t\t\t<h5 class=\"white-text\">Visit</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"https://profile.intra.42.fr/users/mmotov\">mmotov</a></li>\n\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"https://profile.intra.42.fr/users/dpolosuk\">dpolosuk</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<!-- <h5 class=\"white-text\"></h5> -->\n\t\t\t\t<!-- <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p> -->\n\t\t\t</div>\n\t\t\t<div class=\"col l4 offset-l2 s12\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"footer-copyright\">\n\t\t<div class=\"container\">\n\t\t\t© 2018 Copyright By DROP `-42` FROM `Matcha`;\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#index-page {\n\tbackground-image: url(\"http://localhost:8100/assets/dating.jpg\");\n\n\theight: 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n}\n\n.form-container {\n\tbackground: rgb(255, 255, 255, 0.8);\n\tpadding: 42px;\n}\n\n.sidenav {\n\twidth: 50vw;\n}\n\n.sidenav__button {\n\twidth: 100%;\n\tfont-size: 20px;\n\theight: 50px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\n\t(window:resize)=\"onResizez($event)\">\n\t<mat-sidenav class=\"sidenav pink lighten-2\" #sidenav>\n\t\t<ul class=\"sidenav\">\n\t\t\t<li><a mat-button routerLink=\"/\" class=\"sidenav__button\">Home</a></li>\n\t\t\t<li><a mat-button routerLink=\"login\" class=\"sidenav__button\">Login</a></li>\n\t\t\t<li><a mat-button routerLink=\"signup\" class=\"sidenav__button\">Signup</a></li>\n\t\t</ul>\n\t</mat-sidenav>\n\t<mat-sidenav-content>\n\t\t<nav class=\"pink lighten-2\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<a class=\"brand-logo\">Matcha</a>\n\t\t\t\t<a *ngIf=\"windowWidth <= 992\"\n\t\t\t\t(click)=\"sidenav.toggle()\"\n\t\t\t\tmat-button>\n\t\t\t\t\t<i class=\"material-icons humburger-icon\">menu</i>\n\t\t\t\t</a>\n\t\t\t\t<ul class=\"right hide-on-med-and-down\">\n\t\t\t\t\t<li><a routerLink=\"/\">Home</a></li>\n\t\t\t\t\t<li><a routerLink=\"login\">Login</a></li>\n\t\t\t\t\t<li><a routerLink=\"signup\">Register</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class=\"section  cyan lighten-4\" style=\"height: 80.1vh\" id=\"index-page\">\n\t\t\t<div class=\"row container\">\n\t\t\t\t<h2 *ngIf=\"isHome()\"></h2>\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(cookieService, authorizationService, router) {
        this.cookieService = cookieService;
        this.authorizationService = authorizationService;
        this.router = router;
        this.windowWidth = window.innerWidth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.isUserLoggedIn()) {
            this.authorizationService.loginIfTokensValid();
        }
    };
    HomeComponent.prototype.isHome = function () {
        if (this.router.url === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.onResizez = function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    HomeComponent.prototype.isUserLoggedIn = function () {
        if (this.cookieService.check('AccessToken') &&
            this.cookieService.check('RefreshToken') &&
            this.cookieService.check('ExpireTime')) {
            return true;
        }
        return false;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main-page/chat/chat.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/chat/chat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-box {\n\tmargin: 16px 0 16px;\n}\n\n.connected-user-profile-picture {\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tborder-radius: 50%;\n\twidth: 50px;\n\theight: 50px;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n\n.photo-div {\n\tmargin-right: 30px;\n}\n\n.chat-card{\n\tcursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/main-page/chat/chat.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/chat/chat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\nclass=\"drawer-container\"\n(backdropClick)=\"close('backdrop')\">\n<mat-sidenav\n\tclass=\"drawer-container__sidenav\"\n\t#sidenav\n\t(keydown.escape)=\"close('escape')\"\n\tdisableClose>\n\t<div class=\"container\">\n\t<button\n\t\tmat-icon-button\n\t\t(click)=\"close('toggle button')\">\n\t\t<mat-icon>close</mat-icon>\n\t</button>\n\t</div>\n\t<app-messenger [messages]=\"this.messages\" [current_id]=\"this.current_id\" [reciever_id]=\"this.reciever_id\"></app-messenger>\n</mat-sidenav>\n\n<mat-sidenav-content>\n\t<div class=\"container\">\n\t\t<div class=\"container\" *ngFor=\"let user of connectedUsers\">\n\t\t\t<mat-card class=\"chat-box  blue lighten-4\">\n\t\t\t\t<mat-card-header (click)=\"startChat(user['uid'])\" class=\"chat-card\">\n\t\t\t\t\t<div mat-card-avatar class=\"photo-div\"><img [src]=\"'http://localhost:8100/' + user['profile_photo']\" class=\"connected-user-profile-picture\"/></div>\n\t\t\t\t\t<mat-card-title>{{ user['first_name'] }}  {{ user['last_name'] }}  ({{ user['refresh_token'] }})</mat-card-title>\n\t\t\t\t\t<mat-card-subtitle>Start Chat</mat-card-subtitle>\n\t\t\t\t</mat-card-header>\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-page/chat/chat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/chat/chat.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, authorizationService, userInfoService, cookieService, snackBar) {
        var _this = this;
        this.chatService = chatService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
        this.snackBar = snackBar;
        this.connectedUsers = [];
        this.messages = [];
        this.reason = '';
        chatService.messages.subscribe(function (msg) {
            var id = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'id': msg['from_id']
            };
            _this.userInfoService.sendRequest('ifBlocked', id)
                .toPromise()
                .then(function (data) {
                if (data == false) {
                    if (msg['notification']) {
                        var notification = msg['from_login'] + ': ' + msg['notification'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                    else if (msg['message']) {
                        var notification = msg['from_login'] + ': ' + msg['message'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                }
            }, function (error) {
            });
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        this.userInfoService.sendRequest('findConnected', data)
            .toPromise()
            .then(function (data) {
            _this.connectedUsers = data;
        }, function (error) {
        });
    };
    ChatComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
        // this.getUsersByParams(this.searchParams);
    };
    ChatComponent.prototype.startChat = function (id) {
        var _this = this;
        this.reciever_id = id;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'target_id': this.reciever_id,
        };
        this.userInfoService.sendRequest('getMessagesForChat', data)
            .toPromise()
            .then(function (data) {
            _this.messages = data['messages'];
            _this.current_id = data['current_id'];
        }, function (error) {
        });
        this.sidenav.open();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"])
    ], ChatComponent.prototype, "sidenav", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/main-page/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/main-page/chat/chat.component.css"), __webpack_require__(/*! ../search/search.component.css */ "./src/app/main-page/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/main-page/chat/messenger/messenger.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main-page/chat/messenger/messenger.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar\n{\n  width: 1px;  /* for vertical scrollbars */\n  height: 12px; /* for horizontal scrollbars */\n}\n\n::-webkit-scrollbar-track\n{\n  background: rgba(0, 0, 0, 0.1);\n}\n\n::-webkit-scrollbar-thumb\n{\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.messenger-container {\n\twidth: 100%;\n\theight: 90%;\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\talign-content: center;\n\talign-items: center;\n}\n\n.user-info-field {\n\tcolor: rgba(0,0,0,0.54);\n\tdisplay: flex;\n\twidth: 80%;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.input-field {\n\twidth: 100%;\n}\n\n.all-messages {\n\twidth: 80%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\toverflow-y: scroll;\n\t/* align-items: flex-start; */\n}\n\n.message-send, .message-recieve {\n\tpadding: 8px;\n\tmargin: 0.5rem 0 1rem 0;\n\toverflow-wrap: break-word;\n}\n\n.message-recieve {\n\tfloat: left;\n\tmargin-left: 5px;\n\tmax-width: 80%;\n\ttext-align: left;\n\theight: auto;\n}\n\n.message-send {\n\tfloat: right;\n\tmargin-right: 5px;\n\tmax-width: 80%;\n\ttext-align: left;\n\theight: auto;\n}\n"

/***/ }),

/***/ "./src/app/main-page/chat/messenger/messenger.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main-page/chat/messenger/messenger.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messenger-container\">\n\t<div class=\"user-info-field container\">\n\t\t<mat-form-field class=\"input-field\">\n\t\t\t<textarea\n\t\t\tmaxlength=\"1000\"\n\t\t\tmatInput\n\t\t\tmatTextareaAutosize\n\t\t\tplaceholder=\"Start chating ...\"\n\t\t\tname=\"messenger\"\n\t\t\t[(ngModel)]=\"this.message\"></textarea>\n\t\t</mat-form-field>\n\t\t<button mat-icon-button (click)=\"sendMessage(this.message)\" [disabled]=\"!this.message\">\n\t\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t\t</button>\n\t</div>\n\t<div class=\"all-messages container\">\n\t\t<div class=\"message\" *ngFor=\"let message of messages\">\n\t\t\t<div class=\"message-send card-panel cyan lighten-3\" *ngIf=\"message['current_id'] == current_id\">\n\t\t\t\t{{ message['message'] }}\n\t\t\t</div>\n\t\t\t<div class=\"message-recieve card-panel grey lighten-2\" *ngIf=\"message['current_id'] != current_id\">\n\t\t\t\t{{ message['message'] }}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/chat/messenger/messenger.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main-page/chat/messenger/messenger.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(chatService, authorizationService, userInfoService, cookieService, snackBar) {
        var _this = this;
        this.chatService = chatService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
        this.snackBar = snackBar;
        chatService.messages.subscribe(function (msg) {
            var id = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'id': msg['from_id']
            };
            _this.userInfoService.sendRequest('ifBlocked', id)
                .toPromise()
                .then(function (data) {
                if (data == false) {
                    if (msg['from_id'] == _this.reciever_id) {
                        var newMessages = {
                            'current_id': _this.reciever_id,
                            'target_id': msg['to'],
                            'message': msg['message']
                        };
                        _this.messages.unshift(newMessages);
                    }
                    else {
                        if (msg['message']) {
                            var notification = msg['from_login'] + ': ' + msg['message'];
                            _this.snackBar.open(notification, '', {
                                duration: 7000,
                            });
                        }
                    }
                    if (msg['notification']) {
                        var notification = msg['from_login'] + ': ' + msg['notification'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                }
            }, function (error) {
            });
        });
    }
    MessengerComponent.prototype.ngOnInit = function () {
    };
    MessengerComponent.prototype.sendMessage = function (message) {
        var _this = this;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'target_id': this.reciever_id,
            'message': message
        };
        this.message = "";
        this.chatService.sendMessage(this.reciever_id, "", message);
        this.userInfoService.sendRequest('storeChatMessage', data)
            .toPromise()
            .then(function (data) {
            _this.messages = data['messages'];
            _this.current_id = data['current_id'];
        }, function (error) {
        });
        // this.changeService.changeUserInfo(value, toChange);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessengerComponent.prototype, "reciever_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessengerComponent.prototype, "current_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessengerComponent.prototype, "messages", void 0);
    MessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/main-page/chat/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./messenger.component.css */ "./src/app/main-page/chat/messenger/messenger.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ }),

/***/ "./src/app/main-page/history/history.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-page/history/history.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".history-card {\n\tdisplay: flex;\n\talign-items: center;\n\tcursor: pointer;\n\tmargin: 16px 0 16px 0;\n}\n.like {\n\tbackground-color: #f9f4f4;\n}\n.visit {\n\tbackground-color: #f3f9f8;\n}\n.block {\n\tbackground-color: #e8e8e8;\n}\nh5 {\n\tmargin: 0 0 0 16px;\n}\n.card-avatar {\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tborder-radius: 50%;\n\twidth: 50px;\n\theight: 50px;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n"

/***/ }),

/***/ "./src/app/main-page/history/history.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-page/history/history.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<mat-card\n\t\t*ngFor=\"let user of likedHistory\"\n\t\trouterLink=\"{{ '/main/search/' + user.liked_uid }}\"\n\t\tclass=\"history-card like\">\n\t\t\t<img class=\"card-avatar\" src=\"{{ 'http://localhost:8100/' + user.profile_photo }}\" >\n\t\t\t<h5>{{ user.first_name }} {{ user.last_name }} Liked you</h5>\n\t</mat-card>\n\t<mat-divider *ngIf=\"likedHistory\"></mat-divider>\n\t<mat-card\n\t\t*ngFor=\"let user of visitHistory\"\n\t\trouterLink=\"/main/search/{{ user.current_id == currentUid ? user.target_id : user.current_id }}\"\n\t\tclass=\"history-card visit\">\n\t\t\t<img class=\"card-avatar\" src=\"http://localhost:8100/{{ user.current_id == currentUid ? user.target_photo : user.current_photo }}\" >\n\t\t\t<h5>{{ user.current_id == currentUid ? 'You visited ' : 'You were visited by ' }} {{ user.current_id == currentUid ? user.t_first_name : user.c_first_name }} {{ user.current_id == currentUid ? user.t_last_name : user.c_last_name }}</h5>\n\t</mat-card>\n\t<mat-divider></mat-divider>\n\t<mat-card\n\t\t*ngFor=\"let user of blockHistory\"\n\t\trouterLink=\"/main/search/{{ user.current_id == currentUid ? user.target_id : user.current_id }}\"\n\t\tclass=\"history-card block\">\n\t\t\t<img class=\"card-avatar\" src=\"http://localhost:8100/{{ user.current_id == currentUid ? user.target_photo : user.current_photo }}\" >\n\t\t\t<h5>{{ user.current_id == currentUid ? 'You ' + user.message + 'ed ' : 'You were ' + user.message + 'ed by ' }} {{ user.current_id == currentUid ? user.t_first_name : user.c_first_name }} {{ user.current_id == currentUid ? user.t_last_name : user.c_last_name }}</h5>\n\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/history/history.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-page/history/history.component.ts ***!
  \********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(chatService, userInfoService, cookieService, snackBar) {
        var _this = this;
        this.chatService = chatService;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
        this.snackBar = snackBar;
        chatService.messages.subscribe(function (msg) {
            var id = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'id': msg['from_id']
            };
            _this.userInfoService.sendRequest('ifBlocked', id)
                .toPromise()
                .then(function (data) {
                if (data == false) {
                    if (msg['notification']) {
                        var notification = msg['from_login'] + ': ' + msg['notification'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                    else if (msg['message']) {
                        var notification = msg['from_login'] + ': ' + msg['message'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                }
            }, function (error) {
            });
        });
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.getLikedHistory();
        this.getVisitHistory();
        this.getBlockHistory();
        this.getCurrentUserId();
    };
    HistoryComponent.prototype.getLikedHistory = function () {
        var _this = this;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        this.userInfoService.sendRequest('getLikedHistory', data)
            .toPromise()
            .then(function (data) {
            _this.likedHistory = data;
        }, function (error) {
        });
    };
    HistoryComponent.prototype.getVisitHistory = function () {
        var _this = this;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        this.userInfoService.sendRequest('getVisitHistory', data)
            .toPromise()
            .then(function (data) {
            _this.visitHistory = data;
        }, function (error) {
        });
    };
    HistoryComponent.prototype.getBlockHistory = function () {
        var _this = this;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        this.userInfoService.sendRequest('getBlockHistory', data)
            .toPromise()
            .then(function (data) {
            _this.blockHistory = data;
        }, function (error) {
        });
    };
    HistoryComponent.prototype.getCurrentUserId = function () {
        var _this = this;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        this.userInfoService.sendRequest('getCurrentUserId', data)
            .toPromise()
            .then(function (data) {
            _this.currentUid = data;
        }, function (error) {
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/main-page/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/main-page/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n\tfont-family: Roboto, sans-serif;\n}\n\nmat-toolbar {\n\theight: 80px;\n}\n\n.nav-bar {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.nav-bar__profile-picture__button {\n\twidth: 50px;\n\theight: 50px;\n}\n\n.nav-bar__profile-picture {\n\t/* background-image: url('../../assets/Anonymous-Whatsapp-profile-picture.jpg'); */\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tborder-radius: 50%;\n\twidth: 50px;\n\theight: 50px;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n\n.tab-container {\n\toverflow-x: scroll;\n}\n\n.tab-container::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n.tab-container__link {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmin-width: 150px;\n\tpadding: 30px 0 30px 0;\n}\n\n@media (max-width: 599px) {\n\t.tab-container__link {\n\t\tmin-width: 100px;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n\t<div class=\"container nav-bar\">\n\t\t<h2>Welcome to Matcha</h2>\n\t\t<div>\n\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"nav-bar__profile-picture__button\">\n\t\t\t\t<img class=\"nav-bar__profile-picture\" [src]=\"profileImg\"/>\n\t\t\t</button>\n\t\t\t<mat-menu #menu=\"matMenu\">\n\t\t\t\t<button mat-menu-item\n\t\t\t\t(click)=\"logout()\">\n\t\t\t\t\t<mat-icon>subdirectory_arrow_right</mat-icon>\n\t\t\t\t\t<span>Log Out</span>\n\t\t\t\t</button>\n\t\t\t</mat-menu>\n\t\t</div>\n\t</div>\n</mat-toolbar>\n<div\n\tmat-tab-nav-bar\n\t(window:resize)=\"onResizez($event)\"\n\t[ngClass]=\"{'container': windowWidth <= 599 ? false : true, 'tab-container': true}\">\n\t<a mat-tab-link\n\t\t*ngFor=\"let link of navLinks\"\n\t\t[routerLink]=\"link.path\"\n\t\trouterLinkActive #rla=\"routerLinkActive\"\n\t\t[active]=\"rla.isActive\"\n\t\t(click)=\"authorizationService.refreshTokens()\"\n\t\tclass=\"tab-container__link\">\n\t\t<mat-icon>{{ link.icon }}</mat-icon>\n\t\t{{ link.label }}\n\t</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(chatService, authorizationService, userInfoService, cookieService, snackBar) {
        var _this = this;
        this.chatService = chatService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
        this.snackBar = snackBar;
        this.profileImg = "";
        this.navLinks = [
            {
                path: 'profile',
                label: 'HOME',
                icon: 'home'
            },
            {
                path: 'search',
                label: 'SEARCH',
                icon: 'search'
            },
            {
                path: 'chat',
                label: 'CHAT',
                icon: 'chat_bubble'
            },
            {
                path: 'history',
                label: 'HISTORY',
                icon: 'history'
            },
            {
                path: 'settings',
                label: 'SETTINGS',
                icon: 'settings'
            }
        ];
        this.windowWidth = window.innerWidth;
        chatService.messages.subscribe(function (msg) {
            var id = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'id': msg['from_id']
            };
            _this.userInfoService.sendRequest('ifBlocked', id)
                .toPromise()
                .then(function (data) {
                if (data == false) {
                    if (msg['notification']) {
                        var notification = msg['from_login'] + ': ' + msg['notification'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                    else if (msg['message']) {
                        var notification = msg['from_login'] + ': ' + msg['message'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                }
            }, function (error) {
            });
        });
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorizationService.refreshTokens();
        this.userInfoService.getLocation();
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        this.userInfoService.sendRequest('getProfilePhoto', data)
            .toPromise()
            .then(function (data) {
            _this.profileImg = "http://localhost:8100/" + data;
            _this.chatService.sendMessage("", "", "");
        }, function (error) {
        });
    };
    MainPageComponent.prototype.logout = function () {
        this.authorizationService.deleteTokensAndLogout();
    };
    MainPageComponent.prototype.onResizez = function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile/avatar-photo/avatar-photo.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/main-page/profile/avatar-photo/avatar-photo.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo-container {\n\twidth: 320px;\n\theight: 240px;\n}\n"

/***/ }),

/***/ "./src/app/main-page/profile/avatar-photo/avatar-photo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main-page/profile/avatar-photo/avatar-photo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"photo-container\">\n\t<img [src]=\"imageUrl\" class=\"upload-img__user-img\">\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/profile/avatar-photo/avatar-photo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main-page/profile/avatar-photo/avatar-photo.component.ts ***!
  \**************************************************************************/
/*! exports provided: AvatarPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPhotoComponent", function() { return AvatarPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvatarPhotoComponent = /** @class */ (function () {
    function AvatarPhotoComponent(authorizationService, userInfoService) {
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.imageUrl = "assets/upload.svg";
    }
    AvatarPhotoComponent.prototype.ngOnInit = function () {
        this.getProfilePhoto();
    };
    AvatarPhotoComponent.prototype.getProfilePhoto = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getProfilePhoto', cookies)
            .toPromise()
            .then(function (data) {
            if (data) {
                _this.imageUrl = "http://localhost:8100/" + data;
            }
        }, function (error) {
        });
    };
    AvatarPhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar-photo',
            template: __webpack_require__(/*! ./avatar-photo.component.html */ "./src/app/main-page/profile/avatar-photo/avatar-photo.component.html"),
            styles: [__webpack_require__(/*! ./avatar-photo.component.css */ "./src/app/main-page/profile/avatar-photo/avatar-photo.component.css"), __webpack_require__(/*! ../../../profile/user-info/profile-photo/profile-photo.component.css */ "./src/app/profile/user-info/profile-photo/profile-photo.component.css"), __webpack_require__(/*! ../../../main-page/search/visit-page/visit-page.component.css */ "./src/app/main-page/search/visit-page/visit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]])
    ], AvatarPhotoComponent);
    return AvatarPhotoComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile/more-info/more-info.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main-page/profile/more-info/more-info.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/profile/more-info/more-info.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/profile/more-info/more-info.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field-container\">\n\t<div class=\"user-info-field\">\n\t\t<h6>Birthdate: {{ info['birthdate'] }}</h6>\n\t</div>\n\t<div class=\"user-info-field\">\n\t\t<h6>Gender: {{ info['gender'] }}</h6>\n\t</div>\n\t<div class=\"user-info-field\">\n\t\t<h6>Sexual preferences: {{ info['preferences'] }}</h6>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/profile/more-info/more-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main-page/profile/more-info/more-info.component.ts ***!
  \********************************************************************/
/*! exports provided: MoreInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoComponent", function() { return MoreInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoreInfoComponent = /** @class */ (function () {
    function MoreInfoComponent(userInfoService, authorizationService) {
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
        this.info = [];
        this.windowWidth = window.innerWidth;
    }
    MoreInfoComponent.prototype.ngOnInit = function () {
        this.getMoreInfo();
    };
    MoreInfoComponent.prototype.onResizez = function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    MoreInfoComponent.prototype.getMoreInfo = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getMoreInfo', cookies)
            .toPromise()
            .then(function (data) {
            _this.info = data;
        }, function (error) {
        });
    };
    MoreInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more-info',
            template: __webpack_require__(/*! ./more-info.component.html */ "./src/app/main-page/profile/more-info/more-info.component.html"),
            styles: [__webpack_require__(/*! ./more-info.component.css */ "./src/app/main-page/profile/more-info/more-info.component.css"), __webpack_require__(/*! ../../../main-page/search/visit-page/visit-page.component.css */ "./src/app/main-page/search/visit-page/visit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])
    ], MoreInfoComponent);
    return MoreInfoComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile/profile-biography/profile-biography.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/main-page/profile/profile-biography/profile-biography.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/profile/profile-biography/profile-biography.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main-page/profile/profile-biography/profile-biography.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"biography-container\">\n\t<div class=\"biography-field\">\n\t\t<h5>Biography: </h5>\n\t\t<h6>{{ bio }}</h6>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/profile/profile-biography/profile-biography.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/profile/profile-biography/profile-biography.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileBiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBiographyComponent", function() { return ProfileBiographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileBiographyComponent = /** @class */ (function () {
    function ProfileBiographyComponent(userInfoService, authorizationService) {
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
    }
    ProfileBiographyComponent.prototype.ngOnInit = function () {
        this.getBiography();
    };
    ProfileBiographyComponent.prototype.getBiography = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getBiography', cookies)
            .toPromise()
            .then(function (data) {
            _this.bio = data;
        }, function (error) {
        });
    };
    ProfileBiographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-biography',
            template: __webpack_require__(/*! ./profile-biography.component.html */ "./src/app/main-page/profile/profile-biography/profile-biography.component.html"),
            styles: [__webpack_require__(/*! ./profile-biography.component.css */ "./src/app/main-page/profile/profile-biography/profile-biography.component.css"), __webpack_require__(/*! ../../../main-page/search/visit-page/visit-page.component.css */ "./src/app/main-page/search/visit-page/visit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])
    ], ProfileBiographyComponent);
    return ProfileBiographyComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-page/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n\tbackground: lightblue;\n}\n@media (max-width: 599px) {\n\t.tab-container__link {\n\t\tmin-width: 100px;\n\t}\n\t.info-row {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n.upload-img-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.upload-img-container {\n\tmargin: 10px;\n\twidth: 200px;\n\theight: 200px;\n\tborder: 5px dashed rgba(128, 128, 128, 0.1);\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.upload-btn-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\tposition: relative;\n\tmargin-top: 15px;\n}\n.upload-btn-wrapper input[type=file] {\n\tfont-size: 31px;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\topacity: 0;\n\twidth: 167px;\n\tcursor: pointer;\n}\n.upload-img {\n\topacity: 0.1;\n\twidth: 200px;\n}\n.upload-img__user-img {\n\twidth: 200px;\n\theight: 200px;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n.info-row {\n\tmargin-top: 10px;\n\tdisplay: flex;\n}\n.upload-div {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n}\n"

/***/ }),

/***/ "./src/app/main-page/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-page/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col page-content\">\n\t<div class=\"info-row\">\n\t\t<app-avatar-photo class=\"col s5\"></app-avatar-photo>\n\t\t<app-short-info class=\"col s6\"></app-short-info>\n\t</div>\n\t<mat-divider></mat-divider>\n\t<app-more-info></app-more-info>\n\t<mat-divider></mat-divider>\n\t<app-profile-biography></app-profile-biography>\n\t<mat-divider></mat-divider>\n\t<app-user-gallery></app-user-gallery>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-page/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    // fileToUpload: File = null;
    // imageUrl: string = "assets/upload.svg";
    function ProfileComponent(chatService, authorizationService, userInfoService, cookieService, snackBar) {
        var _this = this;
        this.chatService = chatService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
        this.snackBar = snackBar;
        this.windowWidth = window.innerWidth;
        chatService.messages.subscribe(function (msg) {
            var id = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'id': msg['from_id']
            };
            _this.userInfoService.sendRequest('ifBlocked', id)
                .toPromise()
                .then(function (data) {
                if (data == false) {
                    if (msg['notification']) {
                        var notification = msg['from_login'] + ': ' + msg['notification'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                    else if (msg['message']) {
                        var notification = msg['from_login'] + ': ' + msg['message'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                }
            }, function (error) {
            });
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onResizez = function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/main-page/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/main-page/profile/profile.component.css"), __webpack_require__(/*! ../main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile/short-info/short-info.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main-page/profile/short-info/short-info.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/profile/short-info/short-info.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main-page/profile/short-info/short-info.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"short-info\">\n\t<div class=\"user-info-field\">\n\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-user\"></i></mat-icon>\n\t\t<h4>{{ this.shortInfo['firstName'] }} {{ this.shortInfo['lastName'] }}&nbsp;</h4>\n\t\t<h5>({{ this.shortInfo['login'] }})</h5>\n\t</div>\n\t<div class=\"user-info-field\">\n\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-map-marker-alt\"></i></mat-icon>\n\t\t<h5>Location: {{ this.shortInfo['city'] }}, {{ this.shortInfo['country'] }}</h5>\n\t</div>\n\t<div class=\"user-info-field\">\n\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-star\"></i></mat-icon>\n\t\t<h5>Rating: {{ this.shortInfo['rating'] }}</h5>\n\t</div>\n\t<div>\n\t\t<div>\n\t\t\t<div class=\"user-info-field\">\n\t\t\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fab fa-slack-hash\"></i></mat-icon>\n\t\t\t\t<h5>Interests: </h5>\n\t\t\t</div>\n\t\t\t<app-user-interests></app-user-interests>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/profile/short-info/short-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/profile/short-info/short-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShortInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortInfoComponent", function() { return ShortInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShortInfoComponent = /** @class */ (function () {
    function ShortInfoComponent(userInfoService, authorizationService) {
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
        this.shortInfo = [];
        this.tags = [];
    }
    ShortInfoComponent.prototype.ngOnInit = function () {
        this.getShortInfo();
    };
    ShortInfoComponent.prototype.getShortInfo = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getShortInfo', cookies)
            .toPromise()
            .then(function (data) {
            _this.shortInfo = data['info'];
            _this.tags = data['tags'];
        }, function (error) {
        });
    };
    ShortInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-short-info',
            template: __webpack_require__(/*! ./short-info.component.html */ "./src/app/main-page/profile/short-info/short-info.component.html"),
            styles: [__webpack_require__(/*! ./short-info.component.css */ "./src/app/main-page/profile/short-info/short-info.component.css"), __webpack_require__(/*! ../../../main-page/search/visit-page/visit-page.component.css */ "./src/app/main-page/search/visit-page/visit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])
    ], ShortInfoComponent);
    return ShortInfoComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile/user-gallery/user-gallery.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/main-page/profile/user-gallery/user-gallery.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/profile/user-gallery/user-gallery.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main-page/profile/user-gallery/user-gallery.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-div\">\n\t<div class=\"img-block\">\n\t\t<div *ngFor=\"let i of [0, 1, 2, 3]\" class=\"upload-img-wrapper\">\n\t\t\t<div class=\"upload-img-container\" [ngStyle]=\"{'border': userImages[i] == 'assets/upload.svg' ? '5px dashed rgba(128, 128, 128, 0.1)' : 'none'}\">\n\t\t\t\t<img *ngIf=\"userImages[i] != 'assets/upload.svg'\" [src]=\"userImages[i]\" class=\"upload-img__user-img\">\n\t\t\t\t<img *ngIf=\"userImages[i] == 'assets/upload.svg'\" [src]=\"userImages[i]\" class=\"upload-img\">\n\t\t\t</div>\n\t\t\t<div class=\"upload-btn-wrapper\">\n\t\t\t\t<button mat-raised-button color=\"primary\">Upload photo</button>\n\t\t\t\t<input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files, i)\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/profile/user-gallery/user-gallery.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main-page/profile/user-gallery/user-gallery.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGalleryComponent", function() { return UserGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserGalleryComponent = /** @class */ (function () {
    function UserGalleryComponent(cookieService, userInfoService, authorizationService) {
        this.cookieService = cookieService;
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
        this.windowWidth = window.innerWidth;
        this.fileToUpload = null;
        this.imageUrl = "assets/upload.svg";
        this.userImages = {
            0: "assets/upload.svg",
            1: "assets/upload.svg",
            2: "assets/upload.svg",
            3: "assets/upload.svg"
        };
    }
    UserGalleryComponent.prototype.ngOnInit = function () {
        this.getGalleryPhotos();
    };
    UserGalleryComponent.prototype.getGalleryPhotos = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getGalleryPhotos', cookies)
            .toPromise()
            .then(function (data) {
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    _this.userImages[i] = "http://localhost:8100/" + data[i];
                }
            }
        }, function (error) {
        });
    };
    UserGalleryComponent.prototype.handleFileInput = function (file, i) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            var previous = _this.userImages[i];
            _this.userImages[i] = event.target.result;
            var data = {
                'previous': previous,
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'photo': _this.userImages[i]
            };
            _this.userInfoService.sendRequest('storeUserPhoto', data)
                .toPromise()
                .then(function (data) {
            }, function (error) {
            });
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    UserGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-gallery',
            template: __webpack_require__(/*! ./user-gallery.component.html */ "./src/app/main-page/profile/user-gallery/user-gallery.component.html"),
            styles: [__webpack_require__(/*! ./user-gallery.component.css */ "./src/app/main-page/profile/user-gallery/user-gallery.component.css"), __webpack_require__(/*! ../../../main-page/search/visit-page/visit-page.component.css */ "./src/app/main-page/search/visit-page/visit-page.component.css"), __webpack_require__(/*! ../profile.component.css */ "./src/app/main-page/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])
    ], UserGalleryComponent);
    return UserGalleryComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile/user-interests/user-interests.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/main-page/profile/user-interests/user-interests.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/profile/user-interests/user-interests.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main-page/profile/user-interests/user-interests.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list\n\t#chipList>\n\t<mat-chip *ngFor=\"let tag of tags\">\n\t\t{{tag}}\n\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n</mat-chip>\n"

/***/ }),

/***/ "./src/app/main-page/profile/user-interests/user-interests.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main-page/profile/user-interests/user-interests.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserInterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsComponent", function() { return UserInterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInterestsComponent = /** @class */ (function () {
    function UserInterestsComponent(userInfoService, authorizationService) {
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
        this.tags = [];
    }
    UserInterestsComponent.prototype.ngOnInit = function () {
        this.getUserTags();
    };
    UserInterestsComponent.prototype.getUserTags = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getShortInfo', cookies)
            .toPromise()
            .then(function (data) {
            _this.tags = data['tags'];
        }, function (error) {
        });
    };
    UserInterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-interests',
            template: __webpack_require__(/*! ./user-interests.component.html */ "./src/app/main-page/profile/user-interests/user-interests.component.html"),
            styles: [__webpack_require__(/*! ./user-interests.component.css */ "./src/app/main-page/profile/user-interests/user-interests.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])
    ], UserInterestsComponent);
    return UserInterestsComponent;
}());



/***/ }),

/***/ "./src/app/main-page/search/search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-page/search/search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drawer-container {\n\theight: 88.5vh;\n}\n.drawer-container__sidenav {\n\twidth: 100%;\n\tbackground-color: #E0F7FA;\n}\nbutton:focus {\n\tbackground-color: transparent;\n}\n.slider-label {\n\tmargin: 8px;\n}\n.select-container {\n\tdisplay: flex;\n\tpadding: 8px;\n}\n.select-container > mat-select {\n\twidth: 25%;\n}\nmat-slider, mat-form-field {\n\twidth: 100%;\n}\n.card-container {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n.card-container__mat-card {\n\twidth: 300px;\n\tmargin: 0 10px 10px 0;\n}\n.card-container__profile-picture {\n\twidth: 250px;\n\theight: 250px;\n\tmargin: 0;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n.card-container__profile-picture--container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.card-container__profile-picture--container > .card-container__profile-picture {\n\tmargin-top: 0;\n}\nmat-grid-tile {\n  background: teal;\n}\ninput:not([type]) {\n\tborder-bottom: none;\n\theight: 20px;\n\tmargin: 0;\n}\ninput:not([type]):focus:not([readonly]) {\n\tborder-bottom: none;\n\tbox-shadow: none;\n}\nmat-card-actions {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.user-info-field__search-field {\n\tpadding: 8px;\n}\nmat-select {\n\tmargin-right: 85px;\n}\n"

/***/ }),

/***/ "./src/app/main-page/search/search.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-page/search/search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\n\tclass=\"drawer-container\"\n\t(backdropClick)=\"close('backdrop')\">\n\t<mat-sidenav\n\t\tclass=\"drawer-container__sidenav\"\n\t\t#sidenav\n\t\t(keydown.escape)=\"close('escape')\"\n\t\tdisableClose>\n\t\t<div class=\"container\">\n\t\t<button\n\t\t\tmat-icon-button\n\t\t\t(click)=\"close('toggle button')\">\n\t\t\t<mat-icon>close</mat-icon>\n\t\t</button>\n\t\t<p class=\"slider-label\">Age minimum ({{ searchParams.ageMin }}):</p>\n\t\t<mat-slider\n\t\t\tthumbLabel\n\t\t\t[displayWith]=\"ageMinLabel\"\n\t\t\ttickInterval=\"1\"\n\t\t\tmin=\"18\"\n\t\t\tmax=\"99\"\n\t\t\t[(ngModel)]=\"searchParams.ageMin\"></mat-slider>\n\t\t<p class=\"slider-label\">Age maximum ({{ searchParams.ageMax }}):</p>\n\t\t<mat-slider\n\t\t\tthumbLabel\n\t\t\t[displayWith]=\"ageMaxLabel\"\n\t\t\ttickInterval=\"1\"\n\t\t\tmin=\"18\"\n\t\t\tmax=\"99\"\n\t\t\t[(ngModel)]=\"searchParams.ageMax\"></mat-slider>\n\t\t<p class=\"slider-label\">Rating ({{ searchParams.rating }}):</p>\n\t\t<mat-slider\n\t\t\tthumbLabel\n\t\t\t[displayWith]=\"ratingLabel\"\n\t\t\ttickInterval=\"1\"\n\t\t\tmin=\"0\"\n\t\t\tmax=\"100\"\n\t\t\t[(ngModel)]=\"searchParams.rating\"></mat-slider>\n\t\t<p class=\"slider-label\">Distance ({{ searchParams.distance }} km):</p>\n\t\t<mat-slider\n\t\t\tthumbLabel\n\t\t\t[displayWith]=\"distanceLabel\"\n\t\t\ttickInterval=\"1\"\n\t\t\tmin=\"0\"\n\t\t\tmax=\"1000\"\n\t\t\t[(ngModel)]=\"searchParams.distance\"></mat-slider>\n\n\t\t<div style=\"width: 100%\" class=\"user-info-field user-info-field__search-field\">\n\t\t\t<mat-form-field class=\"user-info-field__form-field\">\n\t\t\t\t<mat-chip-list\n\t\t\t\t\t#chipList>\n\t\t\t\t\t<mat-chip\n\t\t\t\t\t*ngFor=\"let tag of tags\"\n\t\t\t\t\t[selectable]=\"selectable\"\n\t\t\t\t\t[removable]=\"removable\"\n\t\t\t\t\t(removed)=\"remove(tag)\">\n\t\t\t\t\t\t{{tag}}\n\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n\t\t\t\t\t</mat-chip>\n\t\t\t\t\t<input\n\t\t\t\t\tmatInput\n\t\t\t\t\tplaceholder=\"Interests\"\n\t\t\t\t\t#tagInput\n\t\t\t\t\t[formControl]=\"tagCtrl\"\n\t\t\t\t\t[matAutocomplete]=\"auto\"\n\t\t\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t\t\t[matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n\t\t\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\"\n\t\t\t\t\t(matChipInputTokenEnd)=\"add($event)\"\n\t\t\t\t\t/>\n\t\t\t\t</mat-chip-list>\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n\t\t\t\t\t<mat-option *ngFor=\"let tag of filteredTags | async\" [value]=\"tag\">\n\t\t\t\t\t\t{{ tag }}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"select-container\">\n\t\t\t<mat-select\n\t\t\t\t[(ngModel)]=\"searchParams.order\"\n\t\t\t\tplaceholder=\"Order\">\n\t\t\t\t<mat-option\n\t\t\t\t\t*ngFor=\"let o of order\"\n\t\t\t\t\t[value]=\"o.value\">\n\t\t\t\t\t{{ o.name }}\n\t\t\t\t</mat-option>\n\t\t\t</mat-select>\n\t\t\t<mat-select\n\t\t\t\t[(ngModel)]=\"searchParams.orderField\"\n\t\t\t\tplaceholder=\"Order Field\">\n\t\t\t\t<mat-option\n\t\t\t\t\t*ngFor=\"let orderField of orderFields\"\n\t\t\t\t\t[value]=\"orderField.value\">\n\t\t\t\t\t{{ orderField.name }}\n\t\t\t\t</mat-option>\n\t\t\t</mat-select>\n\t\t</div>\n\n\t\t</div>\n\t</mat-sidenav>\n\n\t<mat-sidenav-content>\n\t\t<div class=\"container\">\n\t\t\t<button\n\t\t\t\tmat-icon-button\n\t\t\t\t(click)=\"sidenav.open()\">\n\t\t\t\t<mat-icon>tune</mat-icon>\n\t\t\t</button>\n\n\t\t\t<div class=\"card-container\">\n\t\t\t\t<mat-card\n\t\t\t\t\t*ngFor=\"let user of sortedUsers\"\n\t\t\t\t\tclass=\"card-container__mat-card\">\n\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t<div mat-card-avatar></div>\n\t\t\t\t\t\t<mat-card-title>\n\t\t\t\t\t\t\t{{ user.first_name }} {{ user.last_name }}\n\t\t\t\t\t\t</mat-card-title>\n\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t<div class=\"card-container__profile-picture--container\">\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tmat-card-image\n\t\t\t\t\t\t\tclass=\"card-container__profile-picture\"\n\t\t\t\t\t\t\tsrc=\"{{ 'http://localhost:8100/' + user.profile_photo }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<mat-card-actions>\n\t\t\t\t\t\t<button mat-raised-button [routerLink]=\"[user.id]\">View Profile</button>\n\t\t\t\t\t</mat-card-actions>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\n\t\t</div>\n\t</mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-page/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-page/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchComponent = /** @class */ (function () {
    function SearchComponent(chatService, cookieService, userInfoService, authorizationService, snackBar) {
        var _this = this;
        this.chatService = chatService;
        this.cookieService = cookieService;
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
        this.snackBar = snackBar;
        this.searchParams = {
            ageMin: 18,
            ageMax: 99,
            distance: 0,
            gender: 'male',
            latitude: 0,
            longtitude: 0,
            preferences: null,
            order: 'DESC',
            orderField: 'rating',
            rating: 0,
            tags: null
        };
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.counter = 0;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.tags = [];
        this.allTags = [];
        this.order = [
            {
                name: 'Ascending',
                value: 'ASC'
            },
            {
                name: 'Descending',
                value: 'DESC'
            }
        ];
        this.orderFields = [
            {
                name: 'Age',
                value: 'birthdate'
            },
            {
                name: 'Location',
                value: 'distance'
            },
            {
                name: 'Rating',
                value: 'rating'
            }
        ];
        this.panelOpenState = false;
        this.reason = '';
        this.filteredTags = this.tagCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tag) { return tag ? _this.filter(tag) : _this.allTags.slice(); }));
        chatService.messages.subscribe(function (msg) {
            var id = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'id': msg['from_id']
            };
            _this.userInfoService.sendRequest('ifBlocked', id)
                .toPromise()
                .then(function (data) {
                if (data == false) {
                    if (msg['notification']) {
                        var notification = msg['from_login'] + ': ' + msg['notification'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                    else if (msg['message']) {
                        var notification = msg['from_login'] + ': ' + msg['message'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                }
            }, function (error) {
            });
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getAllInterests();
        this.getSearchParamsAndBrowseUsers();
    };
    SearchComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
        this.getUsersByParams(this.searchParams);
    };
    SearchComponent.prototype.ratingLabel = function (value) {
        if (!value) {
            return 0;
        }
        return value;
    };
    SearchComponent.prototype.ageMinLabel = function (value) {
        if (!value) {
            return 0;
        }
        return value;
    };
    SearchComponent.prototype.ageMaxLabel = function (value) {
        if (!value) {
            return 0;
        }
        return value;
    };
    SearchComponent.prototype.distanceLabel = function (value) {
        if (!value) {
            return 0;
        }
        return value;
    };
    SearchComponent.prototype.getSearchParamsAndBrowseUsers = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getSearchParams', cookies)
            .toPromise()
            .then(function (data) {
            _this.searchParams = data;
            _this.searchParams['tags'] = _this.tags;
            _this.searchParams['rating'] = 0;
            _this.getUsersByParams(_this.searchParams);
        }, function (error) {
        });
    };
    SearchComponent.prototype.getUsersByParams = function (params) {
        var _this = this;
        var token = this.cookieService.get('RefreshToken');
        params['refreshToken'] = token;
        this.userInfoService.sendRequest('getUsersByParams', params)
            .toPromise()
            .then(function (data) {
            _this.sortedUsers = data;
        }, function (error) {
        });
    };
    SearchComponent.prototype.getAllInterests = function () {
        var _this = this;
        this.userInfoService.getData("getInterests")
            .toPromise()
            .then(function (data) {
            _this.error = '';
            _this.allTags = data;
        }, function (error) {
            _this.error = error.error.exception[0].message;
        });
    };
    SearchComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        var pattern = new RegExp("^[a-zA-Z0-9]{2,15}$");
        if (pattern.test(value) && this.counter < 10) {
            if ((value || '').trim() && this.checkIfExists(value)) {
                this.tags.push(value.trim());
                this.counter = this.tags.length;
            }
        }
        if (input) {
            input.value = '';
        }
        this.tagCtrl.setValue(null);
    };
    SearchComponent.prototype.checkIfExists = function (tag) {
        for (var i in this.tags) {
            if (this.tags[i] == tag) {
                return false;
            }
        }
        return true;
    };
    SearchComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
            this.counter = this.tags.length;
        }
    };
    SearchComponent.prototype.filter = function (name) {
        return this.allTags.filter(function (tag) {
            return tag.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    SearchComponent.prototype.selected = function (event) {
        if (this.checkIfExists(event.option.viewValue)) {
            this.tags.push(event.option.viewValue);
            this.tagInput.nativeElement.value = '';
            this.tagCtrl.setValue(null);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"])
    ], SearchComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "tagInput", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/main-page/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/main-page/search/search.component.css"), __webpack_require__(/*! ../../profile/user-info/user-info.component.css */ "./src/app/profile/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/main-page/search/visit-page/visit-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/search/visit-page/visit-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n\tbackground: lightblue;\n}\n@media (max-width: 599px) {\n\t.tab-container__link {\n\t\tmin-width: 100px;\n\t}\n\t.info-row {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n.upload-img-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n.upload-img-container {\n\tmargin: 10px;\n\twidth: 200px;\n\theight: 200px;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.upload-btn-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\tposition: relative;\n\tmargin-top: 15px;\n}\n.upload-btn-wrapper input[type=file] {\n\tfont-size: 31px;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\topacity: 0;\n\twidth: 167px;\n\tcursor: pointer;\n}\n.upload-img {\n\topacity: 0.1;\n\twidth: 200px;\n}\n.upload-img__user-img {\n\twidth: 200px;\n\theight: 200px;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n.info-row {\n\tmargin: 42px 0 0 0;\n\tdisplay: flex;\n}\n.photo-container {\n\twidth: 320px;\n\theight: 310px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n.like-button {\n\tmargin-top: 10px;\n\tbackground: transparent;\n}\n.like-button__icon {\n\tfont-size: 30px;\n\tcolor: #c8d8da;\n}\n.liked {\n\tcolor: #00acc1;\n}\n.short-info {\n\tmargin: 0 0 20px 20px;\n}\n.upload-div {\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin-top: 25px;\n}\n.user-info-field-container {\n\tmargin: 25px 0;\n}\n.user-info-field {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n.biography-container {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 25px 0;\n}\n.biography-field {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n}\n.user-info-field__mat-icon {\n\tmargin-right: 16px;\n}\n.img-block {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n}\n.warn {\n\tdisplay: flex;\n\t/* justify-content: space-around; */\n\tmargin-top: 50px;\n\tmargin-bottom: 5px;\n}\n.warn-button {\n\tmargin-left: 10px;\n}\n.status {\n\tmargin-left: 5px;\n\tcolor: rgb(204, 205, 206);\n}\n"

/***/ }),

/***/ "./src/app/main-page/search/visit-page/visit-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main-page/search/visit-page/visit-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"info-row\">\n\t\t<div class=\"photo-container\">\n\t\t\t<img [src]=\"profileImageUrl\" class=\"upload-img__user-img\">\n\t\t\t<button mat-icon-button (click)=\"likeUnlike()\" class=\"like-button\">\n\t\t\t\t<mat-icon\n\t\t\t\t[ngClass]=\"{'liked': liked, 'like-button__icon': true}\">favorite</mat-icon>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"short-info\">\n\t\t\t<h6 class=\"status\" *ngIf=\"logoutTime\">Last seen at {{ logoutTime }}</h6>\n\t\t\t<div class=\"user-info-field\">\n\t\t\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-user\"></i></mat-icon>\n\t\t\t\t<h4>{{ shortInfo['firstName'] }} {{ shortInfo['lastName'] }}&nbsp;</h4>\n\t\t\t\t<h5>({{ shortInfo['login'] }})</h5>\n\t\t\t\t<h5 class=\"status\">{{ status }}</h5>\n\n\t\t\t</div>\n\t\t\t<div class=\"user-info-field\">\n\t\t\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-map-marker-alt\"></i></mat-icon>\n\t\t\t\t<h5>Location: {{ shortInfo['city'] }}, {{ shortInfo['country'] }}</h5>\n\t\t\t</div>\n\t\t\t<div class=\"user-info-field\">\n\t\t\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-star\"></i></mat-icon>\n\t\t\t\t<h5>Rating: {{ shortInfo['rating'] }}</h5>\n\t\t\t</div>\n\t\t\t<div class=\"user-info-field\">\n\t\t\t\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fab fa-slack-hash\"></i></mat-icon>\n\t\t\t\t<h5>Interests: </h5>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<mat-chip-list #chipList>\n\t\t\t\t\t<mat-chip *ngFor=\"let tag of tags\">\n\t\t\t\t\t\t{{tag}}\n\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n\t\t\t\t\t</mat-chip>\n\t\t\t\t</mat-chip-list>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<mat-divider></mat-divider>\n\t<div class=\"user-info-field-container\">\n\t\t<div class=\"user-info-field\">\n\t\t\t<h6>Birthdate: {{ birthdate }}</h6>\n\t\t</div>\n\t\t<div class=\"user-info-field\">\n\t\t\t<h6>Gender: {{ gender }}</h6>\n\t\t</div>\n\t\t<div class=\"user-info-field\">\n\t\t\t<h6>Sexual preferences: {{ preferences }}</h6>\n\t\t</div>\n\t</div>\n\t<mat-divider></mat-divider>\n\t<div class=\"biography-container\">\n\t\t<div class=\"biography-field\">\n\t\t\t<h5>Biography: </h5>\n\t\t\t<h6>{{ biography }}</h6>\n\t\t</div>\n\t</div>\n\t<mat-divider></mat-divider>\n\t<div class=\"upload-div\">\n\t\t<div>\n\t\t\t<div class=\"img-block\">\n\t\t\t\t<div *ngFor=\"let i of [0, 1, 2, 3]\" class=\"upload-img-wrapper\">\n\t\t\t\t\t<div class=\"upload-img-container\" *ngIf=\"galleryPhotos[i] != 'assets/upload.svg'\">\n\t\t\t\t\t\t<img *ngIf=\"galleryPhotos[i] != 'assets/upload.svg'\" [src]=\"galleryPhotos[i]\" class=\"upload-img__user-img\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"warn\">\n\t\t<button mat-raised-button color=\"warn\" class=\"warn-button\" (click)=\"reportUser()\">Report User</button>\n\t\t<button mat-raised-button *ngIf=\"!blocked\" color=\"warn\" class=\"warn-button\" (click)=\"blockUser()\">Block User</button>\n\t\t<button mat-raised-button *ngIf=\"blocked\" color=\"primary\" class=\"warn-button\" (click)=\"unBlockUser()\">Unblock User</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/search/visit-page/visit-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main-page/search/visit-page/visit-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: VisitPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitPageComponent", function() { return VisitPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VisitPageComponent = /** @class */ (function () {
    function VisitPageComponent(chatService, route, authorizationService, userInfoService, cookieService) {
        this.chatService = chatService;
        this.route = route;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
        this.windowWidth = window.innerWidth;
        this.profileImageUrl = "assets/upload.svg";
        this.galleryPhotos = {
            0: "assets/upload.svg",
            1: "assets/upload.svg",
            2: "assets/upload.svg",
            3: "assets/upload.svg"
        };
        this.shortInfo = [];
        this.tags = [];
    }
    VisitPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = +params['id'];
            _this.getInfo(_this.uid);
            _this.chatService.sendMessage(_this.uid, "visited your page", "");
            _this.saveVisitToHistory();
        });
    };
    VisitPageComponent.prototype.getInfo = function (uid) {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        var data = {
            'uid': uid,
            'cookie': cookies
        };
        this.userInfoService.sendRequest('getVisitedUserInfo', data)
            .toPromise()
            .then(function (data) {
            _this.saveData(data);
        }, function (error) {
        });
    };
    VisitPageComponent.prototype.saveVisitToHistory = function () {
        var data = {
            'targetUid': this.uid,
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        this.userInfoService.sendRequest('saveVisitToHistory', data)
            .toPromise()
            .then(function (data) {
        }, function (error) {
        });
    };
    VisitPageComponent.prototype.saveData = function (data) {
        this.profileImageUrl = "http://localhost:8100/" + data['profilePhoto'];
        this.biography = data['biography'];
        this.birthdate = data['birthdate'];
        this.gender = data['gender'];
        this.preferences = data['preferences'];
        this.shortInfo = data['shortInfo'];
        this.tags = data['tags'];
        this.liked = data['liked'];
        this.blocked = data['blocked'];
        this.status = data['status'];
        this.logoutTime = data['lastLogin'];
        if (data['galleryPhotos']) {
            for (var i = 0; i < data['galleryPhotos'].length; i++) {
                this.galleryPhotos[i] = "http://localhost:8100/" + data['galleryPhotos'][i];
            }
        }
    };
    VisitPageComponent.prototype.onResizez = function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    VisitPageComponent.prototype.likeUnlike = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        var data = {
            'liked': this.liked,
            'visitedUid': this.uid,
            'cookie': cookies
        };
        this.userInfoService.sendRequest('likeUnlike', data)
            .toPromise()
            .then(function (data) {
            _this.shortInfo['rating'] = data;
        }, function (error) {
        });
        if (this.liked) {
            this.chatService.sendMessage(this.uid, "unliked you", "");
            this.liked = false;
        }
        else {
            this.chatService.sendMessage(this.uid, "liked you", "");
            this.liked = true;
        }
    };
    VisitPageComponent.prototype.reportUser = function () {
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'visitedUid': this.uid
        };
        this.userInfoService.sendRequest('reportUser', data)
            .toPromise()
            .then(function (data) {
        }, function (error) {
        });
    };
    VisitPageComponent.prototype.blockUser = function () {
        this.blocked = true;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'visitedUid': this.uid
        };
        this.userInfoService.sendRequest('blockUser', data)
            .toPromise()
            .then(function (data) {
            ;
        }, function (error) {
        });
    };
    VisitPageComponent.prototype.unBlockUser = function () {
        this.blocked = false;
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'visitedUid': this.uid
        };
        this.userInfoService.sendRequest('unBlockUser', data)
            .toPromise()
            .then(function (data) {
            ;
        }, function (error) {
        });
    };
    VisitPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visit-page',
            template: __webpack_require__(/*! ./visit-page.component.html */ "./src/app/main-page/search/visit-page/visit-page.component.html"),
            styles: [__webpack_require__(/*! ./visit-page.component.css */ "./src/app/main-page/search/visit-page/visit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], VisitPageComponent);
    return VisitPageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-biography/change-biography.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-biography/change-biography.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-biography/change-biography.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-biography/change-biography.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\">assignment</mat-icon>\n\t<mat-form-field class=\"input-field\">\n\t\t<textarea\n\t\tmaxlength=\"1000\"\n\t\tmatInput\n\t\tmatTextareaAutosize\n\t\tplaceholder=\"Biography\"\n\t\tname=\"biography\"\n\t\t[(ngModel)]=\"this.biography\"></textarea>\n\t</mat-form-field>\n\t<button mat-icon-button (click)=\"saveChanges(this.biography, 'biography')\" [disabled]=\"!this.biography\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-biography/change-biography.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main-page/settings/change-biography/change-biography.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangeBiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBiographyComponent", function() { return ChangeBiographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeBiographyComponent = /** @class */ (function () {
    function ChangeBiographyComponent(changeService, userInfoService) {
        this.changeService = changeService;
        this.userInfoService = userInfoService;
    }
    ChangeBiographyComponent.prototype.ngOnInit = function () {
    };
    ChangeBiographyComponent.prototype.saveChanges = function (value, toChange) {
        if (value) {
            this.changeService.changeUserInfo(value, toChange);
        }
    };
    ChangeBiographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-biography',
            template: __webpack_require__(/*! ./change-biography.component.html */ "./src/app/main-page/settings/change-biography/change-biography.component.html"),
            styles: [__webpack_require__(/*! ./change-biography.component.css */ "./src/app/main-page/settings/change-biography/change-biography.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_2__["ChangeService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]])
    ], ChangeBiographyComponent);
    return ChangeBiographyComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-email/change-email.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/main-page/settings/change-email/change-email.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-email/change-email.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main-page/settings/change-email/change-email.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-at\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<input matInput\n\t\tplaceholder=\"Email\"\n\t\ttype=\"text\"\n\t\tname=\"email\"\n\t\t[(ngModel)]=\"this.authorizationService.user.email\">\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('emailPattern', 'email')\">\n\t\t\t<div class=\"error-div\">\n\t\t\t\t&nbsp;{{ this.authorizationService.getErrorMessage(\"email\", 'email') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n\t<button mat-icon-button (click)=\"saveChanges(this.authorizationService.user.email, 'email')\"  [disabled]=\"!this.authorizationService.checkPattern('emailPattern', 'email')\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-email/change-email.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main-page/settings/change-email/change-email.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChangeEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmailComponent", function() { return ChangeEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
/* harmony import */ var _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../user/authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../user/authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangeEmailComponent = /** @class */ (function () {
    function ChangeEmailComponent(changeService, authorizationService, userInfoService) {
        this.changeService = changeService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
    }
    ChangeEmailComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__["Authorization"]();
        this.authorizationService.patterns = new _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__["Patterns"]();
    };
    ChangeEmailComponent.prototype.saveChanges = function (value, toChange) {
        if (value) {
            this.changeService.changeBasicInfo(value, toChange);
        }
    };
    ChangeEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-email',
            template: __webpack_require__(/*! ./change-email.component.html */ "./src/app/main-page/settings/change-email/change-email.component.html"),
            styles: [__webpack_require__(/*! ./change-email.component.css */ "./src/app/main-page/settings/change-email/change-email.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_3__["ChangeService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]])
    ], ChangeEmailComponent);
    return ChangeEmailComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-first-name/change-first-name.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-first-name/change-first-name.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-first-name/change-first-name.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-first-name/change-first-name.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-user\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<input matInput\n\t\tplaceholder=\"First Name\"\n\t\ttype=\"text\"\n\t\tname=\"firstName\"\n\t\t[(ngModel)]=\"this.authorizationService.user.firstName\">\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('firstnamePattern', 'firstName')\">\n\t\t\t<div class=\"error-div\">\n\t\t\t\t&nbsp;{{ this.authorizationService.getErrorMessage(\"first name\", 'firstName') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n\t<button mat-icon-button (click)=\"saveChanges(this.authorizationService.user.firstName, 'first_name')\" [disabled]=\"!this.authorizationService.checkPattern('firstnamePattern', 'firstName')\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-first-name/change-first-name.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-first-name/change-first-name.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangeFirstNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeFirstNameComponent", function() { return ChangeFirstNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
/* harmony import */ var _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../user/authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../user/authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangeFirstNameComponent = /** @class */ (function () {
    function ChangeFirstNameComponent(changeService, authorizationService, userInfoService) {
        this.changeService = changeService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
    }
    ChangeFirstNameComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__["Authorization"]();
        this.authorizationService.patterns = new _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__["Patterns"]();
    };
    ChangeFirstNameComponent.prototype.saveChanges = function (value, toChange) {
        this.changeService.changeBasicInfo(value, toChange);
    };
    ChangeFirstNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-first-name',
            template: __webpack_require__(/*! ./change-first-name.component.html */ "./src/app/main-page/settings/change-first-name/change-first-name.component.html"),
            styles: [__webpack_require__(/*! ./change-first-name.component.css */ "./src/app/main-page/settings/change-first-name/change-first-name.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_3__["ChangeService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]])
    ], ChangeFirstNameComponent);
    return ChangeFirstNameComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-gender/change-gender.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/main-page/settings/change-gender/change-gender.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-gender/change-gender.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main-page/settings/change-gender/change-gender.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-transgender\"></i></mat-icon>\n\t<mat-form-field class=\"input-field\">\n\t\t<mat-select placeholder=\"Gender\" name=\"gender\" [(ngModel)]=\"selectedGender\">\n\t\t\t<mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\n\t\t\t\t{{ gender.viewValue }}\n\t\t\t</mat-option>\n\t\t</mat-select>\n\t</mat-form-field>\n\t<button mat-icon-button (click)=\"saveChanges(selectedGender, 'gender')\" [disabled]=\"!this.selectedGender\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-gender/change-gender.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main-page/settings/change-gender/change-gender.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChangeGenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeGenderComponent", function() { return ChangeGenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeGenderComponent = /** @class */ (function () {
    function ChangeGenderComponent(changeService, userInfoService) {
        this.changeService = changeService;
        this.userInfoService = userInfoService;
        this.genders = [
            {
                value: 'male',
                viewValue: 'Male'
            },
            {
                value: 'female',
                viewValue: 'Female'
            }
        ];
    }
    ChangeGenderComponent.prototype.ngOnInit = function () {
    };
    ChangeGenderComponent.prototype.saveChanges = function (value, toChange) {
        if (value) {
            this.changeService.changeUserInfo(value, toChange);
        }
    };
    ChangeGenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-gender',
            template: __webpack_require__(/*! ./change-gender.component.html */ "./src/app/main-page/settings/change-gender/change-gender.component.html"),
            styles: [__webpack_require__(/*! ./change-gender.component.css */ "./src/app/main-page/settings/change-gender/change-gender.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_2__["ChangeService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]])
    ], ChangeGenderComponent);
    return ChangeGenderComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-interests/change-interests.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-interests/change-interests.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-interests/change-interests.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-interests/change-interests.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-hashtag\"></i></mat-icon>\n\t<mat-form-field class=\"input-field\">\n\t\t<mat-chip-list\n\t\t\t#chipList>\n\t\t\t<mat-chip\n\t\t\t*ngFor=\"let tag of tags\"\n\t\t\t[selectable]=\"selectable\"\n\t\t\t[removable]=\"removable\"\n\t\t\t(removed)=\"remove(tag)\">\n\t\t\t\t{{tag}}\n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n\t\t\t</mat-chip>\n\t\t\t<input\n\t\t\tclass=\"interests\"\n\t\t\tmatInput\n\t\t\tplaceholder=\"Interests\"\n\t\t\t#tagInput\n\t\t\t[formControl]=\"tagCtrl\"\n\t\t\t[matAutocomplete]=\"auto\"\n\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t[matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\"\n\t\t\t(matChipInputTokenEnd)=\"add($event)\"\n\t\t\t/>\n\t\t</mat-chip-list>\n\t\t<mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n\t\t\t<mat-option *ngFor=\"let tag of filteredTags | async\" [value]=\"tag\">\n\t\t\t\t{{ tag }}\n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t</mat-form-field>\n\t<button mat-icon-button (click)=\"saveChanges(this.tags)\" [disabled]=\"!this.tags.length\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-interests/change-interests.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main-page/settings/change-interests/change-interests.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangeInterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInterestsComponent", function() { return ChangeInterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangeInterestsComponent = /** @class */ (function () {
    function ChangeInterestsComponent(userInfoService, changeService) {
        var _this = this;
        this.userInfoService = userInfoService;
        this.changeService = changeService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.counter = 0;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.tags = [];
        this.allTags = [];
        this.filteredTags = this.tagCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tag) { return tag ? _this.filter(tag) : _this.allTags.slice(); }));
    }
    ChangeInterestsComponent.prototype.ngOnInit = function () {
        this.getAllInterests();
    };
    ChangeInterestsComponent.prototype.getAllInterests = function () {
        var _this = this;
        this.userInfoService.getData("getInterests")
            .toPromise()
            .then(function (data) {
            _this.error = '';
            _this.allTags = data;
        }, function (error) {
            _this.error = error.error.exception[0].message;
        });
    };
    ChangeInterestsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        var pattern = new RegExp("^[a-zA-Z0-9]{2,15}$");
        if (pattern.test(value) && this.counter < 10) {
            if ((value || '').trim() && this.checkIfExists(value)) {
                this.tags.push(value.trim());
                this.counter = this.tags.length;
            }
        }
        if (input) {
            input.value = '';
        }
        this.tagCtrl.setValue(null);
    };
    ChangeInterestsComponent.prototype.checkIfExists = function (tag) {
        for (var i in this.tags) {
            if (this.tags[i] == tag) {
                return false;
            }
        }
        return true;
    };
    ChangeInterestsComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
            this.counter = this.tags.length;
        }
    };
    ChangeInterestsComponent.prototype.filter = function (name) {
        return this.allTags.filter(function (tag) {
            return tag.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    ChangeInterestsComponent.prototype.selected = function (event) {
        if (this.checkIfExists(event.option.viewValue) && this.counter < 10) {
            this.tags.push(event.option.viewValue);
            this.counter = this.tags.length;
            this.tagInput.nativeElement.value = '';
            this.tagCtrl.setValue(null);
        }
    };
    ChangeInterestsComponent.prototype.saveChanges = function (tags) {
        this.changeService.changeInterests(tags);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChangeInterestsComponent.prototype, "tagInput", void 0);
    ChangeInterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-interests',
            template: __webpack_require__(/*! ./change-interests.component.html */ "./src/app/main-page/settings/change-interests/change-interests.component.html"),
            styles: [__webpack_require__(/*! ./change-interests.component.css */ "./src/app/main-page/settings/change-interests/change-interests.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"],
            _change_service__WEBPACK_IMPORTED_MODULE_5__["ChangeService"]])
    ], ChangeInterestsComponent);
    return ChangeInterestsComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-last-name/change-last-name.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-last-name/change-last-name.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-last-name/change-last-name.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-last-name/change-last-name.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-user\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<input matInput\n\t\tplaceholder=\"Last Name\"\n\t\ttype=\"text\"\n\t\tname=\"lastName\"\n\t\t[(ngModel)]=\"this.authorizationService.user.lastName\">\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('lastnamePattern', 'lastName')\">\n\t\t\t<div class=\"error-div\">\n\t\t\t\t&nbsp;{{ this.authorizationService.getErrorMessage(\"last name\", 'lastName') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n\t<button mat-icon-button (click)=\"saveChanges(this.authorizationService.user.lastName, 'last_name')\" [disabled]=\"!this.authorizationService.checkPattern('lastnamePattern', 'lastName')\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-last-name/change-last-name.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main-page/settings/change-last-name/change-last-name.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChangeLastNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLastNameComponent", function() { return ChangeLastNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
/* harmony import */ var _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../user/authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../user/authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangeLastNameComponent = /** @class */ (function () {
    function ChangeLastNameComponent(changeService, authorizationService, userInfoService) {
        this.changeService = changeService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
    }
    ChangeLastNameComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__["Authorization"]();
        this.authorizationService.patterns = new _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__["Patterns"]();
    };
    ChangeLastNameComponent.prototype.saveChanges = function (value, toChange) {
        if (value) {
            this.changeService.changeBasicInfo(value, toChange);
        }
    };
    ChangeLastNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-last-name',
            template: __webpack_require__(/*! ./change-last-name.component.html */ "./src/app/main-page/settings/change-last-name/change-last-name.component.html"),
            styles: [__webpack_require__(/*! ./change-last-name.component.css */ "./src/app/main-page/settings/change-last-name/change-last-name.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_3__["ChangeService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]])
    ], ChangeLastNameComponent);
    return ChangeLastNameComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-login/change-login.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/main-page/settings/change-login/change-login.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-login/change-login.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main-page/settings/change-login/change-login.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-user\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<input matInput\n\t\tplaceholder=\"Login\"\n\t\ttype=\"text\"\n\t\tname=\"login\"\n\t\t[(ngModel)]=\"this.authorizationService.user.login\">\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('loginPattern', 'login')\">\n\t\t\t<div class=\"error-div\">\n\t\t\t\t&nbsp;{{ this.authorizationService.getErrorMessage(\"login\", 'login') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n\t<button mat-icon-button (click)=\"saveChanges(this.authorizationService.user.login, 'login')\" [disabled]=\"!this.authorizationService.checkPattern('loginPattern', 'login')\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-login/change-login.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main-page/settings/change-login/change-login.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChangeLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLoginComponent", function() { return ChangeLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
/* harmony import */ var _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../user/authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../user/authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangeLoginComponent = /** @class */ (function () {
    function ChangeLoginComponent(changeService, authorizationService, userInfoService) {
        this.changeService = changeService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
    }
    ChangeLoginComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__["Authorization"]();
        this.authorizationService.patterns = new _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__["Patterns"]();
    };
    ChangeLoginComponent.prototype.saveChanges = function (value, toChange) {
        if (value) {
            this.changeService.changeBasicInfo(value, toChange);
        }
    };
    ChangeLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-login',
            template: __webpack_require__(/*! ./change-login.component.html */ "./src/app/main-page/settings/change-login/change-login.component.html"),
            styles: [__webpack_require__(/*! ./change-login.component.css */ "./src/app/main-page/settings/change-login/change-login.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_3__["ChangeService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]])
    ], ChangeLoginComponent);
    return ChangeLoginComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-password/change-password.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/main-page/settings/change-password/change-password.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-password/change-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main-page/settings/change-password/change-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-key\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<input matInput\n\t\tplaceholder=\"Password\"\n\t\ttype=\"password\"\n\t\tname=\"email\"\n\t\t[(ngModel)]=\"this.authorizationService.user.password\">\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('passwordPattern', 'password')\">\n\t\t\t<div class=\"error-div\">\n\t\t\t\t&nbsp;{{ this.authorizationService.getErrorMessage(\"password\", 'password') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n\t<button mat-icon-button (click)=\"saveChanges(this.authorizationService.user.password, 'password')\" [disabled]=\"!this.authorizationService.checkPattern('passwordPattern', 'password')\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-password/change-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main-page/settings/change-password/change-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
/* harmony import */ var _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../user/authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../user/authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(changeService, authorizationService, userInfoService) {
        this.changeService = changeService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_4__["Authorization"]();
        this.authorizationService.patterns = new _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_5__["Patterns"]();
    };
    ChangePasswordComponent.prototype.saveChanges = function (value, toChange) {
        if (value) {
            this.changeService.changeBasicInfo(value, toChange);
        }
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/main-page/settings/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/main-page/settings/change-password/change-password.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_3__["ChangeService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-preferences/change-preferences.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-preferences/change-preferences.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/settings/change-preferences/change-preferences.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-preferences/change-preferences.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-venus-mars\"></i></mat-icon>\n\t<mat-form-field class=\"input-field\">\n\t\t<mat-select matInput [value]=\"value\" name=\"preferences\" placeholder=\"Sexual preferences\" [(ngModel)]=\"selected\">\n\t\t\t<mat-option *ngFor=\"let preference of preferences\" [value]=\"preference.value\">\n\t\t\t\t{{ preference.viewValue }}\n\t\t\t</mat-option>\n\t\t</mat-select>\n\t</mat-form-field>\n\t<button mat-icon-button (click)=\"saveChanges(selected, 'preferences')\" [disabled]=\"!selected\">\n\t\t<mat-icon><i class=\"fas fa-check\"></i></mat-icon>\n\t</button>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-preferences/change-preferences.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-preferences/change-preferences.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChangePreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePreferencesComponent", function() { return ChangePreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _change_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change.service */ "./src/app/main-page/settings/change.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePreferencesComponent = /** @class */ (function () {
    function ChangePreferencesComponent(changeService, userInfoService) {
        this.changeService = changeService;
        this.userInfoService = userInfoService;
        this.preferences = [
            {
                value: 'heterosexual',
                viewValue: 'Heterosexual'
            },
            {
                value: 'homosexual',
                viewValue: 'Homosexual'
            },
            {
                value: 'bisexual',
                viewValue: 'Bisexual'
            }
        ];
    }
    ChangePreferencesComponent.prototype.ngOnInit = function () {
    };
    ChangePreferencesComponent.prototype.saveChanges = function (value, toChange) {
        if (value) {
            this.changeService.changeUserInfo(value, toChange);
        }
    };
    ChangePreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-preferences',
            template: __webpack_require__(/*! ./change-preferences.component.html */ "./src/app/main-page/settings/change-preferences/change-preferences.component.html"),
            styles: [__webpack_require__(/*! ./change-preferences.component.css */ "./src/app/main-page/settings/change-preferences/change-preferences.component.css"), __webpack_require__(/*! ../settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_change_service__WEBPACK_IMPORTED_MODULE_2__["ChangeService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]])
    ], ChangePreferencesComponent);
    return ChangePreferencesComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-img-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-top: 16px;\n}\n.upload-img-container {\n\twidth: 250px;\n\theight: 250px;\n\tborder: 5px dashed rgba(128, 128, 128, 0.1);\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.upload-img {\n\topacity: 0.1;\n\twidth: 200px;\n}\n.upload-img__user-img {\n\twidth: 250px;\n\theight: 250px;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n.upload-btn-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\tposition: relative;\n\tmargin-top: 15px;\n\t/* overflow: hidden; */\n\t/* display: inline-block; */\n}\n.upload-btn-wrapper input[type=file] {\n\tfont-size: 31px;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\topacity: 0;\n\twidth: 167px;\n\tcursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-img-wrapper\">\n\t<div\n\t\tclass=\"upload-img-container\"\n\t\t[ngStyle]=\"{'border': imageUrl == 'assets/upload.svg' ? '5px dashed rgba(128, 128, 128, 0.1)' : 'none'}\">\n\t\t<img *ngIf=\"imageUrl != 'assets/upload.svg'\" [src]=\"imageUrl\" class=\"upload-img__user-img\">\n\t\t<img *ngIf=\"imageUrl == 'assets/upload.svg'\" [src]=\"imageUrl\" class=\"upload-img\">\n\t</div>\n\t<div class=\"upload-btn-wrapper\">\n\t\t<button mat-raised-button color=\"primary\">Upload profile picture</button>\n\t\t<input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChangeProfilePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfilePhotoComponent", function() { return ChangeProfilePhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeProfilePhotoComponent = /** @class */ (function () {
    function ChangeProfilePhotoComponent(cookieService, authorizationService, userInfoService) {
        this.cookieService = cookieService;
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.imageUrl = "assets/upload.svg";
        this.fileToUpload = null;
    }
    ChangeProfilePhotoComponent.prototype.ngOnInit = function () {
        this.getProfilePhoto();
    };
    ChangeProfilePhotoComponent.prototype.getProfilePhoto = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getProfilePhoto', cookies)
            .toPromise()
            .then(function (data) {
            _this.error = "";
            if (data) {
                _this.imageUrl = "http://localhost:8100/" + data;
            }
        }, function (error) {
        });
    };
    ChangeProfilePhotoComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
            var data = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'photo': event.target.result
            };
            _this.userInfoService.sendRequest('changeProfilePhoto', data)
                .toPromise()
                .then(function (data) {
            }, function (error) {
            });
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    ChangeProfilePhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-profile-photo',
            template: __webpack_require__(/*! ./change-profile-photo.component.html */ "./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.html"),
            styles: [__webpack_require__(/*! ./change-profile-photo.component.css */ "./src/app/main-page/settings/change-profile-photo/change-profile-photo.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], ChangeProfilePhotoComponent);
    return ChangeProfilePhotoComponent;
}());



/***/ }),

/***/ "./src/app/main-page/settings/change.service.ts":
/*!******************************************************!*\
  !*** ./src/app/main-page/settings/change.service.ts ***!
  \******************************************************/
/*! exports provided: ChangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeService", function() { return ChangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeService = /** @class */ (function () {
    function ChangeService(authorizationService, userInfoService, cookieService) {
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
    }
    ChangeService.prototype.changeBasicInfo = function (value, toChange) {
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'toChange': toChange,
            'value': value
        };
        this.userInfoService.sendRequest('changeBasicInfo', data)
            .toPromise()
            .then(function (data) {
        }, function (error) {
        });
    };
    ChangeService.prototype.changeUserInfo = function (value, toChange) {
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'toChange': toChange,
            'value': value
        };
        this.userInfoService.sendRequest('changeUserInfo', data)
            .toPromise()
            .then(function (data) {
        }, function (error) {
        });
    };
    ChangeService.prototype.changeInterests = function (interests) {
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken'),
            'interests': interests
        };
        this.userInfoService.sendRequest('changeInterests', data)
            .toPromise()
            .then(function (data) {
        }, function (error) {
        });
    };
    ChangeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"],
            _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], ChangeService);
    return ChangeService;
}());



/***/ }),

/***/ "./src/app/main-page/settings/settings.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main-page/settings/settings.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-info-field {\n\tcolor: rgba(0,0,0,0.54);\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n.user-info-field__mat-icon {\n\tmargin-right: 16px;\n}\n.error-div {\n\tmargin-top: -20px;\n\tfont-size: 12px;\n}\n.input-field {\n\twidth: 100%;\n}\nmat-select {\n\tmargin-top: 12px;\n}\n.box {\n\tmargin-top: 70px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n.interests:not([type]) {\n\tborder-bottom: none;\n\theight: 15px;\n\t/* margin-top: 25px; */\n\t/* margin: 0; */\n}\n.interests:not([type]):focus:not([readonly]) {\n\tborder-bottom: none;\n\tbox-shadow: none;\n\tmargin-top: 16px;\n}\n"

/***/ }),

/***/ "./src/app/main-page/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/main-page/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-change-profile-photo></app-change-profile-photo>\n<div class=\"container box\">\n\t<app-change-email></app-change-email>\n\t<app-change-login></app-change-login>\n\t<app-change-password></app-change-password>\n\t<app-change-first-name></app-change-first-name>\n\t<app-change-last-name></app-change-last-name>\n\t<app-change-interests></app-change-interests>\n\t<app-change-gender></app-change-gender>\n\t<app-change-preferences></app-change-preferences>\n\t<app-change-biography></app-change-biography>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main-page/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chat-service/chat.service */ "./src/app/chat-service/chat.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(userInfoService, cookieService, chatService, authorizationService, snackBar) {
        var _this = this;
        this.userInfoService = userInfoService;
        this.cookieService = cookieService;
        this.chatService = chatService;
        this.authorizationService = authorizationService;
        this.snackBar = snackBar;
        chatService.messages.subscribe(function (msg) {
            var id = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'id': msg['from_id']
            };
            _this.userInfoService.sendRequest('ifBlocked', id)
                .toPromise()
                .then(function (data) {
                if (data == false) {
                    if (msg['notification']) {
                        var notification = msg['from_login'] + ': ' + msg['notification'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                    else if (msg['message']) {
                        var notification = msg['from_login'] + ': ' + msg['message'];
                        _this.snackBar.open(notification, '', {
                            duration: 7000,
                        });
                    }
                }
            }, function (error) {
            });
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.authorizationService.refreshTokens();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/main-page/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/main-page/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _chat_service_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/material-module/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/material-module/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/profile/user-info/biography/biography.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profile/user-info/biography/biography.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-info-field {\n\tcolor: rgba(0,0,0,0.54);\n\tdisplay: flex;\n\twidth: 95%;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n.user-info-field__mat-icon {\n\tmargin-right: 16px;\n}\n.user-info-field__form-field {\n\twidth: 100%;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/biography/biography.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile/user-info/biography/biography.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\">assignment</mat-icon>\n\t<mat-form-field ngModelGroup=\"biography\" class=\"user-info-field__form-field\">\n\t\t<textarea\n\t\tmaxlength=\"1000\"\n\t\tmatInput\n\t\tmatTextareaAutosize\n\t\tplaceholder=\"Biography\"\n\t\tname=\"biography\"\n\t\t[(ngModel)]=\"value\"></textarea>\n\t</mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/biography/biography.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/user-info/biography/biography.component.ts ***!
  \********************************************************************/
/*! exports provided: BiographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiographyComponent", function() { return BiographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BiographyComponent = /** @class */ (function () {
    // value: string = "mmotov";
    function BiographyComponent() {
    }
    BiographyComponent.prototype.ngOnInit = function () {
    };
    BiographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biography',
            template: __webpack_require__(/*! ./biography.component.html */ "./src/app/profile/user-info/biography/biography.component.html"),
            styles: [__webpack_require__(/*! ./biography.component.css */ "./src/app/profile/user-info/biography/biography.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]
        }),
        __metadata("design:paramtypes", [])
    ], BiographyComponent);
    return BiographyComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/birthdate/birthdate.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profile/user-info/birthdate/birthdate.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#date-input {\n\t/* border-bottom: none; */\n}\ninput:not([type]) {\n\tborder-bottom: none;\n\theight: 15px;\n\tmargin: 0;\n}\ninput:not([type]):focus:not([readonly]) {\n\tborder-bottom: none;\n\tbox-shadow: none;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/birthdate/birthdate.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile/user-info/birthdate/birthdate.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"far fa-calendar-alt\"></i></mat-icon>\n\t<mat-form-field ngModelGroup=\"birthdate\" class=\"user-info-field__form-field\">\n\t\t<input\n\t\t[min]=\"minDate\"\n\t\t[max]=\"maxDate\"\n\t\tmatInput\n\t\tname=\"birthdate\"\n\t\t[matDatepicker]=\"picker\"\n\t\t[(ngModel)]=\"value\"\n\t\tplaceholder=\"Choose a date\">\n\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t<mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n\t</mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/birthdate/birthdate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/user-info/birthdate/birthdate.component.ts ***!
  \********************************************************************/
/*! exports provided: BirthdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdateComponent", function() { return BirthdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BirthdateComponent = /** @class */ (function () {
    function BirthdateComponent() {
        this.minDate = new Date(1900, 0, 1);
        this.maxDate = new Date(2000, 0, 1);
    }
    BirthdateComponent.prototype.ngOnInit = function () {
    };
    BirthdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-birthdate',
            template: __webpack_require__(/*! ./birthdate.component.html */ "./src/app/profile/user-info/birthdate/birthdate.component.html"),
            styles: [__webpack_require__(/*! ./birthdate.component.css */ "./src/app/profile/user-info/birthdate/birthdate.component.css"), __webpack_require__(/*! ../user-info.component.css */ "./src/app/profile/user-info/user-info.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]
        }),
        __metadata("design:paramtypes", [])
    ], BirthdateComponent);
    return BirthdateComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/first-last-name/first-last-name.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/profile/user-info/first-last-name/first-last-name.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-info-field {\n\tcolor: rgba(0,0,0,0.54);\n\tdisplay: flex;\n\twidth: 95%;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n.user-info-field__mat-icon {\n\tmargin-right: 16px;\n}\n.user-info-field__form-field {\n\twidth: 100%;\n}\ninput[type=text]:not(.browser-default) {\n\theight: 35px;\n\tmargin: 0px;\n\tborder-bottom: none;\n\tbox-shadow: none;\n}\ninput[type=text]:focus:not([readonly]) {\n\tborder-bottom: none;\n\tbox-shadow: none;\n\tmargin-top: 8px;\n}\n.input-field {\n\twidth: 95%;\n\t/* height: 100%; */\n}\n.input-field > mat-error {\n\tfont-size: 12px;\n}\n.input-field > input {\n\tmargin-bottom: 0px;\n}\n.input-field > mat-error > div {\n\theight: 8px;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/first-last-name/first-last-name.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/user-info/first-last-name/first-last-name.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-address-card\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<mat-form-field class=\"user-info-field__form-field\">\n\t\t\t<input matInput\n\t\t\tplaceholder=\"First Name\"\n\t\t\tid=\"first_name\"\n\t\t\ttype=\"text\"\n\t\t\tclass=\"validate\"\n\t\t\tname=\"firstName\"\n\t\t\t#firstName=\"ngModel\"\n\t\t\t[(ngModel)]=\"this.authorizationService.user.firstName\">\n\t\t</mat-form-field>\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('firstnamePattern', 'firstName')\">\n\t\t\t<div>\n\t\t\t\t{{ this.authorizationService.getErrorMessage(\"first name\", 'firstName') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n</div>\n<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-address-card\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<mat-form-field class=\"user-info-field__form-field\">\n\t\t\t<input matInput\n\t\t\tplaceholder=\"Last Name\"\n\t\t\tid=\"last_name\"\n\t\t\ttype=\"text\"\n\t\t\tclass=\"validate\"\n\t\t\tname=\"lastName\"\n\t\t\t#LastName=\"ngModel\"\n\t\t\t[(ngModel)]=\"this.authorizationService.user.lastName\">\n\t\t</mat-form-field>\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('lastnamePattern', 'lastName')\">\n\t\t\t<div>\n\t\t\t\t{{ this.authorizationService.getErrorMessage(\"last name\", 'lastName') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/first-last-name/first-last-name.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/profile/user-info/first-last-name/first-last-name.component.ts ***!
  \********************************************************************************/
/*! exports provided: FirstLastNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstLastNameComponent", function() { return FirstLastNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstLastNameComponent = /** @class */ (function () {
    function FirstLastNameComponent(authorizationService) {
        this.authorizationService = authorizationService;
    }
    FirstLastNameComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_2__["Authorization"]();
        this.authorizationService.patterns = new _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__["Patterns"]();
    };
    FirstLastNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-last-name',
            template: __webpack_require__(/*! ./first-last-name.component.html */ "./src/app/profile/user-info/first-last-name/first-last-name.component.html"),
            styles: [__webpack_require__(/*! ./first-last-name.component.css */ "./src/app/profile/user-info/first-last-name/first-last-name.component.css")]
        }),
        __metadata("design:paramtypes", [_user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]])
    ], FirstLastNameComponent);
    return FirstLastNameComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/gender/gender.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile/user-info/gender/gender.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-group {\n\tdisplay: inline-flex;\n\tflex-direction: column;\n}\n\n.radio-group-button {\n\t margin: 5px;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/gender/gender.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/user-info/gender/gender.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-transgender\"></i></mat-icon>\n\t<mat-form-field ngModelGroup=\"gender\" class=\"user-info-field__form-field\">\n\t\t<mat-select placeholder=\"Gender\" [(value)]=\"value\" name=\"gender\" ngModel>\n\t\t\t<mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\n\t\t\t\t{{ gender.viewValue }}\n\t\t\t</mat-option>\n\t\t</mat-select>\n\t</mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/gender/gender.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/user-info/gender/gender.component.ts ***!
  \**************************************************************/
/*! exports provided: GenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderComponent", function() { return GenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenderComponent = /** @class */ (function () {
    function GenderComponent() {
        this.genders = [
            {
                value: 'male',
                viewValue: 'Male'
            },
            {
                value: 'female',
                viewValue: 'Female'
            }
        ];
    }
    GenderComponent.prototype.ngOnInit = function () {
    };
    GenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gender',
            template: __webpack_require__(/*! ./gender.component.html */ "./src/app/profile/user-info/gender/gender.component.html"),
            styles: [__webpack_require__(/*! ./gender.component.css */ "./src/app/profile/user-info/gender/gender.component.css"), __webpack_require__(/*! ../user-info.component.css */ "./src/app/profile/user-info/user-info.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]
        }),
        __metadata("design:paramtypes", [])
    ], GenderComponent);
    return GenderComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/interests/interests.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profile/user-info/interests/interests.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: teal;\n}\n\ninput:not([type]) {\n\tborder-bottom: none;\n\theight: 15px;\n\tmargin: 0;\n}\n\ninput:not([type]):focus:not([readonly]) {\n\tborder-bottom: none;\n\tbox-shadow: none;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/interests/interests.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile/user-info/interests/interests.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-hashtag\"></i></mat-icon>\n\t<mat-form-field class=\"user-info-field__form-field\">\n\t\t<mat-chip-list\n\t\t\t#chipList>\n\t\t\t<mat-chip\n\t\t\t*ngFor=\"let tag of tags\"\n\t\t\t[selectable]=\"selectable\"\n\t\t\t[removable]=\"removable\"\n\t\t\t(removed)=\"remove(tag)\">\n\t\t\t\t{{tag}}\n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n\t\t\t</mat-chip>\n\t\t\t<input\n\t\t\tmatInput\n\t\t\tplaceholder=\"Interests\"\n\t\t\t#tagInput\n\t\t\t[formControl]=\"tagCtrl\"\n\t\t\t[matAutocomplete]=\"auto\"\n\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t[matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\"\n\t\t\t(matChipInputTokenEnd)=\"add($event)\"\n\t\t\t/>\n\t\t</mat-chip-list>\n\t\t<mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n\t\t\t<mat-option *ngFor=\"let tag of filteredTags | async\" [value]=\"tag\">\n\t\t\t\t{{ tag }}\n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t</mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/interests/interests.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/user-info/interests/interests.component.ts ***!
  \********************************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InterestsComponent = /** @class */ (function () {
    function InterestsComponent(userInfoService) {
        var _this = this;
        this.userInfoService = userInfoService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.counter = 0;
        // tagsToStore: UserTags;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.tags = [];
        this.allTags = [];
        this.filteredTags = this.tagCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tag) { return tag ? _this.filter(tag) : _this.allTags.slice(); }));
    }
    InterestsComponent.prototype.ngOnInit = function () {
        this.getAllInterests();
    };
    InterestsComponent.prototype.getAllInterests = function () {
        var _this = this;
        this.userInfoService.getData("getInterests")
            .toPromise()
            .then(function (data) {
            _this.error = '';
            _this.allTags = data;
        }, function (error) {
            _this.error = error.error.exception[0].message;
        });
    };
    InterestsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        var pattern = new RegExp("^[a-zA-Z0-9]{2,15}$");
        if (pattern.test(value) && this.counter < 10) {
            if ((value || '').trim() && this.checkIfExists(value)) {
                this.tags.push(value.trim());
                this.counter = this.tags.length;
                // this.tagsToStore.tags = this.tags;
            }
        }
        if (input) {
            input.value = '';
        }
        this.tagCtrl.setValue(null);
    };
    InterestsComponent.prototype.checkIfExists = function (tag) {
        for (var i in this.tags) {
            if (this.tags[i] == tag) {
                return false;
            }
        }
        return true;
    };
    InterestsComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
            this.counter = this.tags.length;
        }
    };
    InterestsComponent.prototype.filter = function (name) {
        return this.allTags.filter(function (tag) {
            return tag.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    InterestsComponent.prototype.selected = function (event) {
        if (this.checkIfExists(event.option.viewValue)) {
            this.tags.push(event.option.viewValue);
            this.tagInput.nativeElement.value = '';
            this.tagCtrl.setValue(null);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InterestsComponent.prototype, "tagInput", void 0);
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/profile/user-info/interests/interests.component.html"),
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/profile/user-info/interests/interests.component.css"), __webpack_require__(/*! ../user-info.component.css */ "./src/app/profile/user-info/user-info.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"] }]
        }),
        __metadata("design:paramtypes", [_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/login-email-password/login-email-password.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/profile/user-info/login-email-password/login-email-password.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-info-field {\n\tcolor: rgba(0,0,0,0.54);\n\tdisplay: flex;\n\twidth: 95%;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n.user-info-field__mat-icon {\n\tmargin-right: 16px;\n}\n.user-info-field__form-field {\n\twidth: 100%;\n}\ninput[type=text]:not(.browser-default) {\n\theight: 35px;\n\tmargin: 0px;\n\tborder-bottom: none;\n\tbox-shadow: none;\n}\ninput[type=text]:focus:not([readonly]) {\n\tborder-bottom: none;\n\tbox-shadow: none;\n\tmargin-top: 8px;\n}\ninput[type=password]:not(.browser-default) {\n\theight: 35px;\n\tmargin: 0px;\n\tborder-bottom: none;\n\tbox-shadow: none;\n}\ninput[type=password]:focus:not([readonly]) {\n\tborder-bottom: none;\n\tbox-shadow: none;\n\tmargin-top: 8px;\n}\n.input-field {\n\twidth: 95%;\n\t/* height: 100%; */\n}\n.input-field > mat-error {\n\tfont-size: 12px;\n}\n.input-field > input {\n\tmargin-bottom: 0px;\n}\n.input-field > mat-error > div {\n\theight: 8px;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/login-email-password/login-email-password.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/profile/user-info/login-email-password/login-email-password.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-user\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<mat-form-field class=\"user-info-field__form-field\">\n\t\t\t<input matInput\n\t\t\tplaceholder=\"Login\"\n\t\t\tid=\"disabled\"\n\t\t\ttype=\"text\"\n\t\t\tclass=\"validate\"\n\t\t\tname=\"login\"\n\t\t\t#login=\"ngModel\"\n\t\t\t[(ngModel)]=\"this.authorizationService.user.login\">\n\t\t</mat-form-field>\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('loginPattern', 'login')\">\n\t\t\t<div>\n\t\t\t\t{{ this.authorizationService.getErrorMessage(\"login\", 'login') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n</div>\n<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-at\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<mat-form-field class=\"user-info-field__form-field\">\n\t\t\t<input matInput\n\t\t\tplaceholder=\"Email\"\n\t\t\tid=\"email\"\n\t\t\ttype=\"text\"\n\t\t\tclass=\"validate\"\n\t\t\tname=\"email\"\n\t\t\t#Email=\"ngModel\"\n\t\t\t[(ngModel)]=\"this.authorizationService.user.email\">\n\t\t</mat-form-field>\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('emailPattern', 'email')\">\n\t\t\t<div>\n\t\t\t\t{{ this.authorizationService.getErrorMessage(\"email\", 'email') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n</div>\n<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-key\"></i></mat-icon>\n\t<div class=\"input-field\">\n\t\t<mat-form-field class=\"user-info-field__form-field\">\n\t\t\t<input matInput\n\t\t\tplaceholder=\"Password\"\n\t\t\tid=\"password\"\n\t\t\ttype=\"password\"\n\t\t\tclass=\"validate\"\n\t\t\tname=\"password\"\n\t\t\t#Password=\"ngModel\"\n\t\t\t[(ngModel)]=\"this.authorizationService.user.password\">\n\t\t</mat-form-field>\n\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('passwordPattern', 'password')\">\n\t\t\t<div>\n\t\t\t\t{{ this.authorizationService.getErrorMessage(\"password\", 'password') }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/login-email-password/login-email-password.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/profile/user-info/login-email-password/login-email-password.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LoginEmailPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEmailPasswordComponent", function() { return LoginEmailPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginEmailPasswordComponent = /** @class */ (function () {
    function LoginEmailPasswordComponent(authorizationService) {
        this.authorizationService = authorizationService;
    }
    LoginEmailPasswordComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _user_authorization_authorization_model__WEBPACK_IMPORTED_MODULE_2__["Authorization"]();
        this.authorizationService.patterns = new _user_authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__["Patterns"]();
    };
    LoginEmailPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-email-password',
            template: __webpack_require__(/*! ./login-email-password.component.html */ "./src/app/profile/user-info/login-email-password/login-email-password.component.html"),
            styles: [__webpack_require__(/*! ./login-email-password.component.css */ "./src/app/profile/user-info/login-email-password/login-email-password.component.css")]
        }),
        __metadata("design:paramtypes", [_user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]])
    ], LoginEmailPasswordComponent);
    return LoginEmailPasswordComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/preferences/preferences.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/profile/user-info/preferences/preferences.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-group {\n\tdisplay: inline-flex;\n\tflex-direction: column;\n}\n\n.radio-group-button {\n\t margin: 5px;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/preferences/preferences.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/profile/user-info/preferences/preferences.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-info-field\">\n\t<mat-icon class=\"user-info-field__mat-icon\"><i class=\"fas fa-venus-mars\"></i></mat-icon>\n\t<mat-form-field ngModelGroup=\"preferences\" class=\"user-info-field__form-field\">\n\t\t<mat-select matInput [(value)]=\"value\" name=\"preferences\" ngModel placeholder=\"Sexual preferences\">\n\t\t\t<mat-option *ngFor=\"let preference of preferences\" [value]=\"preference.value\">\n\t\t\t\t{{ preference.viewValue }}\n\t\t\t</mat-option>\n\t\t</mat-select>\n\t</mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/preferences/preferences.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/profile/user-info/preferences/preferences.component.ts ***!
  \************************************************************************/
/*! exports provided: PreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function() { return PreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreferencesComponent = /** @class */ (function () {
    function PreferencesComponent() {
        this.preferences = [
            {
                value: 'heterosexual',
                viewValue: 'Heterosexual'
            },
            {
                value: 'homosexual',
                viewValue: 'Homosexual'
            },
            {
                value: 'bisexual',
                viewValue: 'Bisexual'
            }
        ];
        this.selected = this.preferences[2].viewValue;
    }
    PreferencesComponent.prototype.ngOnInit = function () {
    };
    PreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preferences',
            template: __webpack_require__(/*! ./preferences.component.html */ "./src/app/profile/user-info/preferences/preferences.component.html"),
            styles: [__webpack_require__(/*! ./preferences.component.css */ "./src/app/profile/user-info/preferences/preferences.component.css"), __webpack_require__(/*! ../user-info.component.css */ "./src/app/profile/user-info/user-info.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]
        }),
        __metadata("design:paramtypes", [])
    ], PreferencesComponent);
    return PreferencesComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/profile-photo/profile-photo.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/user-info/profile-photo/profile-photo.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-img-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n.upload-img-container {\n\twidth: 250px;\n\theight: 250px;\n\tborder: 5px dashed rgba(128, 128, 128, 0.1);\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.upload-img {\n\topacity: 0.1;\n\twidth: 200px;\n}\n.upload-img__user-img {\n\twidth: 250px;\n\theight: 250px;\n\t-o-object-fit: scale-down;\n\t   object-fit: scale-down;\n}\n.upload-btn-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\tposition: relative;\n\tmargin-top: 15px;\n\t/* overflow: hidden; */\n\t/* display: inline-block; */\n}\n.upload-btn-wrapper input[type=file] {\n\tfont-size: 31px;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\topacity: 0;\n\twidth: 167px;\n\tcursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/profile-photo/profile-photo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/profile/user-info/profile-photo/profile-photo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-img-wrapper\">\n\t<div\n\t\tclass=\"upload-img-container\"\n\t\t[ngStyle]=\"{'border': imageUrl == 'assets/upload.svg' ? '5px dashed rgba(128, 128, 128, 0.1)' : 'none'}\">\n\t\t<img *ngIf=\"imageUrl != 'assets/upload.svg'\" [src]=\"imageUrl\" class=\"upload-img__user-img\">\n\t\t<img *ngIf=\"imageUrl == 'assets/upload.svg'\" [src]=\"imageUrl\" class=\"upload-img\">\n\t</div>\n\t<div class=\"upload-btn-wrapper\">\n\t\t<button mat-raised-button color=\"primary\">Upload profile picture</button>\n\t\t<input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/user-info/profile-photo/profile-photo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/profile/user-info/profile-photo/profile-photo.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfilePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePhotoComponent", function() { return ProfilePhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePhotoComponent = /** @class */ (function () {
    function ProfilePhotoComponent(authorizationService, userInfoService) {
        this.authorizationService = authorizationService;
        this.userInfoService = userInfoService;
        this.imageUrl = "assets/upload.svg";
        this.fileToUpload = null;
    }
    ProfilePhotoComponent.prototype.ngOnInit = function () {
        this.getProfilePhoto();
    };
    ProfilePhotoComponent.prototype.getProfilePhoto = function () {
        var _this = this;
        var cookies = this.authorizationService.getTokensFromCookie();
        this.userInfoService.sendRequest('getProfilePhoto', cookies)
            .toPromise()
            .then(function (data) {
            _this.error = "";
            if (data) {
                _this.imageUrl = "http://localhost:8100/" + data;
            }
        }, function (error) {
        });
    };
    ProfilePhotoComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        //Show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    ProfilePhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-photo',
            template: __webpack_require__(/*! ./profile-photo.component.html */ "./src/app/profile/user-info/profile-photo/profile-photo.component.html"),
            styles: [__webpack_require__(/*! ./profile-photo.component.css */ "./src/app/profile/user-info/profile-photo/profile-photo.component.css")],
            viewProviders: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], useExisting: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]
        }),
        __metadata("design:paramtypes", [_user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"],
            _service_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]])
    ], ProfilePhotoComponent);
    return ProfilePhotoComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-info/service/user-info.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/user-info/service/user-info.service.ts ***!
  \****************************************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserInfoService = /** @class */ (function () {
    function UserInfoService(authorizationService, http, cookieService) {
        this.authorizationService = authorizationService;
        this.http = http;
        this.cookieService = cookieService;
        this.userInfo = [];
    }
    UserInfoService.prototype.getData = function (route) {
        return this.http.get('http://localhost:8100/api/user-info/' + route);
    };
    UserInfoService.prototype.sendRequest = function (route, data) {
        return this.http.post('http://localhost:8100/api/user-info/' + route, data);
    };
    UserInfoService.prototype.getLocation = function () {
        var _this = this;
        this.http.get('http://ip-api.com/json')
            .toPromise()
            .then(function (data) {
            var location = {
                'refreshToken': _this.cookieService.get('RefreshToken'),
                'city': data['city'],
                'country': data['country'],
                'latitude': data['lat'],
                'longtitude': data['lon']
            };
            _this.sendRequest('userLocation', location)
                .toPromise()
                .then(function (data) {
            }, function (error) {
            });
        });
    };
    UserInfoService.prototype.sendData = function (route, data) {
        var _this = this;
        this.http.post('http://localhost:8100/api/user-info/' + route, data)
            .toPromise()
            .then(function (data) {
            _this.error = '';
            _this.authorizationService.deleteTokensFromCookie();
            _this.authorizationService.setTokensInCookie(data);
            window.open('/main', '_self');
        }, function (error) {
        });
    };
    UserInfoService.prototype.getUid = function () {
        var route = 'getUidFromToken';
        var data = {
            'refreshToken': this.cookieService.get('RefreshToken')
        };
        return this.http.post('http://localhost:8100/api/user-info/' + route, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var id = response['id'];
            var login = response['login'];
            var firstName = response['firstName'];
            var lastName = response['lastName'];
            var profilePhoto = response['profilePhoto'];
            return {
                id: id,
                login: login,
                firstName: firstName,
                lastName: lastName,
                profilePhoto: profilePhoto
            };
        }));
    };
    UserInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/app/profile/user-info/user-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/profile/user-info/user-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n\tfont-family: Roboto, sans-serif;\n}\n\n.user-info-container {\n\tmargin-top: 15px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.user-info-title {\n\tfont-size: 24px;\n\tfont-weight: 300;\n}\n\n.user-info-toolbar {\n\tbox-shadow: 0px 1px 0.1in 0px rgba(0,0,0,0.75);\n\tpadding: 0;\n}\n\n.user-info-field {\n\tcolor: rgba(0,0,0,0.54);\n\tdisplay: flex;\n\twidth: 95%;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.user-info-field__mat-icon {\n\tmargin-right: 16px;\n}\n\n.user-info-field__form-field {\n\twidth: 100%;\n}\n\n.under-divider {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-top: 25px;\n}\n\n.under-divider > mat-error {\n\tmargin-left: 16px;\n}\n"

/***/ }),

/***/ "./src/app/profile/user-info/user-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/user-info/user-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\" class=\"user-info-toolbar\">\n\t<div class=\"container\">\n\t\t<h3 class=\"user-info-title\">Your info</h3>\n\t</div>\n</mat-toolbar>\n<form #AddUserInfoForm=\"ngForm\" (ngSubmit)=\"onSubmit(AddUserInfoForm)\">\n\t<div class=\"container user-info-container\">\n\t\t<app-profile-photo></app-profile-photo>\n\t\t<app-gender></app-gender>\n\t\t<app-preferences></app-preferences>\n\t\t<app-birthdate></app-birthdate>\n\t\t<app-interests></app-interests>\n\t\t<app-biography></app-biography>\n\t</div>\n\t<div class=\"row under-divider container\">\n\t\t<button mat-raised-button color=\"accent\" type=\"submit\" name=\"submit\">Save</button>\n\t\t<mat-error *ngIf=\"error\">\n\t\t\t<div>\n\t\t\t\t{{ error }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</div>\n</form>\n"

/***/ }),

/***/ "./src/app/profile/user-info/user-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/user-info/user-info.component.ts ***!
  \**********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/profile/user-info/interests/interests.component.ts");
/* harmony import */ var _profile_photo_profile_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-photo/profile-photo.component */ "./src/app/profile/user-info/profile-photo/profile-photo.component.ts");
/* harmony import */ var _preferences_preferences_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preferences/preferences.component */ "./src/app/profile/user-info/preferences/preferences.component.ts");
/* harmony import */ var _gender_gender_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gender/gender.component */ "./src/app/profile/user-info/gender/gender.component.ts");
/* harmony import */ var _birthdate_birthdate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./birthdate/birthdate.component */ "./src/app/profile/user-info/birthdate/birthdate.component.ts");
/* harmony import */ var _biography_biography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./biography/biography.component */ "./src/app/profile/user-info/biography/biography.component.ts");
/* harmony import */ var _service_user_info_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(userInfoService, authorizationService, router, cookieService) {
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
        this.router = router;
        this.cookieService = cookieService;
    }
    UserInfoComponent.prototype.ngAfterViewInit = function () {
    };
    UserInfoComponent.prototype.ngOnInit = function () {
        this.authorizationService.refreshTokens();
    };
    UserInfoComponent.prototype.onSubmit = function (form) {
        var url = this.photo.imageUrl;
        var tags = this.interests.tags;
        var gender = this.gender.value;
        var preferences = this.preferences.value;
        var birthdate = new Date(this.birthdate.value);
        var biography = this.biography.value;
        var data = {
            photo: url,
            tags: tags,
            gender: gender,
            preferences: preferences,
            birthdate: birthdate,
            biography: biography,
            refreshToken: this.cookieService.get('RefreshToken'),
            accessToken: this.cookieService.get('AccessToken'),
            expireTime: this.cookieService.get('ExpireTime')
        };
        if (this.isValid(data)) {
            data['preferences'] = this.checkPreferences(data['preferences']);
            this.userInfoService.sendData('storeUserInfo', data);
        }
    };
    UserInfoComponent.prototype.isValid = function (data) {
        if (this.checkPhoto(data['photo']) &&
            this.checkGender(data['gender']) &&
            this.checkBirthdate(data['birthdate']) &&
            this.checkTags(data['tags']) &&
            this.checkGender(data['gender']) &&
            this.checkBiography(data['biography'])) {
            return true;
        }
        else {
            return false;
        }
    };
    UserInfoComponent.prototype.checkPhoto = function (url) {
        if (url && url != "assets/upload.svg") {
            this.error = '';
            return true;
        }
        else {
            this.error = "You have to upload profile img";
            return false;
        }
    };
    UserInfoComponent.prototype.checkTags = function (tags) {
        if (tags.length) {
            this.error = '';
            return true;
        }
        else {
            this.error = "You have to choose at least one interest";
            return false;
        }
    };
    UserInfoComponent.prototype.checkGender = function (gender) {
        if (gender) {
            this.error = '';
            return true;
        }
        else {
            this.error = "You have to specify your gender";
            return false;
        }
    };
    UserInfoComponent.prototype.checkBirthdate = function (birthdate) {
        if (birthdate && Object.prototype.toString.call(birthdate) === "[object Date]" && !isNaN(birthdate.getTime())) {
            this.error = '';
            return true;
        }
        else {
            this.error = "Invalid date";
            return false;
        }
    };
    UserInfoComponent.prototype.checkBiography = function (bio) {
        if (bio) {
            this.error = '';
            return true;
        }
        else {
            this.error = "Please write something, because it's mandatory of our project";
            return false;
        }
    };
    UserInfoComponent.prototype.checkPreferences = function (pref) {
        if (pref) {
            return pref;
        }
        else {
            return "Bisexual";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_interests_interests_component__WEBPACK_IMPORTED_MODULE_2__["InterestsComponent"]),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "interests", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_profile_photo_profile_photo_component__WEBPACK_IMPORTED_MODULE_3__["ProfilePhotoComponent"]),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "photo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_4__["PreferencesComponent"]),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "preferences", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_gender_gender_component__WEBPACK_IMPORTED_MODULE_5__["GenderComponent"]),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "gender", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_birthdate_birthdate_component__WEBPACK_IMPORTED_MODULE_6__["BirthdateComponent"]),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "birthdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_biography_biography_component__WEBPACK_IMPORTED_MODULE_7__["BiographyComponent"]),
        __metadata("design:type", Object)
    ], UserInfoComponent.prototype, "biography", void 0);
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/profile/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/profile/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_info_service__WEBPACK_IMPORTED_MODULE_8__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_9__["AuthorizationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/user/authorization/authorization.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/authorization/authorization.model.ts ***!
  \***********************************************************/
/*! exports provided: Authorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authorization", function() { return Authorization; });
var Authorization = /** @class */ (function () {
    function Authorization() {
    }
    return Authorization;
}());



/***/ }),

/***/ "./src/app/user/authorization/authorization.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/authorization/authorization.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(router, http, cookieService) {
        this.router = router;
        this.http = http;
        this.cookieService = cookieService;
        this.cookieRefreshTokenValue = 'UNKNOWN';
        this.cookieAccessTokenValue = 'UNKNOWN';
        this.cookieExpireTimeValue = 'UNKNOWN';
    }
    AuthorizationService.prototype.sendData = function (route, data) {
        return this.http.post('http://localhost:8100/api/authorization/' + route, data);
    };
    AuthorizationService.prototype.setTokensInCookie = function (data) {
        this.cookieService.set('AccessToken', data['accessToken'], 3, '/');
        this.cookieService.set('RefreshToken', data['refreshToken'], 3, '/');
        this.cookieService.set('ExpireTime', data['expireTime'], 3, '/');
    };
    AuthorizationService.prototype.isTokensExists = function () {
        if (this.cookieService.get('AccessToken')
            && this.cookieService.get('RefreshToken')
            && this.cookieService.get('ExpireTime')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthorizationService.prototype.loginIfTokensValid = function () {
        var _this = this;
        if (this.isTokensExists()) {
            this.checkIfTokensValid()
                .toPromise()
                .then(function (data) {
                _this.error = '';
                _this.setTokensInCookie(data);
                _this.openUserProfilePage(data['firstTimeLogin']);
            }, function (error) {
                if (_this.cookieService.get('AccessToken')) {
                    _this.deleteTokensAndLogout();
                }
            });
        }
    };
    AuthorizationService.prototype.checkIfTokensValid = function () {
        var cookies = this.getTokensFromCookie();
        return this.sendData('checkTokens', cookies);
    };
    AuthorizationService.prototype.getTokensFromCookie = function () {
        return {
            'accessToken': this.cookieService.get('AccessToken'),
            'refreshToken': this.cookieService.get('RefreshToken'),
            'expireTime': this.cookieService.get('ExpireTime')
        };
    };
    AuthorizationService.prototype.deleteTokensFromCookie = function () {
        this.cookieService.deleteAll('/');
    };
    AuthorizationService.prototype.deleteTokensAndLogout = function () {
        var _this = this;
        var token = { 'refreshToken': this.cookieService.get('RefreshToken') };
        this.http.post('http://localhost:8100/api/authorization/deleteRefreshTokenFromDb', token)
            .toPromise()
            .then(function (data) {
            _this.deleteTokensFromCookie();
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.deleteTokensFromCookie();
            _this.router.navigate(['/home']);
        });
    };
    AuthorizationService.prototype.refreshTokens = function () {
        var _this = this;
        var cookies = this.getTokensFromCookie();
        this.sendData('checkTokens', cookies)
            .toPromise()
            .then(function (data) {
            // this.deleteTokensFromCookie();
            _this.setTokensInCookie(data);
        }, function (error) {
            _this.deleteTokensAndLogout();
        });
    };
    AuthorizationService.prototype.openUserProfilePage = function (firstTimeLogin) {
        if (!this.error) {
            if (firstTimeLogin === '0') {
                this.router.navigate(['/main/profile']);
                // window.open('/main/profile', '_self');
            }
            else {
                this.router.navigate(['/user-info']);
                // window.open('/user-info', '_self');
            }
        }
    };
    AuthorizationService.prototype.checkPattern = function (pattern, field) {
        if (this.user[field]) {
            if (this.patterns[pattern].test(this.user[field])) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AuthorizationService.prototype.getErrorMessage = function (name, field) {
        if (this.user[field]) {
            return ("Not a valid " + name);
        }
    };
    AuthorizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "./src/app/user/authorization/patterns.model.ts":
/*!******************************************************!*\
  !*** ./src/app/user/authorization/patterns.model.ts ***!
  \******************************************************/
/*! exports provided: Patterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patterns", function() { return Patterns; });
var Patterns = /** @class */ (function () {
    function Patterns() {
        this.emailPattern = new RegExp("^[\\w.%+-]{3,}@[a-z0-9.-]+\\.[a-z]{2,4}$");
        this.loginPattern = new RegExp("[a-zA-Z0-9_-]{3,15}$");
        this.passwordPattern = new RegExp("^(?=.*[A-Z])(?=.*[0-9]).{6,32}$");
        this.firstnamePattern = new RegExp("^[a-zA-Z-]{2,30}$");
        this.lastnamePattern = new RegExp("^[a-zA-Z-]{2,30}$");
    }
    return Patterns;
}());



/***/ }),

/***/ "./src/app/user/congrats/congrats.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/congrats/congrats.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n\tcolor: white;\n}\n"

/***/ }),

/***/ "./src/app/user/congrats/congrats.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/congrats/congrats.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>An email was sent to you for account varification</h3>\n"

/***/ }),

/***/ "./src/app/user/congrats/congrats.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/congrats/congrats.component.ts ***!
  \*****************************************************/
/*! exports provided: CongratsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratsComponent", function() { return CongratsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CongratsComponent = /** @class */ (function () {
    function CongratsComponent() {
    }
    CongratsComponent.prototype.ngOnInit = function () {
    };
    CongratsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-congrats',
            template: __webpack_require__(/*! ./congrats.component.html */ "./src/app/user/congrats/congrats.component.html"),
            styles: [__webpack_require__(/*! ./congrats.component.css */ "./src/app/user/congrats/congrats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CongratsComponent);
    return CongratsComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-pass/forgot-pass.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/forgot-pass/forgot-pass.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field > mat-error {\n\tfont-size: 10px;\n}\n.input-field > input {\n\tmargin-bottom: 10px;\n}\n.input-field > mat-error > div {\n\theight: 10px;\n}\n.row > form > mat-error > div {\n\tmargin-top: 20px;\n}\nform > div {\n\tmargin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/user/forgot-pass/forgot-pass.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/forgot-pass/forgot-pass.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!emailWasSent\" class=\"row form-container\">\n\t<h4>Please enter your email so we can sent you new password</h4>\n\t<form class=\"col s12\"\n\t\t#forgotEmailForm=\"ngForm\"\n\t\t(ngSubmit)=\"OnSubmit(forgotEmailForm)\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<input matInput\n\t\t\t\tid=\"email\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"email\"\n\t\t\t\t#email=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"user.email\">\n\t\t\t\t<mat-error *ngIf=\"!checkPattern('emailPattern', 'email')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ getErrorMessage(\"email\", 'email') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<button class=\"btn waves-effect waves-light\"\n\t\t\ttype=\"submit\"\n\t\t\tname=\"action\">send\n\t\t\t<i class=\"material-icons right\">send</i>\n\t\t</button>\n\t</form>\n</div>\n<div *ngIf=\"emailWasSent\" class=\"row form-container\">\n\t<h4>Check your email</h4>\n</div>\n"

/***/ }),

/***/ "./src/app/user/forgot-pass/forgot-pass.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/forgot-pass/forgot-pass.component.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function() { return ForgotPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authorization_authorization_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPassComponent = /** @class */ (function () {
    function ForgotPassComponent(authorizationService) {
        this.authorizationService = authorizationService;
    }
    ForgotPassComponent.prototype.ngOnInit = function () {
        this.user = new _authorization_authorization_model__WEBPACK_IMPORTED_MODULE_1__["Authorization"]();
        this.patterns = new _authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__["Patterns"]();
        this.resetForm();
        this.emailWasSent = false;
    };
    ForgotPassComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
            this.user = {
                firstName: '',
                lastName: '',
                login: '',
                email: '',
                password: ''
            };
        }
    };
    ForgotPassComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        if (this.checkForm()) {
            var data = {
                'email': this.user.email
            };
            this.authorizationService.sendData('resetPassword', data)
                .toPromise()
                .then(function (data) {
                _this.emailWasSent = true;
            }, function (error) {
            });
        }
    };
    ForgotPassComponent.prototype.checkForm = function () {
        if (this.patterns.emailPattern.test(this.user.email)) {
            return true;
        }
        else {
            return false;
        }
    };
    ForgotPassComponent.prototype.checkPattern = function (pattern, field) {
        if (this.user[field]) {
            if (this.patterns[pattern].test(this.user[field])) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    ForgotPassComponent.prototype.getErrorMessage = function (name, field) {
        if (this.user[field]) {
            return ("Not a valid " + name);
        }
    };
    ForgotPassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-pass',
            template: __webpack_require__(/*! ./forgot-pass.component.html */ "./src/app/user/forgot-pass/forgot-pass.component.html"),
            styles: [__webpack_require__(/*! ./forgot-pass.component.css */ "./src/app/user/forgot-pass/forgot-pass.component.css"), __webpack_require__(/*! ../../home/home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])
    ], ForgotPassComponent);
    return ForgotPassComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttons {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n}\n\n.input-field > input {\n\tmargin-bottom: 0;\n}\n\n.input-field > mat-error {\n\tfont-size: 10px;\n}\n\n#buttons > button:first-child {\n\tmargin-bottom: 20px;\n}\n\n.btn {\n\tmargin-bottom: 5px;\n}\n"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row form-container\">\n\t<form class=\"col s12\" #LoginForm=\"ngForm\" (ngSubmit)=\"OnSubmit(LoginForm)\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<input\n\t\t\t\tmatInput\n\t\t\t\tid=\"first_name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"login\"\n\t\t\t\t#Login=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"this.authorizationService.user.login\">\n\t\t\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('loginPattern', 'login')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ this.authorizationService.getErrorMessage(\"login\", 'login') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"first_name\">Login</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<input id=\"password\"\n\t\t\t\ttype=\"password\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"password\"\n\t\t\t\t#Password=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"this.authorizationService.user.password\">\n\t\t\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('passwordPattern', 'password')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ this.authorizationService.getErrorMessage(\"password\", 'password') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"buttons\">\n\t\t\t<button class=\"btn waves-effect waves-light\"\n\t\t\t\ttype=\"submit\"\n\t\t\t\tname=\"Submit\">Login\n\t\t\t\t<i class=\"material-icons right\">send</i>\n\t\t\t</button>\n\t\t\t<button class=\"btn waves-effect waves-light\"\n\t\t\t\ttype=\"button\"\n\t\t\t\tname=\"forgot\"\n\t\t\t\trouterLink=\"/home/forgot-pass\"> Forgot password\n\t\t\t\t<i class=\"material-icons right\">help_outline</i>\n\t\t\t</button>\n\t\t</div>\n\t\t<mat-error *ngIf=\"error\">\n\t\t\t<div>\n\t\t\t\t{{ error }}\n\t\t\t</div>\n\t\t</mat-error>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authorization_authorization_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _authorization_patterns_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authorization_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authorizationService, router, cookieService) {
        this.authorizationService = authorizationService;
        this.router = router;
        this.cookieService = cookieService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _authorization_authorization_model__WEBPACK_IMPORTED_MODULE_1__["Authorization"]();
        this.authorizationService.patterns = new _authorization_patterns_model__WEBPACK_IMPORTED_MODULE_2__["Patterns"]();
        this.resetForm();
    };
    LoginComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
            this.authorizationService.user = {
                firstName: '',
                lastName: '',
                login: '',
                email: '',
                password: ''
            };
        }
    };
    LoginComponent.prototype.OnSubmit = function (form) {
        if (this.checkForm()) {
            this.loginToProfile();
        }
    };
    LoginComponent.prototype.checkForm = function () {
        if (this.authorizationService.patterns.loginPattern.test(this.authorizationService.user.login) &&
            this.authorizationService.patterns.passwordPattern.test(this.authorizationService.user.password)) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginComponent.prototype.loginToProfile = function () {
        var _this = this;
        this.authorizationService.sendData('login', this.authorizationService.user)
            .toPromise()
            .then(function (data) {
            _this.error = '';
            _this.authorizationService.setTokensInCookie(data);
            _this.authorizationService.openUserProfilePage(data['firstTimeLogin']);
        }, function (error) {
            if (_this.cookieService.get('AccessToken')) {
                _this.authorizationService.deleteTokensAndLogout();
            }
            _this.error = error.error.exception[0].message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css"), __webpack_require__(/*! ../../home/home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field > mat-error {\n\tfont-size: 10px;\n}\n.input-field > input {\n\tmargin-bottom: 10px;\n}\n.input-field > mat-error > div {\n\theight: 10px;\n}\n.row > form > mat-error > div {\n\tmargin-top: 20px;\n}\n.btn {\n\tmargin-bottom: 4px;\n}\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row form-container\">\n\t<form class=\"col s12\"\n\t\t#RegistrationForm=\"ngForm\"\n\t\t(ngSubmit)=\"OnSubmit(RegistrationForm)\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t<input matInput\n\t\t\t\tid=\"first_name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"firstName\"\n\t\t\t\t#firstName=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"this.authorizationService.user.firstName\">\n\t\t\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('firstnamePattern', 'firstName')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ this.authorizationService.getErrorMessage(\"first name\", 'firstName') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"first_name\">First Name</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t<input matInput\n\t\t\t\tid=\"last_name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"lastName\"\n\t\t\t\t#LastName=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"this.authorizationService.user.lastName\">\n\t\t\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('lastnamePattern', 'lastName')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ this.authorizationService.getErrorMessage(\"last name\", 'lastName') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"last_name\">Last Name</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t<input matInput\n\t\t\t\tid=\"disabled\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"login\"\n\t\t\t\t#login=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"this.authorizationService.user.login\">\n\t\t\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('loginPattern', 'login')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ this.authorizationService.getErrorMessage(\"login\", 'login') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"disabled\">Login</label>\n\t\t\t</div>\n\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t<input matInput\n\t\t\t\tid=\"email\"\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"email\"\n\t\t\t\t#Email=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"this.authorizationService.user.email\">\n\t\t\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('emailPattern', 'email')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ this.authorizationService.getErrorMessage(\"email\", 'email') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<input matInput\n\t\t\t\tid=\"password\"\n\t\t\t\ttype=\"password\"\n\t\t\t\tclass=\"validate\"\n\t\t\t\tname=\"password\"\n\t\t\t\t#Password=\"ngModel\"\n\t\t\t\t[(ngModel)]=\"this.authorizationService.user.password\">\n\t\t\t\t<mat-error *ngIf=\"!this.authorizationService.checkPattern('passwordPattern', 'password')\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{ this.authorizationService.getErrorMessage(\"password\", 'password') }}\n\t\t\t\t\t</div>\n\t\t\t\t</mat-error>\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<button class=\"btn waves-effect waves-light\"\n\t\t\ttype=\"submit\"\n\t\t\tname=\"action\">submit\n\t\t\t<i class=\"material-icons right\">send</i>\n\t\t</button>\n\t\t<mat-error *ngIf=\"error\">\n\t\t\t<div>\n\t\t\t\t{{ error }}\n\t\t\t</div>\n\t\t</mat-error>\n\t\t<!-- <label for=\"password\">Password</label> -->\n\t</form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authorization_authorization_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authorization/authorization.model */ "./src/app/user/authorization/authorization.model.ts");
/* harmony import */ var _authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authorization/patterns.model */ "./src/app/user/authorization/patterns.model.ts");
/* harmony import */ var _authorization_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.authorizationService.user = new _authorization_authorization_model__WEBPACK_IMPORTED_MODULE_2__["Authorization"]();
        this.authorizationService.patterns = new _authorization_patterns_model__WEBPACK_IMPORTED_MODULE_3__["Patterns"]();
        this.resetForm();
    };
    SignupComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.reset();
            this.authorizationService.user = {
                firstName: '',
                lastName: '',
                login: '',
                email: '',
                password: ''
            };
        }
    };
    SignupComponent.prototype.OnSubmit = function (form) {
        if (this.checkForm()) {
            this.saveUserData();
        }
    };
    SignupComponent.prototype.checkForm = function () {
        if (this.authorizationService.patterns.emailPattern.test(this.authorizationService.user.email) &&
            this.authorizationService.patterns.loginPattern.test(this.authorizationService.user.login) &&
            this.authorizationService.patterns.passwordPattern.test(this.authorizationService.user.password) &&
            this.authorizationService.patterns.firstnamePattern.test(this.authorizationService.user.firstName) &&
            this.authorizationService.patterns.lastnamePattern.test(this.authorizationService.user.lastName)) {
            return true;
        }
        else {
            return false;
        }
    };
    SignupComponent.prototype.saveUserData = function () {
        var _this = this;
        this.authorizationService.sendData('signUp', this.authorizationService.user)
            .toPromise()
            .then(function (data) {
            _this.error = '';
            _this.router.navigate(['/home/congrats']);
        }, function (error) {
            _this.error = error.error.exception[0].message;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css"), __webpack_require__(/*! ../../home/home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/authorization/authorization.service */ "./src/app/user/authorization/authorization.service.ts");
/* harmony import */ var _profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/user-info/service/user-info.service */ "./src/app/profile/user-info/service/user-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsocketService = /** @class */ (function () {
    function WebsocketService(userInfoService, authorizationService, cookieService) {
        this.userInfoService = userInfoService;
        this.authorizationService = authorizationService;
        this.cookieService = cookieService;
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_profile_user_info_service_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"],
            _user_authorization_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    CHAT_URL: 'ws://localhost:8200'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dpolosuk/ttttttt/Matcha_front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map