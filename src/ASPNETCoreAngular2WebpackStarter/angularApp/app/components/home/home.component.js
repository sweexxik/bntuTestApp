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
import { DataService } from '../../services/DataService';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Auth } from "../../auth/auth.service";
export var HomeComponent = (function () {
    function HomeComponent(auth, _dataService, _toasterService, _slimLoadingBarService) {
        this.auth = auth;
        this._dataService = _dataService;
        this._toasterService = _toasterService;
        this._slimLoadingBarService = _slimLoadingBarService;
        this.message = 'test message';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._slimLoadingBarService.start();
        this._dataService
            .GetAll()
            .subscribe(function (data) { return _this.values = data; }, function (error) { return function () {
            _this._toasterService.pop('error', 'Damn', 'Something went wrong...');
        }; }, function () {
            _this._toasterService.pop('success', 'Complete', 'Getting all values complete');
            _this._slimLoadingBarService.complete();
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'home',
            templateUrl: './home.component.html'
        }), 
        __metadata('design:paramtypes', [Auth, DataService, ToasterService, SlimLoadingBarService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map