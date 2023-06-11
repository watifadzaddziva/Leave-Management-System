import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  user = new User();
  passwordVisible = false;
  registrationForm!: FormGroup

  constructor(private fb: UntypedFormBuilder,
     private authService: AuthService,
    private notification : NzNotificationService,
     private router: Router ) {}

  ngOnInit(): void {
   this.registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required,Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
    checkPassword: ['', [Validators.required, this.confirmationValidator]],
   })
  }


  submitForm() {
    if (this.registrationForm.valid) {
      this.authService.registerUserFromServer(this.user).subscribe((res) => {
        this.notification.success("Registered Successfully", "");
        this.router.navigate(['/login']);
      }, error => {
        if (error && error.error && error.error.message) {
          this.notification.error('Error', error.error.message);
        }
      });
    } else {
      Object.values(this.registrationForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.registrationForm.controls['checkPassword'].updateValueAndValidity());
  }

  togglePasswordVisibility(){
    this.passwordVisible=!this.passwordVisible;
  }


  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registrationForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.registrationForm.reset();
    for (const key in this.registrationForm.controls) {
      if (this.registrationForm.controls.hasOwnProperty(key)) {
        this.registrationForm.controls[key].markAsPristine();
        this.registrationForm.controls[key].updateValueAndValidity();
      }
    }
  }


}
