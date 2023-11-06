import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentlistComponent } from './currentlist/currentlist.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { PlantequipmentlistComponent } from './plantequipmentlist/plantequipmentlist.component';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';

const routes: Routes = [
  {path: 'currentlist', component: CurrentlistComponent},
  {path: 'locationlist', component: LocationlistComponent},
  {path: 'plantlist', component: PlantequipmentlistComponent},
  {path: 'currentlist/clientdashboard', component: ClientdashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
