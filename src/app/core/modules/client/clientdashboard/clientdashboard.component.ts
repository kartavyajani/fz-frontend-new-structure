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
    // this.RenderChart();
  }
  ngAfterViewInit() {
    this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Cost'],
        datasets: [{
          label: ' Fuel',
          data: [500],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }, {
          label: ' Service ',
          data: [690],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },{
          label: ' Others ',
          data: [7],
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black color
        borderColor: 'rgba(0, 0, 0, 1)', // B
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: false,
            beginAtZero: true,
            suggestedMin: 50,
                suggestedMax: 1000// Set the y-axis interval to 100
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
