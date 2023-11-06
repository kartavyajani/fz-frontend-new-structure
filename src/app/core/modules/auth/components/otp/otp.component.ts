import { Component, OnInit } from '@angular/core';
 import { NgxOtpInputConfig } from 'ngx-otp-input';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  otpValue: string = ''; // Store the OTP input

  constructor() {}

  ngOnInit(): void {}

  handeOtpChange(value: string[]): void {
    // Handle OTP input changes
   // Update the OTP value
  }

  handleFillEvent(value: string): void {
    console.log(value);
    this.otpValue = value; 
  }

  submitOtp(): void {
    // Handle OTP submission
    console.log('Submitted OTP:', this.otpValue);
    

    // You can now send the OTP value to your server or perform other actions here.
  }
}
