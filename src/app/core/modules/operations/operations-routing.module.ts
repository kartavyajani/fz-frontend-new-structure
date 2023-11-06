import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryDocketsComponent } from './delivery-dockets/delivery-dockets.component';
import { DeliveryShiftsComponent } from './delivery-shifts/delivery-shifts.component';
import { LoadsheetComponent } from './loadsheet/loadsheet.component';

const routes: Routes = [
  {path: 'deliverydockets', component: DeliveryDocketsComponent},
  {path: 'deliveryshifts', component: DeliveryShiftsComponent},
  {path: 'loadsheet', component: LoadsheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
