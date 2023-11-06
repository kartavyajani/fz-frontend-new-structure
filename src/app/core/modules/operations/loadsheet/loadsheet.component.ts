import { Component, OnInit } from '@angular/core';
import { AngularGridInstance, Column,   Formatter, GridOption } from 'angular-slickgrid';
import { CommonFormatters } from 'src/app/shared/helper/commonFormatters';

@Component({
  selector: 'app-loadsheet',
  templateUrl: './loadsheet.component.html',
  styleUrls: ['./loadsheet.component.scss']
})
export class LoadsheetComponent implements OnInit {

 

  columnDefinitions: Column[] = [];
  gridOptions!: GridOption;
  dataset: any[] = []; 
  angularGrid!: AngularGridInstance;
  resizerPaused = false;
  

  angularGridReady(angularGrid: any) {
    this.angularGrid = angularGrid;
  }
  

  constructor(private commonnformater:CommonFormatters) {
    // this.excelExportService = new ExcelExportService();
  }

  ngOnInit(): void {
    this.columnDefinitions = [
      { id: 'id', name: 'Id', field: 'id', sortable: true,filterable: true,  width: 70 },
      { id: 'loadingtime', name: 'Loading Time', field: 'loadingtime', sortable: true, filterable: true, width: 170 },
      { id: 'deliveryassetid', name: 'Delivery Asset Id', field: 'deliveryassetid', sortable: true, filterable: true, width: 170 },
      { id: 'deliveryassetname', name: 'Delivery Asset Name', field: 'deliveryassetname', sortable: true,filterable: true,  width: 170 },
      { id: 'operator', name: 'Operator', field: 'operator', sortable: true,filterable: true,  width: 170 },
      { id: 'Location', name: 'Location', field: 'Location', sortable: true, filterable: true, width:  200},
      {
        id: 'totalvolumeloaded',
        name: 'Total Volume Loaded',
        field: 'totalvolumeloaded',
        sortable: true,
        filterable: true,
        width: 200,
        formatter: this.commonnformater.deliveryVolumeFormatter, // Use the custom formatter
      },
     
  
   
   

    ];
    

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10
      },
      enableAutoResize: true,
      enableCellNavigation: true,
      forceFitColumns:true,
  
      showCustomFooter: true, // display some metrics in the bottom custom footer
      customFooterOptions: {
        // optionally display some text on the left footer container
        leftFooterText: 'custom footer text',
        hideTotalItemCount: true,
        hideLastUpdateTimestamp: true
      },
      pagination: {
        pageSizes: [25, 50, 75, 100],
        pageSize: 25,
      // Use the custom template
      },
      enablePagination: true,
      enableFiltering: true,
      enableCheckboxSelector: true,
      checkboxSelector: {
        // The first column always contains a checkbox (select all)
        hideInFilterHeaderRow: true
      },
    //   enableExcelExport: true,
    //   excelExportOptions: {
    //     sanitizeDataExport: true
    //   },
    //   registerExternalResources: [this.excelExportService],
    // }
     
      // registerExternalResources: [new ExcelExportService()],
      

      // you customize all formatter at once certain options through "formatterOptions" in the Grid Options
      // or independently through the column definition "params", the option names are the same
      /*
      formatterOptions: {
        dateSeparator: '.',
        decimalSeparator: ',',
        displayNegativeNumberWithParentheses: true,
        minDecimal: 0,
        maxDecimal: 2,
        thousandSeparator: '_'
      },
      */

      // when using the ExcelCopyBuffer, you can see what the selection range is
    
      // excelCopyBufferOptions: {
      //   onCopyCells: (e, args: { ranges: SelectedRange[] }) => console.log('onCopyCells', args.ranges),
      //   onPasteCells: (e, args: { ranges: SelectedRange[] }) => console.log('onPasteCells', args.ranges),
      //   onCopyCancelled: (e, args: { ranges: SelectedRange[] }) => console.log('onCopyCancelled', args.ranges),
      // }
    };
    this.dataset = [
      {
        id: 1,
        loadingtime: '2023-01-15 10:00 AM',
        deliveryassetid: 1,
        deliveryassetname: 'Asset 1',
        operator: 'Operator 1',
        Location: 'Location 1',
        totalvolumeloaded: 100,
      },
      {
        id: 2,
        loadingtime: '2023-01-15 11:00 AM',
        deliveryassetid: 2,
        deliveryassetname: 'Asset 2',
        operator: 'Operator 2',
        Location: 'Location 2',
        totalvolumeloaded: 150,
      },
      {
        id: 3,
        loadingtime: '2023-01-15 12:00 PM',
        deliveryassetid: 3,
        deliveryassetname: 'Asset 3',
        operator: 'Operator 3',
        Location: 'Location 3',
        totalvolumeloaded: 200,
      },
      {
        id: 4,
        loadingtime: '2023-01-15 1:00 PM',
        deliveryassetid: 4,
        deliveryassetname: 'Asset 4',
        operator: 'Operator 4',
        Location: 'Location 4',
        totalvolumeloaded: 120,
      },
      {
        id: 5,
        loadingtime: '2023-01-15 2:00 PM',
        deliveryassetid: 5,
        deliveryassetname: 'Asset 5',
        operator: 'Operator 5',
        Location: 'Location 5',
        totalvolumeloaded: 180,
      },
      {
        id: 6,
        loadingtime: '2023-01-15 3:00 PM',
        deliveryassetid: 6,
        deliveryassetname: 'Asset 6',
        operator: 'Operator 6',
        Location: 'Location 6',
        totalvolumeloaded: 90,
      },
      {
        id: 7,
        loadingtime: '2023-01-15 4:00 PM',
        deliveryassetid: 7,
        deliveryassetname: 'Asset 7',
        operator: 'Operator 7',
        Location: 'Location 7',
        totalvolumeloaded: 220,
      },
      {
        id: 8,
        loadingtime: '2023-01-15 5:00 PM',
        deliveryassetid: 8,
        deliveryassetname: 'Asset 8',
        operator: 'Operator 8',
        Location: 'Location 8',
        totalvolumeloaded: 130,
      },
      {
        id: 9,
        loadingtime: '2023-01-15 6:00 PM',
        deliveryassetid: 9,
        deliveryassetname: 'Asset 9',
        operator: 'Operator 9',
        Location: 'Location 9',
        totalvolumeloaded: 250,
      },
      {
        id: 10,
        loadingtime: '2023-01-15 7:00 PM',
        deliveryassetid: 10,
        deliveryassetname: 'Asset 10',
        operator: 'Operator 10',
        Location: 'Location 10',
        totalvolumeloaded: 170,
      },
    ];

  }

}
