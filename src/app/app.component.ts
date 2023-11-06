import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fuelzilla-frontend';
  isSideNavCollapsed = false;
  screenWidth = 0;
  showSideNav: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {

        //const currentRoute = event.url;
        // Add conditions to hide the navbar for specific routes
        let currentRoute = this.activatedRoute.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }
        console.log("this,showsidenav--->",this.showSideNav);
        
        this.showSideNav = currentRoute.routeConfig?.path !== '' && currentRoute.routeConfig?.path !== 'otp';
        // this.showSideNav = !['/login', '/otp',''].includes(currentRoute);
        console.log("this. hsow sidenva ---after---<>>>",this.showSideNav);
        
      }
    });
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
