System.register(['angular2/core', '../data/aircraft.types'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, aircraft_types_1;
    var AircraftWeightsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aircraft_types_1_1) {
                aircraft_types_1 = aircraft_types_1_1;
            }],
        execute: function() {
            AircraftWeightsComponent = (function () {
                function AircraftWeightsComponent() {
                    console.log('creating Weights Componenent');
                }
                AircraftWeightsComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit Weights Componenent');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', aircraft_types_1.Aircraft)
                ], AircraftWeightsComponent.prototype, "selectedAircraft", void 0);
                AircraftWeightsComponent = __decorate([
                    core_1.Component({
                        selector: 'ac-weights',
                        templateUrl: './acWeights.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AircraftWeightsComponent);
                return AircraftWeightsComponent;
            }());
            exports_1("AircraftWeightsComponent", AircraftWeightsComponent);
        }
    }
});
//# sourceMappingURL=aircraft-weights.component.js.map