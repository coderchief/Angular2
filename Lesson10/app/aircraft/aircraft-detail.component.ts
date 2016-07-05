import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject}  from 'angular2/core';
import {AircraftSpeedsComponent} from './aircraft-speeds.component';
import {AircraftWeightsComponent} from './aircraft-weights.component';
import {AircraftService}  from './aircraft.service';
import {Aircraft, AircraftBrief} from '../data/aircraft.types';

@Component({
    selector: 'ac-details',
    templateUrl: './acDetails.html',
    directives: [AircraftSpeedsComponent, AircraftWeightsComponent]
})
export class AircraftDetailsComponent implements OnInit{

    selectedAircraft: Aircraft;

    constructor(private _acService: AircraftService) {
        console.log('creating Details Componenent');
    }

    ngOnInit() {
        console.log('ngOnInit Details Componenent');
        this._acService.aircraftDetailsChange$.subscribe(
            acDetails => {
                this.UpdateAircraft(acDetails);
            });
        this.selectedAircraft = this._acService.getSelectedAircraft();
    }

    UpdateAircraft(theAircraft: Aircraft) {
        this.selectedAircraft = theAircraft;
    }
}

