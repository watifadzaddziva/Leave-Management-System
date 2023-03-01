import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService,  } from 'src/app/services/auth.service';
import { EmployeeLeave } from '../models/employee-leave';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{
  leaveForm!: FormGroup;
  id!: any;
  employee  ={}
  applyLeave = new EmployeeLeave();
  employees: any;
  filelist!: any;

  data= 
  [
    {leaveType: 'Vacation',type: 'success', defaultDays: 22},
    {leaveType: 'Unpaid Leave', type: 'error',  defaultDays: 365},
    {leaveType: 'Sick Leave',type: 'warning', defaultDays: 10}
  ]


  constructor(private fb: UntypedFormBuilder,
    private defaultService: DefaultService,
   private notification : NzNotificationService,
   private jwtHelper: JwtHelperService,
    private router: Router ) {}

  ngOnInit(): void {

    this.leaveForm = this.fb.group({
    fromDate: ['', [Validators.required, ]],
    toDate: ['', [Validators.required, ]],
    leaveType: ['', [Validators.required,]],
    reason: ['', [Validators.required, ]],


   })

 
  }

  submitForm(){

    if (this.leaveForm.valid) {
      const dataToSend= this.leaveForm.value;
      const tokenData=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
      dataToSend.employeeId= tokenData.user.employee.id

      
       var svc; 
      svc = this.defaultService.applyForLeave(dataToSend);
      svc.subscribe(res => {
        this.notification.success('Saved', 'leave application Succescfully!', { nzDuration: 10000 });
        console.log(res);
        this.filelist=[];
        this.leaveForm.reset();
        
      });
    }
  }
  
   
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.leaveForm.reset();
    for (const key in this.leaveForm.controls) {
      if (this.leaveForm.controls.hasOwnProperty(key)) {
        this.leaveForm.controls[key].markAsPristine();
        this.leaveForm.controls[key].updateValueAndValidity();
      }
    }
  }

  

  

  

}
