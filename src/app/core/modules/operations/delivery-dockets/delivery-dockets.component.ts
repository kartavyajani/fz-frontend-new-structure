import { Component, OnInit } from '@angular/core';
import { AngularGridInstance, Column,   Formatter, GridOption } from 'angular-slickgrid';
import { CommonFormatters } from 'src/app/shared/helper/commonFormatters';

@Component({
  selector: 'app-delivery-dockets',
  templateUrl: './delivery-dockets.component.html',
  styleUrls: ['./delivery-dockets.component.scss']
})
export class DeliveryDocketsComponent implements OnInit {
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
      { id: 'docket', name: 'Docket', field: 'docket', sortable: true,filterable: true,  width: 70 },
      { id: 'deliveryDate', name: 'Delivery Date', field: 'deliveryDate', sortable: true, filterable: true, width: 170 },
      { id: 'client', name: 'Client', field: 'client', sortable: true, filterable: true, width: 170 },
      { id: 'Deliverylocation', name: 'Delivery Location', field: 'Deliverylocation', sortable: true,filterable: true,  width: 170 },
      { id: 'Locationaddress', name: 'Location Address', field: 'Locationaddress', sortable: true, filterable: true, width:  200},
      {
        id: 'Deliveryvolume',
        name: 'Delivery Volume',
        field: 'Deliveryvolume',
        sortable: true,
        filterable: true,
        width: 200,
        formatter: this.commonnformater.deliveryVolumeFormatter, // Use the custom formatter
      },
     
  {
    id: 'download',
    name: 'Download',
    field: 'download',
    sortable: false,
    filterable: false,
    width: 100,
    formatter: this.commonnformater.DownloadFormatter,
  },
  {
    id: 'downloadDocket',
    name: 'Docket Download',
    field: 'download',
    sortable: false,
    filterable: false,
    width: 100,
    formatter: this.commonnformater.DownloadFormatter,
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
        docket: 'Docket 1',
        deliveryDate: '2023-01-15',
        client: 'Client 1',
        Deliverylocation: 'Location 1',
        Locationaddress: 'Address 1',
        Deliveryvolume: '100',
        download: { pdfUrl: 'pdf_url_1.pdf' }
      },
      { 
        id: 2,
        docket: 'Docket 2',
        deliveryDate: '2023-02-20',
        client: 'Client 2',
        Deliverylocation: 'Location 2',
        Locationaddress: 'Address 2',
        Deliveryvolume: '150',
        download: { pdfUrl: 'pdf_url_2.pdf' }
      },
      { 
        id: 3,
        docket: 'Docket 3',
        deliveryDate: '2023-03-25',
        client: 'Client 3',
        Deliverylocation: 'Location 3',
        Locationaddress: 'Address 3',
        Deliveryvolume: '200',
        download: { pdfUrl: 'pdf_url_3.pdf' }
      },
      { 
        id: 4,
        docket: 'Docket 4',
        deliveryDate: '2023-04-10',
        client: 'Client 4',
        Deliverylocation: 'Location 4',
        Locationaddress: 'Address 4',
        Deliveryvolume: '120',
        download: { pdfUrl: 'pdf_url_4.pdf' }
      },
      { 
        id: 5,
        docket: 'Docket 5',
        deliveryDate: '2023-05-05',
        client: 'Client 5',
        Deliverylocation: 'Location 5',
        Locationaddress: 'Address 5',
        Deliveryvolume: '180',
        download: { pdfUrl: 'pdf_url_5.pdf' }
      },
      { 
        id: 6,
        docket: 'Docket 6',
        deliveryDate: '2023-06-30',
        client: 'Client 6',
        Deliverylocation: 'Location 6',
        Locationaddress: 'Address 6',
        Deliveryvolume: '90',
        download: { pdfUrl: 'pdf_url_6.pdf' }
      },
      { 
        id: 7,
        docket: 'Docket 7',
        deliveryDate: '2023-07-15',
        client: 'Client 7',
        Deliverylocation: 'Location 7',
        Locationaddress: 'Address 7',
        Deliveryvolume: '220',
        download: { pdfUrl: 'pdf_url_7.pdf' }
      },
      { 
        id: 8,
        docket: 'Docket 8',
        deliveryDate: '2023-08-20',
        client: 'Client 8',
        Deliverylocation: 'Location 8',
        Locationaddress: 'Address 8',
        Deliveryvolume: '130',
        download: { pdfUrl: 'pdf_url_8.pdf' }
      },
      { 
        id: 9,
        docket: 'Docket 9',
        deliveryDate: '2023-09-25',
        client: 'Client 9',
        Deliverylocation: 'Location 9',
        Locationaddress: 'Address 9',
        Deliveryvolume: '250',
        download: { pdfUrl: 'pdf_url_9.pdf' }
      },
      { 
        id: 10,
        docket: 'Docket 10',
        deliveryDate: '2023-10-10',
        client: 'Client 10',
        Deliverylocation: 'Location 10',
        Locationaddress: 'Address 10',
        Deliveryvolume: '170',
        download: { pdfUrl: 'pdf_url_10.pdf' }
      },
    ];

  }

}
