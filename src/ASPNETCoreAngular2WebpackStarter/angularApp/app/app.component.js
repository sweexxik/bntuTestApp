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
import { Auth } from './auth/auth.service';
import { DataService } from "./services/dataService";
import { AppReadyEvent } from "./splashscreen/app-ready-event";
export var AppComponent = (function () {
    function AppComponent(auth, appReadyEvent) {
        this.auth = auth;
        appReadyEvent.trigger();
    }
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            providers: [
                Auth,
                DataService,
                AppReadyEvent
            ],
            templateUrl: './app.component.html'
        }), 
        __metadata('design:paramtypes', [Auth, AppReadyEvent])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map