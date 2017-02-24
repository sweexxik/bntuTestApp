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
import { AuthService } from '../../auth/auth.service';
import { TranslateService } from "ng2-translate";
export var NavigationComponent = (function () {
    function NavigationComponent(translateService, auth) {
        this.translateService = translateService;
        this.auth = auth;
    }
    NavigationComponent.prototype.setEn = function () {
        debugger;
        this.translateService.use('en');
    };
    NavigationComponent.prototype.setRu = function () {
        this.translateService.use('ru');
    };
    NavigationComponent = __decorate([
        Component({
            selector: 'starterTemplateNavigation',
            templateUrl: './navigation.component.html'
        }), 
        __metadata('design:paramtypes', [TranslateService, AuthService])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=navigation.component.js.map