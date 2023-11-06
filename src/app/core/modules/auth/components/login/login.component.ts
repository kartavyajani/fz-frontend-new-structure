import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  masterForm!: FormGroup;
  loading = false;
  userData: any = [];

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    localStorage.clear();

    sessionStorage.clear();
    this.masterForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      clientid: ['', Validators.required],
    
    });

    // this.masterForm.valueChanges
    //   .pipe(
    //     map((values) => {
    //       // Modify the values as needed
    //       const modifiedValues = { ...values };
    //       modifiedValues.captcha = modifiedValues.captcha.toUpperCase();
    //       return modifiedValues;
    //     })
    //   )
    //   .subscribe((modifiedValues) => {
    //     this.masterForm.patchValue(modifiedValues, { emitEvent: false });
    //   });

    // // Add event listener for Enter key press
    // const formElement = document.getElementById('login-form');
    // formElement?.addEventListener('keydown', (event) => {
    //   if (event.key === 'Enter' && this.masterForm.valid) {
    //     this.submit();
    //   }
    // });
  }
  
  isFieldInvalid(field: string) {

    return (
      (!this.masterForm.get(field)?.valid && this.masterForm.get(field)?.touched)
    );
  }
  submit1(){
    console.log("hey");
    
  }
  async submit() {
    console.log('form value: ', this.masterForm.value);
    console.log('this.masterForm.valid: ', this.masterForm.valid);

    if (
      this.masterForm.value.userName != null &&
      this.masterForm.value.password != null &&
      this.masterForm.value.clientid != null
    ) {
      // if (this.captcha !== this.masterForm.get('captcha')?.value) {
      //   // this.notifyService.showError(this.commonMessages.INVALID_CAPTCHA, '');
      //   this.captchaComponent.createCaptcha()
      //   this.masterForm.get('captcha')?.setValue('')
      //   this.masterForm.get('captcha')?.markAsUntouched()
      //   console.log("invalid captcha");
      //   this.invalidCaptchaMessage = "Invalid CAPTCHA";
      //   return
      // }

      this.loading = true;

      const loginPayload = {
        userName: this.masterForm.get('userName')?.value,
        password: this.masterForm.get('password')?.value,
        authenticationType: 'database',
        // "deviceType": this.authFacade.getDeviceInfo()
      };

      console.log('loginPayload: ', loginPayload);

      // const casLoginRes: any = await this.authFacade.doLogin(loginPayload);

      // console.log("casLoginRes: ", casLoginRes);

      // if (_.has(casLoginRes, 'error')) {

      //   const errorMsg = casLoginRes['error_description']

      //   console.log('error message: ', errorMsg);

      //   this.notifyService.showError(errorMsg, "")
      //   this.loading = false;
      //   return
      // }

      // TODO: Need to think on the setting the access management parameter
      // sessionStorage.setItem('userName', casLoginRes.roles[0].userName);
      // sessionStorage.setItem('roleName', casLoginRes.roles[0].roleName);
      // sessionStorage.setItem('roleId', casLoginRes.roles[0].roleId);
      // localStorage.setItem('roles', JSON.stringify(casLoginRes.roles));
      // localStorage.setItem('token', casLoginRes.access_token);
      // localStorage.setItem('userId', casLoginRes.roles[0].userId);
      // localStorage.setItem('branchId', casLoginRes.roles[0].branch_id);
      // localStorage.setItem('parent_branch_id', casLoginRes.roles[0].parent_branch_id);

      this.loading = false;

      // Navigating To Dashboard
      this.router.navigate(['otp']);
    }
  }
}
