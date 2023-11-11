import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.scss']
})
export class ClientdashboardComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    // this.createBarChart();
    this.RenderChart();
  }
  RenderChart(){
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
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
