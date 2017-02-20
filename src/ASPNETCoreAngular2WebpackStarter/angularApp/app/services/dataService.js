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
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Configuration } from '../app.constants';
export var DataService = (function () {
    function DataService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.getSummationResult = function (request) {
            return _this.http.post(_this.summationUrl, JSON.stringify(request), { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.getSubtractionResult = function (request) {
            return _this.http.post(_this.subtractionUrl, JSON.stringify(request), { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.getMultiplicationResult = function (request) {
            return _this.http.post(_this.multiplicationUrl, JSON.stringify(request), { headers: _this.headers })
                .map(function (res) { return res.json(); });
        };
        this.summationUrl = configuration.ServerWithApiUrl + 'summation/';
        this.subtractionUrl = configuration.ServerWithApiUrl + 'subtraction/';
        this.multiplicationUrl = configuration.ServerWithApiUrl + 'multiplication/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    DataService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, Configuration])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=dataService.js.map