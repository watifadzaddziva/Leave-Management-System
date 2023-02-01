import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Employee } from '../models/employee';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  visible = false;
  employee = new Employee();
  employeeForm!: FormGroup
  allEmployees!: any;
  maxDate!: Date;
  date!: Date;
  id!: number;

  constructor(private fb: UntypedFormBuilder, private employeeService: DefaultService,
    private notification: NzNotificationService)
    {
     
    }

  ngOnInit(): void {

    this.load();

    this.employeeForm = this.fb.group({
      firstName: [null, [Validators.required, ]],
      lastName: [null, [Validators.required,]],
      gender: [null, [Validators.required, ]],
      dateOfBirth: [null, [Validators.required,  ]],
      email: [null, [Validators.email, Validators.required]],
     
  
     })
     this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);
    
  }

  submitForm(){
    this.employeeService.createEmployee(this.employee).subscribe((res)=>{
      this.notification.success("", "employee added successfully")
      console.log(res)
    })
  }


  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  load(){
    this.employeeService.getAllEmployees().subscribe((res)=>{
     this.allEmployees = res
    })
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee, this.id).subscribe(res=>{
      console.log(res)
       this.load();
    })
  }

  confirm(data: any): void {
    this.employeeService.deleteEmployee(data).subscribe((res) => {
      this.load();
    });
  }



}
