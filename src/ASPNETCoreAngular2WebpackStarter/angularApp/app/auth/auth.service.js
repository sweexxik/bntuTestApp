var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';
import Auth0Lock from 'auth0-lock';
// Avoid name not found warnings
export var AuthService = (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        // Configure Auth0 https://auth0.com/docs/quickstart/spa/angular2/04-user-profile
        this.lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
            auth: { redirectUrl: 'home' }
        });
        this.defaultRedirectUrl = '/dashboard';
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        this.router.events.subscribe(function (val) {
        });
        this.lock.on('authorization_error', function (arg1, arg2) {
            debugger;
        });
        this.lock.on('unrecoverable_error', function (arg1, arg2) {
            debugger;
        });
        this.lock.on('hash_parsed', function (arg1, arg2) {
            debugger;
        });
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', function (authResult) {
            debugger;
            localStorage.setItem('id_token', authResult.idToken);
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    alert(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
                var redirectUrl = localStorage.getItem('redirect_url');
                redirectUrl = redirectUrl ? redirectUrl : _this.defaultRedirectUrl;
                _this.router.navigate(['home']);
                localStorage.removeItem('redirect_url');
            });
        });
    }
    AuthService.prototype.isAdmin = function () {
        return this.userProfile && this.userProfile.app_metadata
            && this.userProfile.app_metadata.roles
            && this.userProfile.app_metadata.roles.indexOf('admin') > -1;
    };
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    ;
    AuthService.prototype.authenticated = function () {
        return tokenNotExpired();
    };
    ;
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        this.router.navigate(['home']);
    };
    ;
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Router])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map