import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { DeliveryDocketsComponent } from './delivery-dockets/delivery-dockets.component';
import { DeliveryShiftsComponent } from './delivery-shifts/delivery-shifts.component';
import { LoadsheetComponent } from './loadsheet/loadsheet.component';
import { AngularSlickgridModule } from 'angular-slickgrid';


@NgModule({
  declarations: [
    DeliveryDocketsComponent,
    DeliveryShiftsComponent,
    LoadsheetComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    AngularSlickgridModule.forRoot() 
  ]
})
export class OperationsModule { }
