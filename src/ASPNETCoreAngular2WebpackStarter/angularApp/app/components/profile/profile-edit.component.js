var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthService } from "../../auth/auth.service";
import { myConfig } from "../../auth/auth.config";
export var ProfileEdit = (function () {
    function ProfileEdit(auth, authHttp, router) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.router = router;
        if (auth.userProfile.user_metadata && auth.userProfile.user_metadata.address) {
            this.address = auth.userProfile.user_metadata.address;
        }
    }
    ProfileEdit.prototype.onSubmit = function () {
        var _this = this;
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        var data = JSON.stringify({
            user_metadata: {
                address: this.address
            }
        });
        this.authHttp
            .patch('https://' + myConfig.domain + '/api/v2/users/' + this.auth.userProfile.user_id, data, { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            _this.auth.userProfile = response;
            localStorage.setItem('profile', JSON.stringify(response));
            _this.router.navigate(['/profile']);
        }, function (error) { return alert(error.json().message); });
    };
    ProfileEdit = __decorate([
        Component({
            selector: 'profile',
            templateUrl: './profile-edit.component.html'
        }), 
        __metadata('design:paramtypes', [AuthService, AuthHttp, Router])
    ], ProfileEdit);
    return ProfileEdit;
}());
//# sourceMappingURL=profile-edit.component.js.map