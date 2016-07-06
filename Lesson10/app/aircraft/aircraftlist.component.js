System.register(['angular2/core', './aircraft.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, aircraft_service_1, router_1;
    var AircraftListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aircraft_service_1_1) {
                aircraft_service_1 = aircraft_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AircraftListComponent = (function () {
                function AircraftListComponent(_router, _acService) {
                    this._router = _router;
                    this._acService = _acService;
                    console.log('creating List Component');
                }
                ;
                AircraftListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('ngOnInit List Component');
                    this._acService.aircraftDetailsChange$.subscribe(function (acDetails) {
                        _this.UpdateAircraft(acDetails);
                    });
                    this._acList = this._acService.getBriefAircraftList();
                };
                AircraftListComponent.prototype.onSelect = function (ac) {
                    this._acService.setCurrentAircraft(ac.id);
                };
                AircraftListComponent.prototype.UpdateAircraft = function (theAircraft) {
                    this.selectedAircraft = theAircraft;
                };
                AircraftListComponent = __decorate([
                    core_1.Component({
                        selector: 'ac-list',
                        templateUrl: './aircraftList.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, aircraft_service_1.AircraftService])
                ], AircraftListComponent);
                return AircraftListComponent;
            }());
            exports_1("AircraftListComponent", AircraftListComponent);
            ;
        }
    }
});
//# sourceMappingURL=aircraftlist.component.js.map