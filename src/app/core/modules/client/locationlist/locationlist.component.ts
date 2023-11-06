import { Component, OnInit } from '@angular/core';
import {
  AngularGridInstance,
  Column,
  Formatter,
  GridOption,
} from 'angular-slickgrid';
import { CommonFormatters } from 'src/app/shared/helper/commonFormatters';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.scss']
})
export class LocationlistComponent implements OnInit {
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
      {
        id: 'client',
        name: 'Client',
        field: 'client',
        sortable: true,
        filterable: true,
        width: 70,
      },
      {
        id: 'locationname',
        name: 'Location Name',
        field: 'locationname',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'LocationAddress',
        name: 'location Address',
        field: 'locationAddress',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'suburb',
        name: 'Suburb',
        field: 'suburb',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'state',
        name: 'State',
        field: 'state',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'officeAdress',
        name: 'Office Address',
        field: 'officeAddress',
        sortable: true,
        filterable: true,
        width: 200,
      },
      {
        id: 'isActive',
        name: 'Is Active',
        field: 'isactive',
        sortable: true,
        filterable: true,
        width: 200,
        formatter: this.commonnformater.checkboxFormatter, // Use the custom formatter
      },
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      enableAutoResize: true,
      enableCellNavigation: true,
      forceFitColumns:true,
   
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
      {
        id: 1,
        client: 'Client 1',
        locationname: 'Location Name 1',
        locationAddress: 'Address 1',
        suburb: 'Suburb 1',
        state: 'State 1',
        officeAddress: 'Office Address 1',
        isactive: true,
      },
      {
        id: 2,
        client: 'Client 2',
        locationname: 'Location Name 2',
        locationAddress: 'Address 2',
        suburb: 'Suburb 2',
        state: 'State 2',
        officeAddress: 'Office Address 2',
        isactive: false,
      },
      {
        id: 3,
        client: 'Client 3',
        locationname: 'Location Name 3',
        locationAddress: 'Address 3',
        suburb: 'Suburb 3',
        state: 'State 3',
        officeAddress: 'Office Address 3',
        isactive: true,
      },
      {
        id: 4,
        client: 'Client 4',
        locationname: 'Location Name 4',
        locationAddress: 'Address 4',
        suburb: 'Suburb 4',
        state: 'State 4',
        officeAddress: 'Office Address 4',
        isactive: false,
      },
      {
        id: 5,
        client: 'Client 5',
        locationname: 'Location Name 5',
        locationAddress: 'Address 5',
        suburb: 'Suburb 5',
        state: 'State 5',
        officeAddress: 'Office Address 5',
        isactive: true,
      },
      {
        id: 6,
        client: 'Client 6',
        locationname: 'Location Name 6',
        locationAddress: 'Address 6',
        suburb: 'Suburb 6',
        state: 'State 6',
        officeAddress: 'Office Address 6',
        isactive: true,
      },
      {
        id: 7,
        client: 'Client 7',
        locationname: 'Location Name 7',
        locationAddress: 'Address 7',
        suburb: 'Suburb 7',
        state: 'State 7',
        officeAddress: 'Office Address 7',
        isactive: false,
      },
      {
        id: 8,
        client: 'Client 8',
        locationname: 'Location Name 8',
        locationAddress: 'Address 8',
        suburb: 'Suburb 8',
        state: 'State 8',
        officeAddress: 'Office Address 8',
        isactive: true,
      },
      {
        id: 9,
        client: 'Client 9',
        locationname: 'Location Name 9',
        locationAddress: 'Address 9',
        suburb: 'Suburb 9',
        state: 'State 9',
        officeAddress: 'Office Address 9',
        isactive: false,
      },
      {
        id: 10,
        client: 'Client 10',
        locationname: 'Location Name 10',
        locationAddress: 'Address 10',
        suburb: 'Suburb 10',
        state: 'State 10',
        officeAddress: 'Office Address 10',
        isactive: true,
      },
    ];
  }
}

