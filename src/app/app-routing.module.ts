import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'clientmanagment',
    loadChildren: () =>
      import('./core/modules/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'operations',
    loadChildren: () =>
      import('./core/modules/operations/operations.module').then((m) => m.OperationsModule),
  },
  // {
  //   path: '',
  //   // component: SidenavComponent,
  //   component: SidenavNewComponent,
  //   children: [
  //     {
  //       path: 'applications',
  //       loadChildren: () =>
  //         import('./features/applications/applications.module').then(
  //           (m) => m.ApplicationsModule
  //         ),
  //     }
     
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
