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
export var Configuration = (function () {
    function Configuration() {
        this.Server = 'http://arublevsky-001-site1.btempurl.com/';
        this.ApiUrl = 'api/';
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
    }
    Configuration = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], Configuration);
    return Configuration;
}());
//# sourceMappingURL=app.constants.js.map