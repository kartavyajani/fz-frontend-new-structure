import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SublevelMenuComponent } from './layout/sidenav/sublevel-menu.component';
import { MatMenuComponent } from './layout/mat-menu/mat-menu.component';
import { BodyComponent } from './layout/body/body.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SublevelMenuComponent,
    MatMenuComponent,
    BodyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
 
    MatToolbarModule, // Add other imported modules here
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDialogModule,


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
