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
export var UnauthorizedComponent = (function () {
    function UnauthorizedComponent() {
    }
    UnauthorizedComponent = __decorate([
        Component({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>Unauthorized: you are not allowed to see this content</h1>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());
//# sourceMappingURL=unauthorized.component.js.map