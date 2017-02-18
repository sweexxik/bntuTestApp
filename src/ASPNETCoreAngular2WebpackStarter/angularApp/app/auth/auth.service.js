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
export var Auth = (function () {
    function Auth(router) {
        var _this = this;
        this.router = router;
        // Configure Auth0 https://auth0.com/docs/quickstart/spa/angular2/04-user-profile
        this.lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
        this.defaultRedirectUrl = '/dashboard';
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        this.router.events.subscribe(function (val) {
        });
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', function (authResult) {
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
                _this.router.navigate([redirectUrl]);
                localStorage.removeItem('redirect_url');
            });
        });
    }
    Auth.prototype.isAdmin = function () {
        return this.userProfile && this.userProfile.app_metadata
            && this.userProfile.app_metadata.roles
            && this.userProfile.app_metadata.roles.indexOf('admin') > -1;
    };
    Auth.prototype.login = function () {
        this.lock.show();
    };
    ;
    Auth.prototype.authenticated = function () {
        return tokenNotExpired();
    };
    ;
    Auth.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('redirect_url');
        this.userProfile = undefined;
    };
    ;
    Auth = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Router])
    ], Auth);
    return Auth;
}());
//# sourceMappingURL=auth.service.js.map