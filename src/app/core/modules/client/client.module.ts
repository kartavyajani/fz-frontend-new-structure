import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CurrentlistComponent } from './currentlist/currentlist.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { PlantequipmentlistComponent } from './plantequipmentlist/plantequipmentlist.component';
import { TankstorageComponent } from './tankstorage/tankstorage.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    CurrentlistComponent,
    LocationlistComponent,
    PlantequipmentlistComponent,
    TankstorageComponent,
    ClientdashboardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
   
    AngularSlickgridModule.forRoot() 
  ]
})
export class ClientModule { }
