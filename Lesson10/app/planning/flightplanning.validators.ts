import {FORM_DIRECTIVES, NgForm, NgControl, NgControlGroup, Control, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Inject}  from 'angular2/core';

interface ValidationResult {
    [key: string]: boolean;
}
export class SpeedValidator {

    static validSpeed(control: Control): ValidationResult {
        if (control.value && control.value.length != 4)
            return { 'validSpeed': false };

        if (control.value && control.value.length > 0) {
            if (control.value[0] != 'N')
                return { 'validSpeed': false };
        }
        if (control.value && control.value.length == 4) {
            var numComp = control.value.slice(1, 3);
            if (isNaN(numComp)) {
                return { 'validSpeed': false };
            }
            
        }
        return null;
    }

}
