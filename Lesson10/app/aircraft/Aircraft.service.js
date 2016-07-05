System.register(['angular2/core', '../data/mock-aircraft-data', 'angular2/http', '../data/aircraft.types', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, mock_aircraft_data_1, http_1, aircraft_types_1, Subject_1;
    var AircraftService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_aircraft_data_1_1) {
                mock_aircraft_data_1 = mock_aircraft_data_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (aircraft_types_1_1) {
                aircraft_types_1 = aircraft_types_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            AircraftService = (function () {
                function AircraftService(http) {
                    this.http = http;
                    // Observable string sources
                    this.obAircraftDetails = new Subject_1.Subject();
                    // Observable string streams
                    this.aircraftDetailsChange$ = this.obAircraftDetails.asObservable();
                    console.log('creating Aircraft service');
                }
                AircraftService.prototype.getBriefAircraftList = function () {
                    var acList = [];
                    for (var _i = 0, aircraftList_1 = mock_aircraft_data_1.aircraftList; _i < aircraftList_1.length; _i++) {
                        var ac = aircraftList_1[_i];
                        var acBrief = new aircraft_types_1.AircraftBrief(ac.id, ac.name);
                        acList.push(acBrief);
                    }
                    return acList;
                };
                AircraftService.prototype.getSelectedAircraft = function () {
                    return this.currentAircraft;
                };
                AircraftService.prototype.getFirstAircraft = function () {
                    var firstAc = mock_aircraft_data_1.aircraftList[0];
                    return firstAc;
                };
                AircraftService.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                AircraftService.prototype.ngOnInit = function () {
                    this.setCurrentAircraft(1);
                    console.log('ngOnInit Weights');
                };
                AircraftService.prototype.getAircraftForId = function (id) {
                    // this.selectedChange.next(aircraftList.filter(x => x.id == id)[0]);
                    return mock_aircraft_data_1.aircraftList.filter(function (x) { return x.id == id; })[0];
                };
                AircraftService.prototype.setCurrentAircraft = function (id) {
                    this.currentAircraft = this.getAircraftForId(id);
                    this.obAircraftDetails.next(this.currentAircraft);
                };
                AircraftService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AircraftService);
                return AircraftService;
            }());
            exports_1("AircraftService", AircraftService);
        }
    }
});
//# sourceMappingURL=Aircraft.service.js.map