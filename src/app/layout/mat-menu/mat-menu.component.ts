import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { INavbarData } from '../sidenav/helper';
import { navbarData } from '../../../assets/data/nav-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.scss']
})
export class MatMenuComponent implements OnInit {


    @Input() items: INavbarData[] = navbarData;
    @ViewChild('childMenu', {static: true}) public childMenu: any;
  
    constructor(public router: Router) {
    }
  
    ngOnInit() {
    }
     navigateToRoute(route: string): void {
      this.router.navigate([route]);
    }
  }
  
  
  

