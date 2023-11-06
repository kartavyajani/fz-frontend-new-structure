import { INavbarData } from "../../app/layout/sidenav/helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-circle',
        label: 'Home',
        items: [
            {
                routeLink: 'home/dashboard',
                label: 'Dashboard'
            }
        ]
    },
    {
        routeLink: 'clientmanagment/currentlist',
        icon: 'fal fa-box-open',
        label: 'Client Management',
        items: [
            {
                routeLink: 'clientmanagment/currentlist',
                label: 'Current List',
               
            },
            {
                routeLink: 'clientmanagment/locationlist',
                label: 'Location List',
            },  {
                routeLink: 'clientmanagment/plantlist',
                label: 'Plant & Equipment List',
            },
            {
                routeLink: 'products/level1.2',
                label: 'Tank & Storage',
            }
        ]
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Fleet Management',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Delivery Aparatus List',
               
            },
            {
                routeLink: 'products/level1.2',
                label: 'Plant & Equipment List',
            },  {
                routeLink: 'products/level1.2',
                label: 'Tanks & storage Vessels',
            },
            {
                routeLink: 'products/level1.2',
                label: 'Inspections',
            },
            {
                routeLink: 'products/level1.2',
                label: 'Issues',
            }
        ]
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Operations',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Scheduling',
               
            },
            {
                routeLink: 'operations/deliverydockets',
                label: 'Delivery Dockets',
            },  {
                routeLink: 'operations/deliveryshifts',
                label: 'Delivery Shifts',
            },
            {
                routeLink: 'operations/loadsheet',
                label: 'LoadSheets',
            }
        ]
    },
    {
        routeLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Inventory',
        
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Scheduling'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'HR/IR'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Depots',
        expanded: true
 
    },
    
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Accounting',
        expanded: true
 
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Reporting',
        expanded: true
 
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Maintenance',
        expanded: true
 
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'System',
        expanded: true
 
    },
    

];