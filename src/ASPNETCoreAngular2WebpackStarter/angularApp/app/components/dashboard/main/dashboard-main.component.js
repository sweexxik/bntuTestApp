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
export var DashboardMainComponent = (function () {
    function DashboardMainComponent() {
        this.actions = [{
                Title: 'Summation',
                Description: 'Perfom Summation of two items',
                RelativeLink: 'summation'
            }, {
                Title: 'Subtraction',
                Description: 'Perfom subraction of two items',
                RelativeLink: 'subtraction'
            }, {
                Title: 'Multiplication',
                Description: 'Perfom multiplication of two items',
                RelativeLink: 'multiplication'
            }];
    }
    DashboardMainComponent.prototype.ngOnInit = function () {
    };
    DashboardMainComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardMainComponent = __decorate([
        Component({
            selector: 'dashboard-main',
            templateUrl: 'dashboard-main.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardMainComponent);
    return DashboardMainComponent;
}());
//# sourceMappingURL=dashboard-main.component.js.map