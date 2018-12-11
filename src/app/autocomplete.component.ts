import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'autocomplete',
  template: `
<mat-form-field>
  <input type="text" matInput [formControl]="myControl" [matAutocomplete]="auto">
  
  <mat-autocomplete #auto="matAutocomplete">
    <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
      {{ option }}
    </mat-option>
  </mat-autocomplete>
</mat-form-field>
  `,
  styles: []
})
export class AutocompleteComponent implements OnInit {
  myControl: FormControl;
  options = ["yuta", "puu", "pico"];
  constructor() {
    this.myControl = new FormControl();
    
  }

  filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


}
