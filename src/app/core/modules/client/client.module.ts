import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CurrentlistComponent } from './currentlist/currentlist.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { PlantequipmentlistComponent } from './plantequipmentlist/plantequipmentlist.component';
import { TankstorageComponent } from './tankstorage/tankstorage.component';
import { AngularSlickgridModule } from 'angular-slickgrid';


@NgModule({
  declarations: [
    CurrentlistComponent,
    LocationlistComponent,
    PlantequipmentlistComponent,
    TankstorageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AngularSlickgridModule.forRoot() 
  ]
})
export class ClientModule { }
