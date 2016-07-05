

import {Injectable, OnInit, Output, EventEmitter} from 'angular2/core';
import {aircraftList} from '../data/mock-aircraft-data';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {AircraftSpeed, AircraftWeight, Aircraft, AircraftBrief} from '../data/aircraft.types';
import {iAircraftService} from './aircraft.interface';
import {Subject} from 'rxjs/Subject';



@Injectable()
export class AircraftService implements  OnInit{

    currentAircraft: Aircraft;
    public dumAss: string;

    // Observable string sources
    private obAircraftDetails = new Subject<Aircraft>();

    // Observable string streams
    aircraftDetailsChange$ = this.obAircraftDetails.asObservable();

    constructor(private http: Http) {
        console.log('creating Aircraft service');
    }

    getBriefAircraftList() {
        var acList = [];
        for (var ac of aircraftList) {
            var acBrief = new AircraftBrief(ac.id, ac.name);
            acList.push(acBrief);
        }
        return acList;
    }
    getSelectedAircraft() {
        return this.currentAircraft;
    }
    getFirstAircraft() {
        var firstAc = aircraftList[0];
        return firstAc;
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    ngOnInit() {
        this.setCurrentAircraft(1);
        console.log('ngOnInit Weights');
    }

    getAircraftForId(id: number) {
       // this.selectedChange.next(aircraftList.filter(x => x.id == id)[0]);
        return aircraftList.filter(x => x.id == id)[0];
    }

    setCurrentAircraft(id: number) {
        this.currentAircraft = this.getAircraftForId(id);
        this.obAircraftDetails.next(this.currentAircraft);
    }
}


    