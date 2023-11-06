import { DatePipe, TitleCasePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Column, Formatter } from "angular-slickgrid";

@Injectable({
  providedIn: 'root',
})

export abstract class CommonFormatters {
  constructor() { }

  public MonthDayYearFormat = 'MMMM Do YYYY';   //September 29th 2021
  public dateWithDayFormat = 'YYYY-MM-DD, EEEE';
  public timeFormatWAmPm = 'HH:mm a';
  public timeFormatWoSec = 'HH:mm';
  public timeFormat = 'HH:mm:ss';
  public dateFormat = 'YYYY-MM-DD';
  public dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';
  public dateTimeFormatlabel = 'YYYYMMDDHHmmss';
  public dateTimeWithMilliSecFormat = 'YYYY-MM-DD HH:mm:ss.SSS';
  public dateTimeWithMonthFormat = 'DD MMM YYYY HH:mm';
  public monthDayYearTime = 'MMMM Do YYYY, h:mm a'
  // public editIcon = '<div><i class="fas fa-pencil-alt" title="Edit"></i></div>';
  public editIconDisabled = '<div class="disabled"><i class="fas fa-pencil-alt"</i></div>';
  public addIcon = '<div class="disabled"><i class="fas fa-plus"></i></div>';


  // all formatters like icons are added in this file and they can be use globally
  public newModifiedFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.status_name === 'New') {
      return `<div style="color:green">New</div>`;
    }

    return `<div style="color:blue">Modified</div>`;
  };
  public checkboxFormatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {
    if (dataContext && dataContext.isactive) {
      return '<input type="checkbox" checked="checked" disabled="disabled">';
    } else {
      return '<input type="checkbox" disabled="disabled">';
    }
  };

  public editIcon: Formatter = (row, cell, value, columnDef, dataContext) => {
    return `<i class="fa fa-pencil pointer edit-icon" title="Edit" style="color: blue;"></i>`;
  };
  public delete: Formatter = (row, cell, value, columnDef, dataContext) => {
    return `<i class="fa fa-trash pointer delete-icon" title="Delete"></i>`;
  };
  // // Define a custom checkbox formatter
  // public checkboxFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   // Create an HTML input element for the checkbox
  //   const isLocked = dataContext.checkbox;
  //   console.log("CheckBox formatter is ", isLocked);  
  //   return isLocked ? `<input type="checkbox" id="checkbox_${row}" class="slick-checkbox" />` : `<input type="checkbox" id="checkbox_${row}" class="slick-checkbox" />`
  // };



  public restrictedStatusFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isRestricted == true || dataContext.isRestricted == 'Yes') {
      return `<div>Yes</div>`;
    } else if (dataContext.isRestricted == false || dataContext.isRestricted == 'No') {
      return `<div>No</div>`;
    }
    return dataContext.isRestricted;
  };

  // public statusFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   if (dataContext.isActive == 1 || dataContext.isActive == true) {
  //     return `<div style="color:green">Active</div>`;
  //   }
  //   return `<div style="color:red">Inactive</div>`;
  // };

  public statusFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isActive == 1 || dataContext.isActive == true || dataContext.isActive == 'Active') {
      return `<div style="color:green">Active</div>`;
    }
    return `<div style="color:red">Inactive</div>`;
  };

  public excludedStatusFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isExcluded == true || dataContext.isExcluded == 'Yes') {
      return `<div>Yes</div>`;
    } else if (dataContext.isExcluded == false || dataContext.isExcluded == 'No') {
      return `<div>No</div>`;
    }
    return dataContext.isExcluded;
  };

  // slickGridActionColumnFormatter = (useTestCondition: boolean) => {
  //   return (row: number, cell: number, value: any, columnDef: Column<any>, dataContext: any) => {
  //     const isAnchorTagged = dataContext.isAnchorTagged; // Assuming isAnchorTagged is a property in the dataContext
  //     // const userId = localStorage.userId; // Assuming userId is a property in the dataContext
  //     // const userId = this.authService.getAccessManagementData().userId;
  //     // const userId = this.apiService.accessManagementData?.userId;
  //     const isUserSuperAdmin =  this.apiService.accessManagementData?.isSuperAdmin

  //     console.log("isUserSuperAdmin",isUserSuperAdmin); 

  //     let actions = '';

  //     console.log("formatter useTestCondition",useTestCondition); 
  //     console.log("formatter !isAnchorTagged",!isAnchorTagged); 
  //     console.log("formatter !useTestCondition",!useTestCondition); 
  //     console.log("formatter i  sUserSuperAdmin",isUserSuperAdmin); 
  //     if ((useTestCondition && !isAnchorTagged) || (!useTestCondition && isUserSuperAdmin === true)) {
  //       actions = [
  //         `<div id="edit-icon" class="fa fa-pencil pointer edit-icon" aria-hidden="true" title="Edit"></div>`,
  //         `<div id="delete-icon" class="fa fa-trash pointer delete-icon" aria-hidden="true" title="Delete"></div>`,
  //         `<div id="clone-icon" class="fa fa-clone pointer" aria-hidden="true" title="Clone"></div>`
  //       ].join(' ');

  //       // Add custom CSS class for spacing
  //       actions = `<div class="action-icons">${actions}</div>`;
  //     }

  //     return actions;
  //   };
  // };

  // public slickGridActionColumnFormatterTest: Formatter = (row, cell, value, columnDef, dataContext) => {
  //     const isAnchorTagged = dataContext.isAnchorTagged; // Assuming isAnchorTagged is a property in the dataContext
  //     const userId = localStorage.userId; // Assuming userId is a property in the dataContext
  //     const isUserSuperAdmin =  this.apiService.accessManagementData?.isSuperAdmin
  //     let actions = '';

  //     if (isUserSuperAdmin === true || isAnchorTagged === false) {
  //       actions = [
  //         `<div id="edit-icon" class="fa fa-pencil pointer edit-icon" aria-hidden="true" title="Edit"></div>`,
  //         `<div id="delete-icon" class="fa fa-trash pointer delete-icon" aria-hidden="true" title="Delete"></div>`,
  //         `<div id="clone-icon" class="fa fa-clone pointer" aria-hidden="true" title="Clone"></div>`
  //       ].join(' ');

  //       // Add custom CSS class for spacing
  //       actions = `<div class="action-icons">${actions}</div>`;
  //     }
  //     // else if (isAnchorTagged === ''){
  //     //   return actions
  //     // }

  //     return actions;
  //   }


  // public slickGridActionColumnFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   // Function to check conditions for rendering the icons
  //   const shouldRenderIcons = (dataContext: any): boolean => {
  //     const isAnchorTagged = dataContext.isAnchorTagged;
  //     const isUserSuperAdmin = this.apiService.accessManagementData?.isSuperAdmin;
  //     return isUserSuperAdmin === true || isAnchorTagged === false;
  //   };

  //   const iconsToRender = (dataContext: any): string => {
  //     return [
  //       `<div id="edit-icon" class="fa fa-pencil pointer edit-icon" aria-hidden="true" title="Edit" style="color: blue;"></div>`,
  //       `<div id="delete-icon" class="fa fa-trash pointer delete-icon" aria-hidden="true" title="Delete" style="color: red;"></div>`,
  //       `<div id="clone-icon" class="fa fa-clone pointer" aria-hidden="true" title="Clone"></div>`
  //     ].join(' ');
  //   };

  //   const actions = shouldRenderIcons(dataContext) ? iconsToRender(dataContext) : '';

  //   // Add custom CSS class for spacing
  //   return actions ? `<div class="action-icons">${actions}</div>` : '';
  // };

  // public slickGridActionColumnWithoutCloneFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   // Function to check conditions for rendering the icons
  //   const shouldRenderIcons = (dataContext: any): boolean => {
  //     const isAnchorTagged = dataContext.isAnchorTagged;
  //     const isUserSuperAdmin = this.apiService.accessManagementData?.isSuperAdmin;
  //     return isUserSuperAdmin === true || isAnchorTagged === false;
  //   };

  //   const iconsToRender = (dataContext: any): string => {
  //     return [
  //       `<div id="edit-icon" class="fa fa-pencil pointer edit-icon" aria-hidden="true" title="Edit"></div>`,
  //       `<div id="delete-icon" class="fa fa-trash pointer delete-icon" aria-hidden="true" title="Delete"></div>`,
  //     ].join(' ');
  //   };

  //   const actions = shouldRenderIcons(dataContext) ? iconsToRender(dataContext) : '';

  //   // Add custom CSS class for spacing
  //   return actions ? `<div class="action-icons">${actions}</div>` : '';
  // };




  public draftFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.draft == 1 || dataContext.draft == true) {
      return `<div style="color:green">Active</div>`;
    }
    return `<div style="color:red">Inactive</div>`;
  };

  public ngProcessorFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isNgProcessor == 1) {
      return `<div>Yes</div>`;
    }
    return `<div>No</div>`;
  };

  public numberFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (value == null) {
      return `<div style="text-align:right">${""}</div>`;
    }
    return `<div style="text-align:right">${value}</div>`;
  };

  // Formatter function for text
  public textFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    return `<div style="text-align:left">${value}</div>`;
  };

  boldLastTwoRowsFormatter(row: number, cell: number, value: any, columnDef: any, dataContext: any): string {
    //const rowCount = dataContext.grid.getDataLength();
    console.log("dataContext.id % 2 === 1", dataContext.month);
    if (dataContext.month === 'Total' || dataContext.month === 'Average') {
      return `<b>${value}</b>`;
    }
    return value;
  }

  // public statusFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   if (dataContext.active == true) {
  //     return `<div style="color:green">Active</div>`;
  //   }
  //  return `<div style="color:red">Inactive</div>`;
  // };

  // public statusFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   if (dataContext.active == true) {
  //     return `<div style="color:green">Active</div>`;
  //   }
  //   return `<div style="color:red">Inactive</div>`;
  // };
  public authorizedRejectedFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.status_name === 'Authorized') {
      return `<div style="color:green">Authorized</div>`;
    }

    return `<div style="color:red">Rejected</div>`;
  };
  public approveRocord: Formatter = (row, cell, value, columnDef, dataContext) => {

    return `<div style="color:green;cursor: pointer;"><i class="fa fa-check-square"></i></div>`;
  };

  public originationFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isOrigination == true) {
      return `<div style="color:black">Origination</div>`;
    }
    return `<div style="color:black">Conditional</div>`;
  };
  public newPage: Formatter = (row, cell, value, columnDef, dataContext) => {
    return `<div style="color:blue; cursor: pointer;"><i class="fa fa-eye"></i></div>`;
  };

  public permissionIcon: Formatter = (row, cell, value, columnDef, dataContext) => {
    return `<div style="cursor: pointer;"><i class="fa fa-chain"></i></div>`;
  };

  public rejectIcon: Formatter = (row, cell, value, columnDef, dataContext) => {
    return `<div style="color:red;  cursor: pointer;"><i class="fa fa-close"></i></i></div>`;
  };

  public cloneIcon: Formatter = (row, cell, value, columnDef, dataContext) => {
    return `<div style="cursor: pointer;"><i id = "clone" title="Scorecard Clone" [matTooltip]="'Scorecard Clone'" style="font-size:15px" class="fa">&#xf24d;</i></div>`;
  };

  public draftIcon: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isDraft === true || dataContext.isDraft === 1) {
      return `<div style="cursor: pointer; color: red;cursor: pointer;
      position: relative;
      color: green;
      left: 20px;"><i class="material-icons">drafts</i></div>`;
    }
    return `<div style="cursor: pointer; color: green;cursor: pointer;
    position: relative;
    color: green;
    left: 20px;"><i class="material-icons">drafts</i></div>`;
  };

  // public toggleRowExpansionFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   return "<button class='expand-row'>+</button>";
  // };


  // **************** modal r&D *******************
  // public deleteModelDetails = {
  //   name: "yes",
  //   title: "Do you want to delete?",
  //   actionButtonText: "Yes",
  // }

  // public authorizeModelDetails = {
  //   name: "approveReject",
  //   title: "Do you want to authorize?",
  //   actionButtonText: "Yes",
  // }

  // public customDateFormatter: any = (row: any, cell: any, value: string | number | Date, columnDef: any, dataContext: any) => {
  //   return this.datePipe.transform(value, 'dd-MMM-yyyy hh:mm a');
  // }
  // public customDateFormatter_dd_MMM_yyyy: any = (row: any, cell: any, value: string | number | Date, columnDef: any, dataContext: any) => {
  //   return this.datePipe.transform(value, 'dd-MMM-yyyy');
  // }

  // public formatDateToDD_MMM_YYYY: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   var dateTime = Date.parse(value);
  //   var result = moment(dateTime);
  //   return result.format('DD-MMM-YYYY');
  // }

  // public formatDateToHH_MM_SS: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   var dateTime = Date.parse(value);
  //   var result = moment(dateTime);
  //   return result.format('HH:mm a');
  // }

  public hyperlinkFormatterWithLink: Formatter = (row, cell, value, columnDef, dataContext) => {
    return '<a href="' + "/" + '">' + value + '</a>';
  }

  public kycFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isKycReq === true) {
      return `<div>Yes</div>`;
    }
    else if (dataContext.isKycReq === false) {
      return `<div>No</div>`;
    }
    return `<div> </div>`;
  };

  public validTilDateFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.validTill === true) {
      return `<div>Yes</div>`;
    }
    else if (dataContext.validTill === false) {
      return `<div>No</div>`;
    }
    return `<div> </div>`;
  };

  public hasSubDocFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.hasSubDoc === true) {
      return `<div>Yes</div>`;
    }
    return `<div> </div>`;
  };

  public mandatoryFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.mandatory === true) {
      return `<div>Yes</div>`;
    }
    else if (dataContext.mandatory === false) {
      return `<div>No</div>`;
    }
    return dataContext.mandatory;
  };

  public button: Formatter = (row, cell, value, columnDef, dataContext) => {
    return '<button class="btn-brand-green" style="height: 100%;padding:0;margin:0;font-size:inherit; line-height: 1;">View Report</button>'
  };

  public addition: Formatter = (row, cell, value, columnDef, dataContext) => {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" style="cursor: pointer;position: relative;left: 48px;bottom: 5px;" width="16px" height="16px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>';
  };


  // public button: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   return `
  //   <button class="btn-icon">
  //   <i class="fa fa-download"></i>
  // </button>
  //   `;
  // }; 







  // public holidayDateFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   const date = new Date(value);
  //   const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  //   console.log("date",utcDate.toISOString().split('T')[0]);    
  //   return utcDate.toISOString().split('T')[0];
  // };

  public holidayDateFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    const inputDate = value + '.000';
    console.log("inputDate===", inputDate);
    const [year, month, day, hours, minutes, seconds] = inputDate.split(/[- :.]/);
    const date = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes), parseInt(seconds)));
    console.log("date======", date.toISOString()); // output: 2023-04-30T18:30:00.000Z
    const convertedDate = new Date(date);
    const utcDate = new Date(Date.UTC(convertedDate.getFullYear(), convertedDate.getMonth(), convertedDate.getDate(), convertedDate.getHours(), convertedDate.getMinutes(), convertedDate.getSeconds()));
    console.log("convertedDate======", utcDate.toISOString().split('T')[0]);
    return utcDate.toISOString().split('T')[0];
  };

  // public dateFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   console.log("valuevaluevaluevalue",value);

  //   if (!value) {
  //     return '';
  //   }
  //   const date = new Date(value);
  //   console.log("date",date);

  //   if (isNaN(date.getTime())) {
  //     return '';
  //   }
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const day = date.getDate().toString().padStart(2, '0');
  //   return `${day}-${month}-${year}`;
  // }

  /*   public dateFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
      console.log("valuevaluevaluevalue", value);
  
      if (!value) {
        return '';
      }
  
      let date;
  
      // Check if the value matches the 'YYYY-MM-DDTHH:mm:ss' format
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value)) {
        date = new Date(value);
        console.log("date inside yyy-mm-dd", date);
      }
      // Check if the value matches the 'DD-MM-YYYY HH:mm:ss' format
      else if (/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/.test(value)) {
        const [datePart, timePart] = value.split(' ');
        const [dayPart, monthPart, yearPart] = datePart.split('-');
        date = new Date(`${yearPart}-${monthPart}-${dayPart}T${timePart}`);
        console.log("date inside mm-dd-yyyy", date);
      } else {
        return ''; // Return empty string if the format is not recognized
      }
  
      console.log("date", date);
  
      if (isNaN(date.getTime())) {
        return '';
      }
  
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
  
      return `${day}-${month}-${year}`;
    }; */


  public dateFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    console.log("valuevaluevaluevalue", value);

    if (!value) {
      return '';
    }

    let date;

    // Check if the value matches the 'YYYY-MM-DDTHH:mm:ss' format
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value)) {
      date = new Date(value);
      console.log("date inside yyy-mm-dd", date);
    }
    // Check if the value matches the 'DD-MM-YYYY HH:mm:ss' format
    else if (/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/.test(value)) {
      const [datePart, timePart] = value.split(' ');
      const [dayPart, monthPart, yearPart] = datePart.split('-');
      date = new Date(`${yearPart}-${monthPart}-${dayPart}T${timePart}`);
      console.log("date inside mm-dd-yyyy", date);
    } else {
      return ''; // Return empty string if the format is not recognized
    }

    console.log("date", date);

    if (isNaN(date.getTime())) {
      return '';
    }

    const monthsAbbrev = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const year = date.getFullYear();
    const monthAbbrev = monthsAbbrev[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${day}-${monthAbbrev}-${year}`;

    return formattedDate;
  };



  // public titleCaseFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
  //   // console.log("titleCaseFormatter value", value);

  //   if (value && typeof value === 'string' && value.length > 0) {
  //     value = this.titleCasePipe.transform(value);
  //   }
  //   return value;
  // }

  public anchorTagFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    // console.log("anchorTagFormatter dataContext", dataContext);

    if (dataContext.isAnchorTagged === true) {
      return '<div class="fa fa-anchor" aria-hidden="true" title="Read Only"></div>';
    } else {
      return '';
    }
  };

  public anchorTagValueFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    // console.log("anchorTagFormatter dataContext", dataContext);

    if (dataContext.isAnchorTagged === true) {
      return '<div>Yes</div>';
    } else {
      return '<div>No</div>';
    }
  };

  public isDefaultValueFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    // console.log("anchorTagFormatter dataContext", dataContext);

    if (dataContext.isDefault === true) {
      return '<div>Yes</div>';
    } else {
      return '<div>No</div>';
    }
  };

  public masterViewFile: Formatter = (row, cell, value, columnDef, dataContext) => {
    const dmsPath = dataContext.outputFilePath;
    return `<a href="#/configuration-masters/file-upload-audit-log/list"">View File</a>`;
  };


  // console.log("anchorTagFormatter dataContext", dataContext);
  public hrsMinFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (value === null) {
      return '';
    }
    // Remove the minus sign (if present)
    const formattedValue = value.replace('-', '');

    // Split the duration into its components
    const [hours, minutes] = formattedValue.split(':');

    // Return the formatted string
    return `${hours}hours ${minutes}minutes`;
  };

  public usedUnusedFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isUsed === true) {
      return '<i class="fa fa-chain" title="Used"></i>';
    } else {
      return '<i class="fa fa-chain-broken" title="Unused"></i>';
    }
  };


  // slickGridActionColumnFormatterWithoutClone = (useTestCondition: boolean) => {
  //   return (row: number, cell: number, value: any, columnDef: Column<any>, dataContext: any) => {
  //     const isAnchorTagged = dataContext.isAnchorTagged; // Assuming isAnchorTagged is a property in the dataContext
  //     const userId = localStorage.userId; // Assuming userId is a property in the dataContext

  //     let actions = '';

  //     if ((useTestCondition && !isAnchorTagged) || (!useTestCondition && userId === '66cea40c-54d2-41ed-4db2-80346a613e97')) {
  //       actions = [
  //         `<div id="edit-icon" class="fa fa-pencil pointer edit-icon" aria-hidden="true" title="Edit"></div>`,
  //         `<div id="delete-icon" class="fa fa-trash pointer delete-icon" aria-hidden="true" title="Delete"></div>`,
  //       ].join(' ');

  //       // Add custom CSS class for spacing
  //       actions = `<div class="action-icons">${actions}</div>`;
  //     }

  //     return actions;
  //   };
  // };

  // slickGridActionColumnFormatterWithoutCloneAndDelete = (useTestCondition: boolean) => {
  //   return (row: number, cell: number, value: any, columnDef: Column<any>, dataContext: any) => {
  //     const isAnchorTagged = dataContext.isAnchorTagged; // Assuming isAnchorTagged is a property in the dataContext
  //     const userId = localStorage.userId; // Assuming userId is a property in the dataContext

  //     let actions = '';

  //     if ((useTestCondition && !isAnchorTagged) || (!useTestCondition && userId === '66cea40c-54d2-41ed-4db2-80346a613e97')) {
  //       actions = [
  //         `<div id="edit-icon" class="fa fa-solid  fa-upload pointer edit-icon" aria-hidden="true" title="Publish Workflow"></div>`,

  //       ].join(' ');

  //       // Add custom CSS class for spacing
  //       actions = `<div class="action-icons">${actions}</div>`;
  //     }

  //     return actions;
  //   }

  // }

  public statusFormatterYesOrNo: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isActive == 1 || dataContext.isActive == true) {
      return `<div>Yes</div>`;
    }
    return `<div>No</div>`;
  };

  yesNoFormatter = (key: string) => {
    return (row: number, cell: number, value: any, columnDef: Column<any>, dataContext: any) => {
      if (dataContext[key] == true || dataContext[key] == 1) {
        return `<div>Yes</div>`;
      } else if (dataContext[key] == false || dataContext[key] == 0) {
        return `<div>No</div>`;
      }
      return `<div></div>`;
    };
  };

  public statusFormatterPipeline: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isPipeline == 1 || dataContext.isPipeline == true) {
      return `<div>Yes</div>`;
    }
    return `<div>No</div>`;
  };

  public statusFormatterPrimaryContact: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isPrimaryContact == 1 || dataContext.isPrimaryContact == true) {
      return `<div>Yes</div>`;
    }
    return `<div>No</div>`;
  };

  public statusFormatterEmailRecipient: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (dataContext.isEmailRecipient == 1 || dataContext.isEmailRecipient == true) {
      return `<div>Yes</div>`;
    }
    return `<div>No</div>`;
  };


  // public generateSlickGridActionColumnFormatter(iconNames: any) {

  //   // Mapping from custom names to FontAwesome class names
  //   const customToFontAwesomeMap: { [key: string]: string } = {
  //     'edit': 'fa-pencil',
  //     'delete': 'fa-trash',
  //     'clone': 'fa-clone',
  //     'preview': 'fa-eye',
  //     'test': 'fa-flask fa-lg',
  //     'role': 'fa-sitemap'
  //     // Add more mappings as needed
  //   };

  //   // Translate custom names to FontAwesome class names
  //   const translatedIconNames = iconNames.map((customName: string) => {
  //     return customToFontAwesomeMap[customName] || customName;
  //   });

  //   return (row: any, cell: any, value: any, columnDef: any, dataContext: any) => {
  //     const shouldRenderIcons = (dataContext: any) => {
  //       const isAnchorTagged = dataContext.isAnchorTagged;
  //       const isUserSuperAdmin = this.apiService.accessManagementData?.isSuperAdmin;
  //       return isUserSuperAdmin === true || (isAnchorTagged && isAnchorTagged === false) || (!isAnchorTagged);     // Added condition so actions are now visible to all users
  //     };

  //     const iconIdMap: { [key: string]: string } = {
  //       'fa-pencil': 'edit-icon',
  //       'fa-trash': 'delete-icon',
  //       'fa-clone': 'clone-icon',
  //       'fa-eye': 'preview-icon',
  //       'fa-flask fa-lg': 'test-scorecard-icon',
  //       'fa-sitemap': 'role-icon'
  //       // Add more mappings as needed
  //     };

  //     // const renderIcon = (iconName: any) => {
  //     //   const iconId = iconIdMap[iconName] || `${iconName}-icon`;
  //     //   return `<div id="${iconId}" class="fa ${iconName} pointer" aria-hidden="true" title="${iconName}"></div>`;
  //     // };

  //     /* const renderIcon = (iconName: any) => {
  //       const iconId = iconIdMap[iconName] || `${iconName}-icon`;
  //       let title = iconName; // Default title is the icon name
      
  //       // Customize titles based on icon names
  //       if (iconName === 'fa-pencil') {
  //         title = 'Edit';
  //       } else if (iconName === 'fa-trash') {
  //         title = 'Delete';
  //       } else if (iconName === 'fa-clone') {
  //         title = 'Clone';
  //       }else if(iconName === 'fa-clone'){
  //         title = 'Preview';
  //       }else if(iconName==='fa-flask fa-lg'){
  //         title = 'Test scorecard'
  //       }
        
  //       return `<div id="${iconId}" class="fa ${iconName} pointer" aria-hidden="true" title="${title}"></div>`;
  //     }; */
  //     const renderIcon = (iconName: any) => {
  //       const iconId = iconIdMap[iconName] || `${iconName}-icon`;
  //       let title = iconName; // Default title is the icon name
  //       let colorClass = ''; // Default color class is empty

  //       // Customize titles and color classes based on icon names
  //       if (iconName === 'fa-pencil') {
  //         title = 'Edit';
  //         colorClass = 'blue-icon'; // Add a custom class for blue color
  //       } else if (iconName === 'fa-trash') {
  //         title = 'Delete';
  //         colorClass = 'red-icon'; // Add a custom class for red color
  //       } else if (iconName === 'fa-clone') {
  //         title = 'Clone';
  //       }
  //       else if (iconName === 'fa-eye') {
  //         title = 'Preview';
  //       }
  //       else if (iconName === 'fa-flask fa-lg') {
  //         title = 'Scorecard Test';
  //       }else if(iconName === 'fa-sitemap'){
  //         title = 'Role Config'
  //       }

  //       return `<div id="${iconId}" class="fa ${iconName} pointer ${colorClass}" aria-hidden="true" title="${title}"></div>`;
  //     };

  //     const iconsToRender = (iconNames: any) => {
  //       return iconNames.map(renderIcon).join(' ');
  //     };

  //     const actions = shouldRenderIcons(dataContext) ? iconsToRender(translatedIconNames) : '';

  //     return actions ? `<div class="action-icons">${actions}</div>` : '';
  //   };
  // }

  lockUnlockFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    console.log("insode lock icon formatter");
    const isLocked = dataContext.isLocked;
    const icon = isLocked ? '<i class="fa fa-lock" title="Locked"></i>' : '<i class="fa fa-unlock" title="Unlocked"></i>';
    return icon;
  };

  emailFormatter: Formatter = (row, cell, value, columnDef, dataContext) => {
    if (value) {
      return `<a href="mailto:${value}" target="_blank">${value}</a>`;
    }
    return '';
  }

  // amountFormatter = (row: number, cell: number, value: any, columnDef: Column) => {
  //   let amount = this.amountFormatPipe.transform(value, false)
  //   if (amount === null || amount === undefined) {
  //     return `<div style="text-align:right">${0}</div>`
  //   }
  //   else {
  //     return `<div style="text-align:right">${amount}</div>`
  //   }


  // };
  public DownloadFormatter: Formatter = (row, cell, value, columnDef, dataContext, grid) => {
    if (value && value.pdfUrl) {
      return `<a href="${value.pdfUrl}" download><i class="fa fa-file-pdf-o"></i> Download PDF</a>`;
    }
    return '';
  };

  public deliveryVolumeFormatter: Formatter = (row, cell, value) => {
    if (value) {
      return value + 'v';
    }
    return '';
  };
  

  trueFalseToYesNoFormatter = (row: number, cell: number, value: any, columnDef: Column) => {
    if (value === true) {
      return 'Yes';
    } else if (value === false) {
      return 'No';
    } else {
      return ''; // Handle other cases as needed
    }

  }

}
