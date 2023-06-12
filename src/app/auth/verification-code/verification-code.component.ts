import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent implements OnInit{
  passwordVisible = false;
  
  ngOnInit(): void {
   this.form= this.fb.group({
    code:['', [Validators.required]],
    newPassword:['', [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
    confirmPassword:['', [Validators.required, this.confirmationValidator]],

   })
  }
form !: FormGroup;
constructor(private fb:UntypedFormBuilder,private router:Router,
  private authService:AuthService,private notification:NzNotificationService){}

  
  submitForm() {
    this.authService.setNewPassword(this.form.value).subscribe((res) => {
      this.notification.success("Password changed successfully", "");
      this.router.navigate(['/login']);
    }, error => {
    
        this.notification.error('Error', 'Invalid Verification Code');
    
    });
  }
  
  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls['newPassword'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.form.controls['confirmPassword'].updateValueAndValidity());
  }

  togglePasswordVisibility(){
    this.passwordVisible=!this.passwordVisible;
  }

}
