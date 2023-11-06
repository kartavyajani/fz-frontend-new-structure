import { Component, OnInit } from '@angular/core';
import { AngularGridInstance, Column, GridOption } from 'angular-slickgrid';
import { CommonFormatters } from 'src/app/shared/helper/commonFormatters';

@Component({
  selector: 'app-currentlist',
  templateUrl: './currentlist.component.html',
  styleUrls: ['./currentlist.component.scss']
})
export class CurrentlistComponent implements OnInit {

 

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
      { id: 'id', name: 'Id', field: 'id', sortable: true,filterable: true,  width: 10 },
      { id: 'company', name: 'Company', field: 'company', sortable: true, filterable: true,  minWidth: 10 ,exportWithFormatter: true},
      { id: 'tradingname', name: 'Trading Name', field: 'company', sortable: true, filterable: true,  minWidth: 70,exportWithFormatter: true },
      { id: 'abn', name: 'ABN', field: 'abn', sortable: true,filterable: true,   minWidth: 70,exportWithFormatter: true},
      { id: 'officeAdress', name: 'Office Address', field: 'officeAddress', sortable: true, filterable: true,  minWidth: 100,exportWithFormatter: true},
      {
        id: 'isActive',
        name: 'Is Active',
        field: 'isactive',
        sortable: true,
        filterable: true,
        minWidth: 10,
        formatter: this.commonnformater.checkboxFormatter, // Use the custom formatter
      },

    ];
    

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10
      },
      enableAutoResize: true,
      enableCellNavigation: true,
      // forceFitColumns:true,
  
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
      { id: 1, company: 'Company 1', tradingname: 'Trading Name 1', abn: '12345', officeAddress: 'Address 1', isactive: true },
      { id: 2, company: 'Company 2', tradingname: 'Trading Name 2', abn: '67890', officeAddress: 'Address 2', isactive: false },
      { id: 3, company: 'Company 3', tradingname: 'Trading Name 3', abn: '24681', officeAddress: 'Address 3', isactive: true },
      { id: 4, company: 'Company 4', tradingname: 'Trading Name 4', abn: '13579', officeAddress: 'Address 4', isactive: false },
      { id: 5, company: 'Company 5', tradingname: 'Trading Name 5', abn: '98765', officeAddress: 'Address 5', isactive: true },
      { id: 6, company: 'Company 6', tradingname: 'Trading Name 6', abn: '55555', officeAddress: 'Address 6', isactive: true },
      { id: 7, company: 'Company 7', tradingname: 'Trading Name 7', abn: '77777', officeAddress: 'Address 7', isactive: false },
      { id: 8, company: 'Company 8', tradingname: 'Trading Name 8', abn: '88888', officeAddress: 'Address 8', isactive: true },
      { id: 9, company: 'Company 9', tradingname: 'Trading Name 9', abn: '99999', officeAddress: 'Address 9', isactive: false },
      { id: 10, company: 'Company 10', tradingname: 'Trading Name 10', abn: '10101', officeAddress: 'Address 10', isactive: true },
      // You can add more data here if needed
  ];

  }

}
