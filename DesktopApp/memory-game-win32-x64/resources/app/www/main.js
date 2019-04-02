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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top navigation -->\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" routerLink=\"/game\">\n    <!-- <img class=\"brand-logo\" src=\"assets/logo-positronx-white.svg\" alt=\"positronX.io Logo\"> -->\n    <span class=\"dasboard-text\">Dashboard</span>\n  </a>\n</nav>\n\n<!-- Sidebar navigation -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\">\n              <i class=\"fas fa-user\"></i>User Profile\n            </a>\n          </li>\n          <!-- Calling SignOut() Api from AuthService -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"authService.SignOut()\">\n              <i class=\"fas fa-sign-out-alt\"></i>Log out\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <!-- Main content -->\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"inner-adjust\">\n\n        <div class=\"pt-3 pb-2 mb-3 border-bottom\">\n          <h1 class=\"h2\">User Profile</h1>\n        </div>\n        <!-- Show user data when logged in -->\n        <div class=\"row\" *ngIf=\"authService.userData as user\">\n          <div class=\"col-md-12\">\n            <div class=\"media\">\n              <img class=\"align-self-start mr-5 img-thumbnail rounded-circle\" src=\"{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}\"\n                alt=\"{{user.displayName}}\">\n              <div class=\"media-body\">\n                <h1>Hello: <strong>{{(user.displayName) ? user.displayName : 'Guest'}}</strong></h1>\n                <p>User ID: <strong>{{user.uid}}</strong></p>\n                <p>Email: <strong>{{user.email}}</strong></p>\n                <p>Email Verified: <strong>{{user.emailVerified}}</strong></p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </main>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Auth_1/components/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Auth_1/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Auth_1/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n    <div class=\"authBlock\">\n      <h3>Reset Password</h3>\n\n      <p class=\"text-center\">Please enter your email address to request a password reset.</p>\n\n      <div class=\"formGroup\">\n        <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #passwordResetEmail required>\n      </div>\n\n      <!-- Calling ForgotPassword from AuthService Api -->\n      <div class=\"formGroup\">\n        <input type=\"submit\" class=\"btn btnPrimary\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">\n      </div>\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Auth_1/components/forgot-password/forgot-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n\n    <!-- <div class=\"px-logo\"> -->\n      <!-- <a href=\"https://www.positronx.io\" target=\"_blank\"> -->\n        <!-- <img src=\"https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg\" alt=\"positronX.io - Learn Full Stack Development\"> -->\n      <!-- </a> -->\n    <!-- </div> -->\n\n    <div class=\"authBlock\">\n      <h3>Sign In</h3>\n      <div class=\"formGroup\">\n        <input type=\"text\" class=\"formControl\" placeholder=\"Username\" #userName required>\n      </div>\n\n      <div class=\"formGroup\">\n        <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPassword required>\n      </div>\n\n      <!-- Calling SignIn Api from AuthService -->\n      <div class=\"formGroup\">\n        <input type=\"button\" class=\"btn btnPrimary\" value=\"Log in\" (click)=\"authService.SignIn(userName.value, userPassword.value)\">\n      </div>\n\n      <div class=\"formGroup\">\n        <span class=\"or\"><span class=\"orInner\">Or</span></span>\n      </div>\n\n      <!-- Calling GoogleAuth Api from AuthService -->\n      <div class=\"formGroup\">\n        <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n          <i class=\"fab fa-google-plus-g\"></i>\n          Log in with Google\n        </button>\n      </div>\n\n      <div class=\"forgotPassword\">\n        <span routerLink=\"/forgot-password\">Forgot Password?</span>\n      </div>\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Don't have an account?<span class=\"redirect\" routerLink=\"/register-user\"> Sign Up</span></span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-in/sign-in.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-in/sign-in.component.ts ***!
  \****************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService) {
        this.authService = authService;
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/Auth_1/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/Auth_1/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n\n    <!-- <div class=\"px-logo\"> -->\n      <!-- <a href=\"https://www.positronx.io\" target=\"_blank\"> -->\n        <!-- <img src=\"https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg\" alt=\"positronX.io - Learn Full Stack Development\"> -->\n      <!-- </a> -->\n    <!-- </div> -->\n\n    <div class=\"authBlock\">\n      <h3>Sign Up</h3>\n\n      <div class=\"formGroup\">\n        <input type=\"email\"  class=\"formControl\" placeholder=\"Email Address\" #userEmail required>\n      </div>\n\n      <div class=\"formGroup\">\n        <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required>\n      </div>\n\n      <div class=\"formGroup\">\n        <input type=\"button\" class=\"btn btnPrimary\" value=\"Sign Up\" (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">\n      </div>\n\n      <div class=\"formGroup\">\n        <span class=\"or\"><span class=\"orInner\">Or</span></span>\n      </div>\n\n      <!-- Continue with Google -->\n      <div class=\"formGroup\">\n        <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n          <i class=\"fab fa-google-plus-g\"></i>\n          Continue with Google\n        </button>\n      </div>\n\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Already have an account? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/sign-up/sign-up.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Auth_1/components/sign-up/sign-up.component.ts ***!
  \****************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/Auth_1/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/Auth_1/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0F1dGhfMS9jb21wb25lbnRzL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n\n    <!-- <div class=\"px-logo\"> -->\n      <!-- <a href=\"https://www.positronx.io\" target=\"_blank\"> -->\n        <!-- <img src=\"https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg\" alt=\"positronX.io - Learn Full Stack Development\"> -->\n      <!-- </a> -->\n    <!-- </div> -->\n\n    <div class=\"authBlock\">\n      <h3>Thank You for Registering</h3>\n\n      <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n        <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n        <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n      </div>\n\n      <!-- Calling SendVerificationMail() method using authService Api -->\n      <div class=\"formGroup\">\n        <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n          <i class=\"fas fa-redo-alt\"></i>\n          Resend Verification Email\n        </button>\n      </div>\n\n    </div>\n\n    <div class=\"redirectToLogin\">\n      <span>Go back to?<span class=\"redirect\" routerLink=\"/sign-in\"> Sign in</span></span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Auth_1/components/verify-email/verify-email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Auth_1/components/verify-email/verify-email.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/Auth_1/components/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/Auth_1/components/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/guard/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/Auth_1/shared/guard/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['sign-in']);
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts ***!
  \*****************************************************************/
/*! exports provided: SecureInnerPagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function() { return SecureInnerPagesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecureInnerPagesGuard = /** @class */ (function () {
    function SecureInnerPagesGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SecureInnerPagesGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            window.alert("You are not allowed to access this URL!");
            this.router.navigate(['dashboard']);
        }
        return true;
    };
    SecureInnerPagesGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SecureInnerPagesGuard);
    return SecureInnerPagesGuard;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/routing/app-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Auth_1/shared/routing/app-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AppRoutingModule1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule1", function() { return AppRoutingModule1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/guard/auth.guard */ "./src/app/Auth_1/shared/guard/auth.guard.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dashboard/dashboard.component */ "./src/app/Auth_1/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forgot-password/forgot-password.component */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/guard/secure-inner-pages.guard */ "./src/app/Auth_1/shared/guard/secure-inner-pages.guard.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/sign-in/sign-in.component */ "./src/app/Auth_1/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/sign-up/sign-up.component */ "./src/app/Auth_1/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/verify-email/verify-email.component */ "./src/app/Auth_1/components/verify-email/verify-email.component.ts");
/* harmony import */ var src_app_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var src_app_board_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var src_app_dialogs_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/dialogs/player-dialog/player-dialog.component */ "./src/app/dialogs/player-dialog/player-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Import canActivate guard services





// Required components for which route services to be activated



// import { AppComponent } from 'src/app/app.component';



// Include route guard in routes array
var routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"], canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_5__["SecureInnerPagesGuard"]] },
    { path: 'register-user', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"], canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_5__["SecureInnerPagesGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'game', component: src_app_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'board', component: src_app_board_board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'dialogs/player-dialog', component: src_app_dialogs_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_11__["PlayerDialogComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"], canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_5__["SecureInnerPagesGuard"]] },
    { path: 'verify-email-address', component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_8__["VerifyEmailComponent"], canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_5__["SecureInnerPagesGuard"]] }
];
var AppRoutingModule1 = /** @class */ (function () {
    function AppRoutingModule1() {
    }
    AppRoutingModule1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule1);
    return AppRoutingModule1;
}());



/***/ }),

/***/ "./src/app/Auth_1/shared/services/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Auth_1/shared/services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone; // NgZone service to remove outside scope warning
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email-address']);
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        this.afAuth.auth.signInWithRedirect(provider).then(function () {
            return Object(firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"])().getRedirectResult();
        })
            .then(function (result) {
            var _this = this;
            this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out 
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['sign-in']);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-blacklist

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Auth_1_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth_1/shared/services/auth.service */ "./src/app/Auth_1/shared/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth_1/components/dashboard/dashboard.component */ "./src/app/Auth_1/components/dashboard/dashboard.component.ts");
/* harmony import */ var _Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auth_1/components/forgot-password/forgot-password.component */ "./src/app/Auth_1/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Auth_1/components/sign-in/sign-in.component */ "./src/app/Auth_1/components/sign-in/sign-in.component.ts");
/* harmony import */ var _Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Auth_1/components/sign-up/sign-up.component */ "./src/app/Auth_1/components/sign-up/sign-up.component.ts");
/* harmony import */ var _Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Auth_1/components/verify-email/verify-email.component */ "./src/app/Auth_1/components/verify-email/verify-email.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Auth_1_shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Auth_1/shared/routing/app-routing.module */ "./src/app/Auth_1/shared/routing/app-routing.module.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _pipes_sort_players_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/sort-players.pipe */ "./src/app/pipes/sort-players.pipe.ts");
/* harmony import */ var _dialogs_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogs/player-dialog/player-dialog.component */ "./src/app/dialogs/player-dialog/player-dialog.component.ts");
/* harmony import */ var _pipes_count_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/count.pipe */ "./src/app/pipes/count.pipe.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _game_game_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./game/game.module */ "./src/app/game/game.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Auth service





//import { AngularFireModule } from '@angular/fire';



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_15__["CardComponent"],
                _pipes_sort_players_pipe__WEBPACK_IMPORTED_MODULE_16__["SortPlayersPipe"],
                _pipes_count_pipe__WEBPACK_IMPORTED_MODULE_18__["CountPipe"],
                _dialogs_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_17__["PlayerDialogComponent"],
                _Auth_1_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _Auth_1_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
                _Auth_1_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _Auth_1_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
                _Auth_1_components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_11__["VerifyEmailComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_21__["GameComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_22__["BoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _Auth_1_shared_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule1"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_19__["AngularMaterialModule"],
                _game_game_module__WEBPACK_IMPORTED_MODULE_23__["GameModule"]
            ],
            entryComponents: [
                _dialogs_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_17__["PlayerDialogComponent"]
            ],
            providers: [_Auth_1_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .card-panel {\n  display: inline-block;\n  background-color: transparent;\n}\n\n.card-body {\n  padding: 0;\n  height: 150px;\n  cursor: pointer;\n}\n\n.img-width {\n  width: 110px;\n}\n\n.real-img {\n  margin: 20% 0;\n}\n\n@media screen and (max-width: 768px) {\n  .card-body {\n    height: auto;\n  }\n\n  .img-style {\n    margin-bottom: 20%;\n  }\n}\n\n.back-img {\n  background-image: url('back-img.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  \n  }\n\n.good-job {\n  text-align: center;\n  color: #38d6f186;\n  font-size: 75px;\n  text-shadow: 0 0 15px wheat;\n  }\n\n.counter-text {\n    text-shadow: 0 0 10px gold;\n    font-family: fantasy;\n    color: aquamarine;\n    opacity: 0.8;\n    text-align: center;\n    font-size: 35px;\n  }\n\n.head-style {\n    text-shadow: 0 0 10px gold;\n    color:rgba(23, 122, 134, 0.7);\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztFQUNDLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0UscUNBQXVEO0VBQ3ZELDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCOztBQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmNhcmQtcGFuZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLXdpZHRoIHtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4ucmVhbC1pbWcge1xuICBtYXJnaW46IDIwJSAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuaW1nLXN0eWxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cbn1cbi5iYWNrLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2staW1nLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIFxuICB9XG4gIFxuLmdvb2Qtam9iIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzM4ZDZmMTg2O1xuICBmb250LXNpemU6IDc1cHg7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGVhdDtcbiAgfVxuICAuY291bnRlci10ZXh0IHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggZ29sZDtcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcbiAgICBjb2xvcjogYXF1YW1hcmluZTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICAuaGVhZC1zdHlsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGdvbGQ7XG4gICAgY29sb3I6cmdiYSgyMywgMTIyLCAxMzQsIDAuNyk7XG4gICAgfVxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n  <!-- SELECT BOARD SIZE SECTION -->\n  <mat-form-field class=\"full-width\">\n    <mat-select placeholder=\"Select a Board Size:\" [(ngModel)]=\"boardSize\" [disabled]=\"isGameRunning\">\n      <mat-option value=\"4\">4x4</mat-option>\n      <mat-option value=\"6\">6x6</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <hr />\n\n  <!-- START AND STOP BUTTONS SECTION  -->\n  <div class=\"btn-group btn-group-justified\">\n    <div class=\"btn-group\">\n      <button mat-raised-button color=\"primary\" class=\"btn-start\" (click)=\"onStart()\" [disabled]=\"isGameRunning\">START</button>\n    </div>\n    <div class=\"btn-group\">\n      <button mat-raised-button color=\"warn\" class=\"btn-stop\" (click)=\"onStop()\" [disabled]=\"!isGameRunning\">STOP</button>\n    </div>\n  </div><br />\n\n  <hr />\n\n  <!-- THE BOARD SECTION -->\n  <mat-card class=\"back-img\">\n\n    <!-- THE HEADER -->\n    <mat-card-header>\n      <mat-card-title><h1 class=\"head-style\">Board Size: {{boardSize}}x{{boardSize}}</h1></mat-card-title>\n    </mat-card-header>\n\n    <hr>\n\n    <!-- HERE IS WHERE THE CARDS PLACED -->\n    <mat-card-content>\n\n      <!-- PROGRESS BAR (showing when loading finished (3 seconds after clicking on START) ) -->\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"showLoading\"></mat-progress-bar>\n\n      <!-- THE COUNT TIME -->\n      <p class=\"counter-text\">{{minutes | countPipe}}:{{seconds | countPipe}}</p>\n\n      <hr>\n\n      <!-- HERE IS THE CARDS -->\n      <table class=\"table table-responsive table-condensed\">\n        <tr *ngFor=\"let tr of cards; let row = index\" class=\"borderless\">\n          <td *ngFor=\"let card of cards[row]\">\n            <app-card [card]=\"card\" (click)=\"onClick(card)\"></app-card>\n          </td>\n        </tr>\n      </table>\n\n      <!-- WHEN THE IS OVER -->\n      <div *ngIf=\"!isGameRunning && isGameOver\" [@in]>\n        <p class=\"good-job\" >GOOD JOB!!</p>\n      </div>\n\n    </mat-card-content>\n\n  </mat-card>\n  <br>\n  <ul>\n    <button mat-raised-button color=\"primary\" class=\"common-btn btn\"  routerLink='/game'>Finish</button></ul>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialogs/player-dialog/player-dialog.component */ "./src/app/dialogs/player-dialog/player-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Router } from "@angular/router";
var BoardComponent = /** @class */ (function () {
    function BoardComponent(gameService, dialog) {
        this.gameService = gameService;
        this.dialog = dialog;
        this.boardSize = '4'; // stored as string to set a default value to Select input (if as a number it won't work).
        this.cards = [];
        this.showLoading = false;
        this.isGameRunning = false;
        this.isGameOver = false;
        this.clicks = 0; // count the clicks. (maximum 2)
        this.players = [];
        this.seconds = 0;
        this.minutes = 0;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getAccomplishments().
            subscribe(function (players) {
            if (players !== null) {
                _this.players = players;
            }
        }, function (error) {
            console.log(error.message);
            console.log(error);
        });
    };
    BoardComponent.prototype.onStart = function () {
        var _this = this;
        var tempCards = this.gameService.getCards(+this.boardSize); // get the cards as a completely new instances.
        this.gameService.suffleCards(tempCards, +this.boardSize); // then suffle the Cards.
        this.isGameOver = false;
        this.showLoading = true;
        this.isGameRunning = true;
        this.delayTimer = setTimeout(function () {
            _this.cards = tempCards; // setting the 'Real Cards' to the tempCards.
            _this.showLoading = false;
            _this.startedTime = new Date().getTime(); // current time stored as milliseconds as we said.
            _this.countInterval = setInterval(function () {
                _this.seconds++;
                if (_this.seconds === 59) {
                    _this.seconds = 0;
                    _this.minutes++;
                }
            }, 1000);
        }, 3000);
    };
    BoardComponent.prototype.onStop = function () {
        this.cards = [];
        this.isGameRunning = this.showLoading = false;
        this.clicks = this.seconds = this.minutes = 0;
        clearTimeout(this.delayTimer);
        clearInterval(this.countInterval);
    };
    BoardComponent.prototype.onClick = function (card) {
        var _this = this;
        // if the user click twice and the card didn't succeed
        if (this.clicks < 2 && !card.succeed) {
            this.clicks++;
            card.showImage = true; // show the 'Real' card image
            if (this.clicks === 1) {
                this.clickedCard = card;
            }
            else if (this.clicks === 2) {
                if (this.clickedCard === card) {
                    this.clicks--; // so he be able to click on another card.
                    return;
                }
                if (this.clickedCard.ID === card.ID) {
                    setTimeout(function () {
                        _this.clicks = 0;
                        _this.clickedCard.succeed = true; // put the card as succeed state to true
                        card.succeed = true; // put the card as succeed state to true
                        if (_this.isGameFinished() === true) {
                            _this.onFinished();
                        }
                    }, 400);
                }
                else {
                    setTimeout(function () {
                        _this.clicks = 0; // reset the clicks
                        _this.clickedCard.showImage = false; // reverse the card
                        card.showImage = false; // reverse the card
                    }, 800);
                }
            }
        }
    };
    BoardComponent.prototype.isGameFinished = function () {
        if (this.cards[0] === undefined) {
            return false;
        }
        for (var i = 0; i < +this.boardSize; i++) {
            if (this.cards[i].every(function (card) {
                if (card.succeed === false) {
                    return false;
                }
                return true; // if the card succeed return true to keep checking in the next card.
            }) === false) {
                return false;
            }
        }
        return true; // if all passed success (no return false happened) return true, which mean the game IS Over!.
    };
    // get the fastest Accomplishment.
    BoardComponent.prototype.getTheFastest = function (boardSize) {
        var accomplishment = this.players.find(function (player) {
            return player.size === boardSize;
            // remember the array is already sorted, so all we need is the find the first player with same boardSize which is the fastest.
        });
        if (accomplishment === undefined) {
            return 99999999999999;
        }
        return accomplishment.totalTime;
    };
    BoardComponent.prototype.onFinished = function () {
        var _this = this;
        var min = this.minutes;
        var sec = this.seconds;
        this.isGameOver = true;
        this.isGameRunning = false;
        this.clicks = this.seconds = this.minutes = 0;
        this.cards = [];
        clearInterval(this.countInterval);
        var tTime = new Date().getTime() - this.startedTime; // totalTime as milliseconds.
        if (tTime < this.getTheFastest(+this.boardSize)) {
            var dialogRef = this.dialog.open(_dialogs_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PlayerDialogComponent"], { hasBackdrop: false, data: min + ':' + sec });
            dialogRef.afterClosed().subscribe(function (name) {
                if (name.length > 3) {
                    _this.players.push({
                        name: name,
                        size: +_this.boardSize,
                        totalTime: tTime,
                        minutes: min,
                        seconds: sec
                    });
                    _this.gameService.saveAccomplishments(_this.players); // save all
                }
            });
        }
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('in', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'rotate(360deg) scale(0)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'rotate(0) scale(1)'
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-panel {\n  display: inline-block;\n  background-color: transparent;\n}\n\n.card-body {\n  padding: 0;\n  height: 150px;\n  cursor: pointer;\n}\n\n.img-width {\n  width: 110px;\n}\n\n.real-img {\n  margin: 20% 0;\n}\n\n@media screen and (max-width: 768px) {\n  .card-body {\n    height: auto;\n  }\n\n  .img-style {\n    margin-bottom: 20%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcGFuZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLXdpZHRoIHtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4ucmVhbC1pbWcge1xuICBtYXJnaW46IDIwJSAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuaW1nLXN0eWxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default card-panel\"\n  [@effect]=\"card.showImage ? 'normal' : 'reverse'\"\n  *ngIf=\"!card.succeed\">\n  <div class=\"panel-body card-body\">\n    <img [style.display]=\"card.showImage ? 'block' : 'none'\"\n        [src]=\"card.image\"\n        alt=\"Card logo\"\n        class=\"img-responsive img-circle img-width real-img\"/>\n      <img [style.display]=\"card.showImage ? 'none' : 'block'\"\n        [src]=\"card.defaultImage\"\n        alt=\"Card logo\"\n        class=\"img-responsive img-width\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_card_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/card.model */ "./src/app/shared/card.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"])
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('effect', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            transform: 'scale(0)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'scale(1)'
                        }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'scale(0.5)',
                            opacity: 0
                        }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('reverse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'rotateY(180deg)' // by default the card will be reversed
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'rotateY(0deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('normal => reverse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reverse => normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(250)),
                ]),
            ],
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/player-dialog/player-dialog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/player-dialog/player-dialog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvcGxheWVyLWRpYWxvZy9wbGF5ZXItZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dialogs/player-dialog/player-dialog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/player-dialog/player-dialog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"text-warning\">new Accomplishment: {{accomplishmentTime}} </h2>\n\n<hr>\n\n<mat-dialog-content>\n\n  <h3>NICELY DONE!!</h3>\n  <p class=\"text-info\">you have made a new Accomplishment</p>\n  <p class=\"text-info\">you manage to finished faster than another pepole who played this game.</p>\n  <p></p>\n  <mat-form-field class=\"full-width\">\n    <input matInput class=\"full-width\" placeholder=\"Please enter your name:\" [(ngModel)]=\"playerName\" required #nameInput=\"ngModel\" maxlength=\"20\" minlength=\"3\">\n  </mat-form-field>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button style=\"color: red;\" mat-dialog-close >Cancel</button>\n\n  <button mat-raised-button style=\"color: green;\" [mat-dialog-close]=\"playerName\" [disabled]=\"nameInput.invalid\">Save</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/player-dialog/player-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/player-dialog/player-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: PlayerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDialogComponent", function() { return PlayerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PlayerDialogComponent = /** @class */ (function () {
    function PlayerDialogComponent(data) {
        this.data = data;
    }
    PlayerDialogComponent.prototype.ngOnInit = function () {
        this.accomplishmentTime = this.data;
    };
    PlayerDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-dialog',
            template: __webpack_require__(/*! ./player-dialog.component.html */ "./src/app/dialogs/player-dialog/player-dialog.component.html"),
            styles: [__webpack_require__(/*! ./player-dialog.component.css */ "./src/app/dialogs/player-dialog/player-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [String])
    ], PlayerDialogComponent);
    return PlayerDialogComponent;
}());



/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_card_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/card.model */ "./src/app/shared/card.model.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist

var GameService = /** @class */ (function () {
    function GameService(httpClient) {
        this.httpClient = httpClient;
        this.allCards = [
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](1, 'assets/images/angular.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](2, 'assets/images/asp.net.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](3, 'assets/images/bootstrap.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](4, 'assets/images/c sharp.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](5, 'assets/images/C.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](6, 'assets/images/c++.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](7, 'assets/images/css.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](8, 'assets/images/html.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](9, 'assets/images/java.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](10, 'assets/images/javascript.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](11, 'assets/images/jquery.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](12, 'assets/images/nodejs.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](13, 'assets/images/php.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](14, 'assets/images/python.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](15, 'assets/images/react.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](16, 'assets/images/sql.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](17, 'assets/images/visual basic.png'),
            new _shared_card_model__WEBPACK_IMPORTED_MODULE_2__["Card"](18, 'assets/images/vue.png')
        ];
    }
    GameService.prototype.saveAccomplishments = function (accomplishments) {
        this.httpClient.put('https://memory-game-c1922.firebaseio.com/accomplishments.json', accomplishments).subscribe(function (response) { }, function (error) {
            console.log(error.message);
            console.log(error);
        });
    };
    GameService.prototype.getAccomplishments = function () {
        return this.httpClient.get('https://memory-game-c1922.firebaseio.com/accomplishments.json');
    };
    GameService.prototype.getCards = function (boardSize) {
        var arr = [];
        var arrToReturn = [];
        var tempArr;
        if (boardSize === 4) {
            tempArr = JSON.stringify(this.allCards.slice(0, 8)); // will contain only the first 8 cards as JSON string
            // then convert the 'tempArr' to JavaScript Object and to duplicate it to the 'arr'
            // that will contain Pair cards
            // NOTE: that i used the JSON for creating new Card instance with new Referance.
            arr = JSON.parse(tempArr).concat(JSON.parse(tempArr));
            // and then prepare the 'arrToReturn' that sould return matrix Card[][]
            arrToReturn = [
                arr.slice(0, 4),
                arr.slice(4, 8),
                arr.slice(8, 12),
                arr.slice(12, 16)
            ];
            return arrToReturn;
        }
        // same as boardSize === 4 just do this for all cards
        tempArr = JSON.stringify(this.allCards);
        arr = JSON.parse(tempArr).concat(JSON.parse(tempArr));
        arrToReturn = [
            arr.slice(0, 6),
            arr.slice(6, 12),
            arr.slice(12, 18),
            arr.slice(18, 24),
            arr.slice(24, 30),
            arr.slice(30, 36)
        ];
        return arrToReturn;
    };
    GameService.prototype.generateRandom = function (number) {
        return Math.floor(Math.random() * +number); // will generate random number wich depense of type board
        // example: if the boradType was 4 then it will genrate random number between 0-4 wich 4 not included!
    };
    GameService.prototype.suffleCards = function (cards, boardSize) {
        for (var i = 0; i < 100; i++) {
            var rowToSave = this.generateRandom(boardSize);
            var indexToSave = this.generateRandom(boardSize);
            var cardToSave = cards[rowToSave][indexToSave];
            var row = this.generateRandom(boardSize);
            var index = this.generateRandom(boardSize);
            var secCard = cards[row][index];
            cards[rowToSave][indexToSave] = secCard;
            cards[row][index] = cardToSave;
        }
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".borderless td, .borderless th {\n  border: none;\n}\n\n.head-style {\ntext-shadow: 0 0 10px gold;\ncolor:rgba(23, 122, 134, 0.7);\n}\n\n.btn-start {\nwidth: 100%;\n}\n\n.btn-stop {\nwidth: 100%;\n}\n\n.back-img {\nbackground-image: url('back-img.jpg');\nbackground-repeat: no-repeat;\nbackground-attachment: fixed;\n}\n\n.counter-text {\ntext-shadow: 0 0 10px gold;\nfont-family: fantasy;\ncolor: aquamarine;\nopacity: 0.8;\ntext-align: center;\nfont-size: 35px;\n}\n\n.good-job {\ntext-align: center;\ncolor: #38d6f186;\nfont-size: 75px;\ntext-shadow: 0 0 15px wheat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EscUNBQXVEO0FBQ3ZELDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLDJCQUEyQjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcmxlc3MgdGQsIC5ib3JkZXJsZXNzIHRoIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaGVhZC1zdHlsZSB7XG50ZXh0LXNoYWRvdzogMCAwIDEwcHggZ29sZDtcbmNvbG9yOnJnYmEoMjMsIDEyMiwgMTM0LCAwLjcpO1xufVxuXG4uYnRuLXN0YXJ0IHtcbndpZHRoOiAxMDAlO1xufVxuXG4uYnRuLXN0b3Age1xud2lkdGg6IDEwMCU7XG59XG5cbi5iYWNrLWltZyB7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrLWltZy5qcGcpO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5jb3VudGVyLXRleHQge1xudGV4dC1zaGFkb3c6IDAgMCAxMHB4IGdvbGQ7XG5mb250LWZhbWlseTogZmFudGFzeTtcbmNvbG9yOiBhcXVhbWFyaW5lO1xub3BhY2l0eTogMC44O1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1zaXplOiAzNXB4O1xufVxuXG4uZ29vZC1qb2Ige1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6ICMzOGQ2ZjE4NjtcbmZvbnQtc2l6ZTogNzVweDtcbnRleHQtc2hhZG93OiAwIDAgMTVweCB3aGVhdDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\" align-content:center \" >\n  <h1 class=\"text-center\">Memory Game</h1><br><br>\n\n\n    <img src=\"favicon.ico\" alt=\"logo\" class=\"img-responsive center-block img-thumbnail\" /><br><br>\n\n    <!-- ACCOMPLISHMENTS SECTION -->\n    <label class=\"text-info\"   for=\"list-accomplishments\">Accomplishments:</label>\n    <p class=\"text-warning\" *ngIf=\"players.length === 0\">there is no accomplishments yet!</p>\n    <ul class=\"list-group\" style=\"width: 270px; align-content: center \" id=\"list-accomplishments\">\n      <li class=\"list-group-item\"  *ngFor=\"let player of players | sortPlayers\">\n        {{player.name}}, finished at -\n        <span class=\"text-warning\">{{player.minutes | countPipe}}:{{player.seconds | countPipe}}</span>\n        , on - <span class=\"text-danger\">{{player.size === 4 ? '4x4' : '6x6'}}</span>.</li>\n    <br>\n    &nbsp;&nbsp;\n        <button mat-raised-button color=\"primary\" class=\"common-btn btn\"  routerLink='/board'>board</button> &nbsp;&nbsp;       \n      \n        <button mat-raised-button color=\"primary\" class=\"common-btn btn\"  routerLink='/dashboard'>Profile</button></ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameComponent = /** @class */ (function () {
    function GameComponent(gameService, router, dialog) {
        this.gameService = gameService;
        this.router = router;
        this.dialog = dialog;
        //boardSize = '4'; // stored as string to set a default value to Select input (if as a number it won't work).
        //cards: Card[][] = [];
        this.showLoading = false;
        this.isGameRunning = false;
        this.isGameOver = false;
        this.clicks = 0; // count the clicks. (maximum 2)
        this.players = [];
        this.seconds = 0;
        this.minutes = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getAccomplishments().
            subscribe(function (players) {
            if (players !== null) {
                _this.players = players;
            }
        }, function (error) {
            console.log(error.message);
            console.log(error);
        });
    };
    GameComponent.prototype.getTheFastest = function (boardSize) {
        var accomplishment = this.players.find(function (player) {
            return player.size === boardSize;
            // remember the array is already sorted, so all we need is the find the first player with same boardSize which is the fastest.
        });
        if (accomplishment === undefined) {
            return 99999999999999;
        }
        return accomplishment.totalTime;
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('in', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'rotate(360deg) scale(0)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'rotate(0) scale(1)'
                        }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/game.module.ts":
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { GameComponent } from './game.component';
var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: []
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "./src/app/pipes/count.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/count.pipe.ts ***!
  \*************************************/
/*! exports provided: CountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountPipe", function() { return CountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountPipe = /** @class */ (function () {
    function CountPipe() {
    }
    CountPipe.prototype.transform = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    CountPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'countPipe'
        })
    ], CountPipe);
    return CountPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sort-players.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/sort-players.pipe.ts ***!
  \********************************************/
/*! exports provided: SortPlayersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPlayersPipe", function() { return SortPlayersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPlayersPipe = /** @class */ (function () {
    function SortPlayersPipe() {
    }
    SortPlayersPipe.prototype.transform = function (value) {
        var players2Return = value.
            sort(function (firstPlayer, secondPlayer) {
            if (firstPlayer.totalTime < secondPlayer.totalTime) {
                return -1;
            }
            else if (firstPlayer.totalTime > secondPlayer.totalTime) {
                return 1; // if the firstPlayer is slower put him after the secondPlayer.
            }
            return 0; // do nothing if same.
        }).sort(function (firstPlayer, secondPlayer) {
            if (firstPlayer.size === secondPlayer.size) {
                return 0;
            }
            if (firstPlayer.size === 6) {
                return -1;
            }
            else {
                return 1;
            }
        });
        return players2Return; // return the sorted array;
    };
    SortPlayersPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortPlayers',
            pure: false
        })
    ], SortPlayersPipe);
    return SortPlayersPipe;
}());



/***/ }),

/***/ "./src/app/shared/card.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/card.model.ts ***!
  \**************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
// ID - will contain the indentity number.
// image - will contain the real card image path.
// ------- The Default Values -------
// defaultImage - .. the default image.
// showImage - if false show the default image else show the real card 'image'.
// succeed - property wich tell if the card was succeed (matchs with the other card).
var Card = /** @class */ (function () {
    function Card(ID, image, defaultImage, showImage, succeed) {
        if (defaultImage === void 0) { defaultImage = 'assets/images/default.jpg'; }
        if (showImage === void 0) { showImage = false; }
        if (succeed === void 0) { succeed = false; }
        this.ID = ID;
        this.image = image;
        this.defaultImage = defaultImage;
        this.showImage = showImage;
        this.succeed = succeed;
    }
    return Card;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyBkOWqTLuMGZwd6XkalBKShwriS9VGb4Rs",
        authDomain: "memory-game-c1922.firebaseapp.com",
        databaseURL: "https://memory-game-c1922.firebaseio.com",
        projectId: "memory-game-c1922",
        storageBucket: "memory-game-c1922.appspot.com",
        messagingSenderId: "421569875595"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\pooji\OneDrive\Desktop\Memory-Game-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map