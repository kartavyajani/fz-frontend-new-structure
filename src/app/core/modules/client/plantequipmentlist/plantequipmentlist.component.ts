import { Component, OnInit } from '@angular/core';
import { AngularGridInstance, Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-plantequipmentlist',
  templateUrl: './plantequipmentlist.component.html',
  styleUrls: ['./plantequipmentlist.component.scss']
})
export class PlantequipmentlistComponent implements OnInit {

  columnDefinitions: Column[] = [];
  gridOptions!: GridOption;
  dataset: any[] = [];
  angularGrid!: AngularGridInstance;
  resizerPaused = false;

  angularGridReady(angularGrid: any) {
    this.angularGrid = angularGrid;
  }

  constructor() {
    // this.excelExportService = new ExcelExportService();
  }

  ngOnInit(): void {
    this.columnDefinitions = [
      {
        id: 'id',
        name: 'Id',
        field: 'id',
        sortable: true,
        filterable: true,
        width: 70,
      },
      {
        id: 'Assetid',
        name: 'Asset Id',
        field: 'Assetid',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'name',
        name: 'Name',
        field: 'name',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'Description',
        name: 'Description',
        field: 'Description',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'Type',
        name: 'Type',
        field: 'Type',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'Company',
        name: 'Company',
        field: 'Company',
        sortable: true,
        filterable: true,
        width: 200,
      },
      {
        id: 'Currentlocation',
        name: 'Current Location',
        field: 'Currentlocation',
        sortable: true,
        filterable: true,
        width: 200,
      }
    
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      
      enableAutoResize: true,
      enableCellNavigation: true,
    
      showCustomFooter: true, // display some metrics in the bottom custom footer
      customFooterOptions: {
        // optionally display some text on the left footer container
        leftFooterText: 'custom footer text',
        hideTotalItemCount: true,
        hideLastUpdateTimestamp: true,
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
        hideInFilterHeaderRow: true,
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
      { id: 1, Assetid: 'Asset 1', name: 'Name 1', Description: 'Description 1', Type: 'Type 1', Company: 'Company 1', Currentlocation: 'Location 1' },
      { id: 2, Assetid: 'Asset 2', name: 'Name 2', Description: 'Description 2', Type: 'Type 2', Company: 'Company 2', Currentlocation: 'Location 2' },
      { id: 3, Assetid: 'Asset 3', name: 'Name 3', Description: 'Description 3', Type: 'Type 3', Company: 'Company 3', Currentlocation: 'Location 3' },
      { id: 4, Assetid: 'Asset 4', name: 'Name 4', Description: 'Description 4', Type: 'Type 4', Company: 'Company 4', Currentlocation: 'Location 4' },
      { id: 5, Assetid: 'Asset 5', name: 'Name 5', Description: 'Description 5', Type: 'Type 5', Company: 'Company 5', Currentlocation: 'Location 5' },
      { id: 6, Assetid: 'Asset 6', name: 'Name 6', Description: 'Description 6', Type: 'Type 6', Company: 'Company 6', Currentlocation: 'Location 6' },
      { id: 7, Assetid: 'Asset 7', name: 'Name 7', Description: 'Description 7', Type: 'Type 7', Company: 'Company 7', Currentlocation: 'Location 7' },
      { id: 8, Assetid: 'Asset 8', name: 'Name 8', Description: 'Description 8', Type: 'Type 8', Company: 'Company 8', Currentlocation: 'Location 8' },
      { id: 9, Assetid: 'Asset 9', name: 'Name 9', Description: 'Description 9', Type: 'Type 9', Company: 'Company 9', Currentlocation: 'Location 9' },
      { id: 10, Assetid: 'Asset 10', name: 'Name 10', Description: 'Description 10', Type: 'Type 10', Company: 'Company 10', Currentlocation: 'Location 10' }
    ];
  }
}
