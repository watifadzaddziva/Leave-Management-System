import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router ) {}

  ngOnInit(): void {
    this.load();

    this.leaveForm = this.fb.group({
    fromDate: ['', [Validators.required, ]],
    toDate: ['', [Validators.required, ]],
    employeeId: ['', [Validators.required]],
    leaveType: ['', [Validators.required,]],
    reason: ['', [Validators.required, ]],


   })

 
  }

  submitForm(){

    if (this.leaveForm.valid) {
      var svc; 
      svc = this.defaultService.applyForLeave( this.applyLeave);
      svc.subscribe(res => {
        this.notification.success('Saved', 'leave application Succescfully!', { nzDuration: 10000 });
        console.log(res);
        this.filelist=[];
        
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

  

  load( event?: number): void {
    this.defaultService.getAllEmployees().subscribe((res)=>{
      this.employees= res.content;
      console.log(this.employees)
     })
  }

  reload(event : any){
    this.load(event)
    this.employee = {}
  }


}
