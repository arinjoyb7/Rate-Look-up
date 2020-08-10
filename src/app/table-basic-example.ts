import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;  
  transit: string;
  cost: string;
  lhcost: string;
  accost: string;
  mode : string;
  equipment : string;
  distance : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
     {position: 'Yes', name: 'SAIA Motor Freight', equipment: 'Dry Van', cost: '508.70 $', lhcost: '350 $',accost:'158.70 $',distance: '350 miles',transit: '2 Days' , mode: 'Parcel'},
  {position: 'Yes', name: 'UPS Freight LTL', equipment: 'Flat Bed',cost: '518.30 $',  lhcost: '360 $',accost:'158.30 $',distance: '350 miles',transit: '2 Days',mode: 'LTL'},
  {position: '', name: 'R+L Carriers', equipment: 'Refrigerated',cost: '602.10', lhcost: '400 $',accost:'202.10 $',distance: '350 miles', transit: '2 Days',mode: 'LTL'},
  {position: '', name: 'New Penn',equipment: 'Flat Bed',cost: '618.45 $', lhcost: '410 $',accost:'208.45 $',distance: '350 miles', transit: '2 Days',mode: 'TL'},
  {position: '', name: 'XLS Logistics',equipment: 'Dry Van', cost: '618.70 $', lhcost: '410 $',accost:'208.70 $',distance: '350 miles', transit: '2 Days',mode: 'Parcel'},
  {position: '', name: 'YRC Freight',equipment: 'Dry Van', cost: '623.67 $', lhcost: '410 $',accost:'213.60 $',distance: '350 miles', transit: '2 Days',mode: 'Parcel'},
  {position: '', name: 'DHL Freight',equipment: 'Flat Bed', cost: '648.56 $', lhcost: '450 $',accost:'218.56 $',distance: '350 miles', transit: '2 Days',mode: 'LTL'},
  {position: '', name: 'DHL Express',equipment: 'Refrigerated', cost:'845.70 $', lhcost: '640 $',accost:'205.70 $',distance: '350 miles', transit: '1 Day',mode: 'LTL'},
  {position: '', name: 'Toll Road Express',equipment: 'Dry Van', cost:'908.70 $', lhcost: '650 $',accost:'258.70 $',distance: '350 miles', transit: '1 Day',mode: 'LTL'},
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
  displayedColumns: string[] = ['position', 'carrier', 'mode', 'equipment','transit','distance','cost','lhcost','accost'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */