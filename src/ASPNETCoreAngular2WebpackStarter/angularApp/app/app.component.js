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
import { AuthService } from './auth/auth.service';
import { DataService } from "./services/dataService";
import { AppReadyEvent } from "./splashscreen/app-ready-event";
import { AuthGuardService } from "./auth/auth.guard";
import { TranslateService } from "ng2-translate";
export var AppComponent = (function () {
    function AppComponent(translateService, appReadyEvent) {
        this.translateService = translateService;
        appReadyEvent.trigger();
        this.initTranslations();
    }
    AppComponent.prototype.initTranslations = function () {
        this.translateService.addLangs(['en', 'ru']);
        this.translateService.setDefaultLang('ru');
        // let browserLang = this.translateService.getBrowserLang();
        // this.translateService.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    };
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            providers: [
                AuthService,
                DataService,
                AppReadyEvent,
                AuthGuardService
            ],
            templateUrl: './app.component.html'
        }), 
        __metadata('design:paramtypes', [TranslateService, AppReadyEvent])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map