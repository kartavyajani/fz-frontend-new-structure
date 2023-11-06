import { Component, OnInit } from '@angular/core';
import { AngularGridInstance, Column,   Formatter, GridOption } from 'angular-slickgrid';
import { CommonFormatters } from 'src/app/shared/helper/commonFormatters';

@Component({
  selector: 'app-delivery-shifts',
  templateUrl: './delivery-shifts.component.html',
  styleUrls: ['./delivery-shifts.component.scss'],
})
export class DeliveryShiftsComponent implements OnInit {
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
        id: 'Shiftid ',
        name: 'Shift Id',
        field: 'Shiftid',
        sortable: true,
        filterable: true,
        width: 70,
      },
      {
        id: 'Operator',
        name: 'Operator',
        field: 'Operator',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'Shiftstart',
        name: 'Shift Start',
        field: 'Shiftstart',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'Shiftend',
        name: 'Shift End',
        field: 'Shiftend',
        sortable: true,
        filterable: true,
        width: 170,
      },
      {
        id: 'shiftduration',
        name: 'Shift Duration',
        field: 'shiftduration',
        sortable: true,
        filterable: true,
        width: 200,
      },

      {
        id: 'DeliveryAsset',
        name: 'Delivery Asset',
        field: 'DeliveryAsset',
        sortable: true,
        filterable: true,
        width: 200,
      },

      {
        id: 'VolumeDelivered',
        name: 'Volume Delivered',
        field: 'VolumeDelivered',
        sortable: true,
        filterable: true,
        width: 200,
        formatter:this.commonnformater.deliveryVolumeFormatter,
      },

      {
        id: 'Volume Loaded',
        name: 'Volume loaded',
        field: 'Volumeloaded',
        sortable: true,
        filterable: true,
        width: 200,
        formatter: this.commonnformater.deliveryVolumeFormatter,
      },
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10,
      },
      enableAutoResize: true,
      enableCellNavigation: true,
      forceFitColumns: true,

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
        Shiftid: 'Shift 1',
        Operator: 'Operator 1',
        Shiftstart: '2023-01-15',
        Shiftend: '2023-01-16',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 1',
        VolumeDelivered: 100,
        Volumeloaded: 170,
      },
      {
        id: 2,
        Shiftid: 'Shift 2',
        Operator: 'Operator 2',
        Shiftstart: '2023-01-16',
        Shiftend: '2023-01-17',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 2',
        VolumeDelivered: 150,
        Volumeloaded: 170,
      },
      {
        id: 3,
        Shiftid: 'Shift 3',
        Operator: 'Operator 3',
        Shiftstart: '2023-01-17',
        Shiftend: '2023-01-18',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 3',
        VolumeDelivered: 200,
        Volumeloaded: 170,
      },
      {
        id: 4,
        Shiftid: 'Shift 4',
        Operator: 'Operator 4',
        Shiftstart: '2023-01-18',
        Shiftend: '2023-01-19',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 4',
        VolumeDelivered: 120,
        Volumeloaded: 170,
      },
      {
        id: 5,
        Shiftid: 'Shift 5',
        Operator: 'Operator 5',
        Shiftstart: '2023-01-19',
        Shiftend: '2023-01-20',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 5',
        VolumeDelivered: 180,
        Volumeloaded: 170,
      },
      {
        id: 6,
        Shiftid: 'Shift 6',
        Operator: 'Operator 6',
        Shiftstart: '2023-01-20',
        Shiftend: '2023-01-21',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 6',
        VolumeDelivered: 90,
        Volumeloaded: 170,
      },
      {
        id: 7,
        Shiftid: 'Shift 7',
        Operator: 'Operator 7',
        Shiftstart: '2023-01-21',
        Shiftend: '2023-01-22',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 7',
        VolumeDelivered: 220,
        Volumeloaded: 170,
      },
      {
        id: 8,
        Shiftid: 'Shift 8',
        Operator: 'Operator 8',
        Shiftstart: '2023-01-22',
        Shiftend: '2023-01-23',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 8',
        VolumeDelivered: 130,
        Volumeloaded: 170,
      },
      {
        id: 9,
        Shiftid: 'Shift 9',
        Operator: 'Operator 9',
        Shiftstart: '2023-01-23',
        Shiftend: '2023-01-24',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 9',
        VolumeDelivered: 250,
        Volumeloaded: 170,
      },
      {
        id: 10,
        Shiftid: 'Shift 10',
        Operator: 'Operator 10',
        Shiftstart: '2023-01-24',
        Shiftend: '2023-01-25',
        shiftduration: '1 hour',
        DeliveryAsset: 'Asset 10',
        VolumeDelivered: 170,
        Volumeloaded: 170,
      },
    ];
  }
}
