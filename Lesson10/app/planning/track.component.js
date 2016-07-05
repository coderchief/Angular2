System.register(['angular2/core', './weather.service'], function(exports_1, context_1) {
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
    var core_1, weather_service_1;
    var TrackComponent, TrackData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            TrackComponent = (function () {
                function TrackComponent() {
                }
                return TrackComponent;
            }());
            TrackData = (function () {
                function TrackData(_weatherService) {
                    this._weatherService = _weatherService;
                    this.tracks = new Array();
                }
                TrackData.prototype.ngOnInit = function () {
                    var _this = this;
                    this.selTrackComp = new TrackComponent();
                    this._weatherService.windDetailsChange$.subscribe(function (windDetails) {
                        _this.UpdateFlightPlan(windDetails);
                    });
                };
                TrackData.prototype.UpdateFlightPlan = function (theWinds) {
                    //find all the winds which are used for this plan and require an update
                };
                TrackData.prototype.onClick = function () {
                    var newTrack = new TrackComponent();
                    newTrack.headingTrue = this.aHeadingTrue;
                    newTrack.distance = this.aDistance;
                    newTrack.tas = this.aTas;
                    newTrack.isReadOnly = true;
                    this.tracks.push(newTrack);
                };
                TrackData.prototype.onRemove = function (idx) {
                    this.tracks.splice(idx, 1);
                };
                TrackData.prototype.onSelect = function (idx) {
                    this.selTrackComp = this.tracks[idx];
                    this.selIdx = idx;
                };
                TrackData.prototype.onEdit = function (idx) {
                    this.tracks[idx].isReadOnly = !this.tracks[idx].isReadOnly;
                    var currentCaption = document.getElementsByClassName("idEditBtn")[idx].innerHTML;
                    if (currentCaption == "Save") {
                        document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Edit";
                        var editWndDir = (document.getElementsByClassName("idxTrackHdg")[idx]);
                        editWndDir.style.backgroundColor = "lightgray";
                        var editWndSpeed = (document.getElementsByClassName("idxTrackDist")[idx]);
                        editWndSpeed.style.backgroundColor = "lightgray";
                        var editWndAlt = (document.getElementsByClassName("idxTrackTas")[idx]);
                        editWndAlt.style.backgroundColor = "lightgray";
                    }
                    else {
                        document.getElementsByClassName("idEditBtn")[idx].innerHTML = "Save";
                        var editWndDir = (document.getElementsByClassName("idxTrackHdg")[idx]);
                        editWndDir.style.backgroundColor = "white";
                        var editWndSpeed = (document.getElementsByClassName("idxTrackDist")[idx]);
                        editWndSpeed.style.backgroundColor = "white";
                        var editWndAlt = (document.getElementsByClassName("idxTrackTas")[idx]);
                        editWndAlt.style.backgroundColor = "white";
                    }
                };
                TrackData = __decorate([
                    core_1.Component({
                        selector: 'track-data',
                        templateUrl: './trackData.html'
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], TrackData);
                return TrackData;
            }());
            exports_1("TrackData", TrackData);
        }
    }
});
//# sourceMappingURL=track.component.js.map