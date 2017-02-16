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
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { ToasterService } from "angular2-toaster";
import { DataService } from "../../../services/dataService";
export var SummationComponent = (function () {
    function SummationComponent(dataService, slimLoadingBarService, toasterService) {
        this.dataService = dataService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.toasterService = toasterService;
        this.firstArg = 0;
        this.secondArg = 0;
        this.submitted = false;
    }
    SummationComponent.prototype.calculate = function () {
        var _this = this;
        this.dataService.GetSummationResult({ First: this.firstArg, Second: this.secondArg })
            .subscribe(function (data) { return _this.result = data; }, function (error) { return function () {
            _this.toasterService.pop('error', 'Damn', 'Something went wrong...');
        }; }, function () {
            _this.submitted = true;
            _this.toasterService.pop('success', 'Complete', 'Getting all values complete');
            _this.slimLoadingBarService.complete();
        });
    };
    SummationComponent.prototype.clearInputs = function () {
        this.submitted = false;
        this.firstArg = 0;
        this.secondArg = 0;
    };
    SummationComponent = __decorate([
        Component({
            selector: 'summation',
            templateUrl: 'summation.component.html'
        }), 
        __metadata('design:paramtypes', [DataService, SlimLoadingBarService, ToasterService])
    ], SummationComponent);
    return SummationComponent;
}());
//# sourceMappingURL=summation.component.js.map