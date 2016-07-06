System.register(['angular2/core', 'angular2/router', './aircraft/aircraftlist.component', './planning/flightplanning.component', './aircraft/aircraft-detail.component', './aircraft/aircraft.service'], function(exports_1, context_1) {
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
    var core_1, router_1, aircraftlist_component_1, flightplanning_component_1, aircraft_detail_component_1, aircraft_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (aircraftlist_component_1_1) {
                aircraftlist_component_1 = aircraftlist_component_1_1;
            },
            function (flightplanning_component_1_1) {
                flightplanning_component_1 = flightplanning_component_1_1;
            },
            function (aircraft_detail_component_1_1) {
                aircraft_detail_component_1 = aircraft_detail_component_1_1;
            },
            function (aircraft_service_1_1) {
                aircraft_service_1 = aircraft_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _acService) {
                    this._router = _router;
                    this._acService = _acService;
                    console.log('creating AppComponent');
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('ngOnInit AppComponent');
                    this._acService.aircraftDetailsChange$.subscribe(function (msg) {
                        _this.updateMessage(msg);
                    });
                };
                AppComponent.prototype.updateMessage = function (msg) {
                    this.id = msg.id;
                };
                AppComponent.prototype.getAircraftDetails = function (evt) {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, flightplanning_component_1.FlightPlanningComponent, aircraft_detail_component_1.AircraftDetailsComponent, aircraftlist_component_1.AircraftListComponent],
                        providers: [aircraft_service_1.AircraftService]
                    }),
                    router_1.RouteConfig([
                        { path: '/planning', name: 'FlightPlanning', component: flightplanning_component_1.FlightPlanningComponent },
                        { path: '/aircraft', name: 'AircraftDetails', component: aircraft_detail_component_1.AircraftDetailsComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, aircraft_service_1.AircraftService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map