"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var parent_component_1 = require('./parent.component');
var Lesson02 = (function () {
    function Lesson02() {
    }
    Lesson02 = __decorate([
        core_1.Component({
            selector: 'lesson-02',
            directives: [parent_component_1.Parent],
            template: '<h1>This is Lesson-02</h1><div><parent></parent></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson02);
    return Lesson02;
}());
exports.Lesson02 = Lesson02;
//# sourceMappingURL=lesson02.component.js.map