var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { DOCUMENT } from "@angular/platform-browser";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";
export var AppReadyEvent = (function () {
    function AppReadyEvent(doc) {
        this.doc = doc;
        this.isAppReady = false;
    }
    AppReadyEvent.prototype.trigger = function () {
        if (this.isAppReady) {
            return;
        }
        var bubbles = true;
        var cancelable = false;
        this.doc.dispatchEvent(this.createEvent("appready", bubbles, cancelable));
        this.isAppReady = true;
    };
    AppReadyEvent.prototype.createEvent = function (eventType, bubbles, cancelable) {
        try {
            var customEvent = new CustomEvent(eventType, {
                bubbles: bubbles,
                cancelable: cancelable
            });
        }
        catch (error) {
            var customEvent = this.doc.createEvent("CustomEvent");
            customEvent.initCustomEvent(eventType, bubbles, cancelable);
        }
        return (customEvent);
    };
    AppReadyEvent = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)), 
        __metadata('design:paramtypes', [Object])
    ], AppReadyEvent);
    return AppReadyEvent;
}());
//# sourceMappingURL=app-ready-event.js.map