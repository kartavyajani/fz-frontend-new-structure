import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.scss']
})
export class ClientdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemImageUrl: string = 'your-image-url.jpg'; // Replace with your image URL
  showUniqueLetters: boolean = false;
  itemUniqueLetters: string = '';
  isActive: boolean = true;

  displayUniqueLetters() {
    // Image failed to load, display unique 3 letters
    this.showUniqueLetters = true;

    // Replace 'Your Item Name' with the actual item name or data source
    const itemName: string = 'Your Item Name';
    this.itemUniqueLetters = itemName.slice(0, 3).toUpperCase();
  }
  

}
