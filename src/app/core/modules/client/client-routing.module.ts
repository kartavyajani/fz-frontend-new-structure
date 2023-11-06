import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentlistComponent } from './currentlist/currentlist.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { PlantequipmentlistComponent } from './plantequipmentlist/plantequipmentlist.component';

const routes: Routes = [
  {path: 'currentlist', component: CurrentlistComponent},
  {path: 'locationlist', component: LocationlistComponent},
  {path: 'plantlist', component: PlantequipmentlistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
