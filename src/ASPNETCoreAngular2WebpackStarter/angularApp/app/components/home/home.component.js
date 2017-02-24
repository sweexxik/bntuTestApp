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
import { AuthService } from "../../auth/auth.service";
import { TranslateService } from "ng2-translate";
export var HomeComponent = (function () {
    function HomeComponent(translateService, auth) {
        this.translateService = translateService;
        this.auth = auth;
    }
    HomeComponent = __decorate([
        Component({
            selector: 'home',
            templateUrl: './home.component.html'
        }), 
        __metadata('design:paramtypes', [TranslateService, AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map