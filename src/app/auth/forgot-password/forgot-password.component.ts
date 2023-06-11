import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form!: FormGroup

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
       })}

  constructor (private authService:AuthService,private fb:FormBuilder,private router:Router,private notification:NzNotificationService){}

  submitForm(): void{
  if(this.form.value){
  this.authService.sendPasswordResetEmail(this.form.value).subscribe(res=>{
  this.notification.success("Verification code has been successfully sent to your email","")
  this.router.navigate(['/verify-password'])
},error=>{
  if (error && error.error && error.error.message) {
    this.notification.error('Error', error.error.message);
  }
});
  }else{
    this.notification.error("Error while sending the email",'')
  }
}
}
