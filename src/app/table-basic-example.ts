import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;  
  transit: string;
  cost: number;
  mode : string;
  equipment : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
     {position: 1, name: 'SAIA Motor Freight', equipment: 'Dry Van', cost: 508.70, transit: '2 Days' , mode: 'Parcel'},
  {position: 2, name: 'UPS Freight LTL', equipment: 'Flat Bed',cost: 518.30, transit: '2 Days',mode: 'LTL'},
  {position: 3, name: 'R+L Carriers', equipment: 'Refrigerated',cost: 602.10, transit: '2 Days',mode: 'LTL'},
  {position: 4, name: 'New Penn',equipment: 'Flat Bed',cost: 618.45, transit: '2 Days',mode: 'TL'},
  {position: 5, name: 'XLS Logistics',equipment: 'Dry Van', cost: 618.70, transit: '2 Days',mode: 'Parcel'},
  {position: 6, name: 'YRC Freight',equipment: 'Dry Van', cost: 623.67, transit: '2 Days',mode: 'Parcel'},
  {position: 7, name: 'DHL Freight',equipment: 'Flat Bed', cost: 648.56, transit: '2 Days',mode: 'LTL'},
  {position: 8, name: 'DHL Express',equipment: 'Refrigerated', cost: 845.70, transit: '1 Day',mode: 'LTL'},
  {position: 9, name: 'Toll Road Express',equipment: 'Dry Van', cost: 908.70, transit: '1 Day',mode: 'LTL'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'carrier', 'mode', 'equipment','transit','cost'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */