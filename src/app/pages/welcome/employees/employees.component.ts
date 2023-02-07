import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Employee } from '../models/employee';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees!: any;
  page = 1;
  baseUrl!: string;
  visible!: boolean;
  employee  ={}
  viewId !: any;

  constructor(private defaultService: DefaultService, 
    private injector: Injector, private nzMessageService: NzMessageService) {
  }

  ngOnInit(): void {
    this.getEmployees();
    this.load();
   
  }

  getEmployees(): void {
   this.defaultService.getAllEmployees().subscribe((res)=>{
    this.employees= res.content
   })
  }

 

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  load( event?: number): void {
    this.defaultService.getAllEmployees().subscribe((res)=>{
      this.employees= res.content
     })
  }

  reload(event : any){
    this.load(event)
    this.employee = {}
  }

  confirm(id: number): void {
    this.defaultService.deleteEmployee(id).subscribe(() => {
      this.nzMessageService.info('employee has been deleted');
      this.getEmployees();
      this.load();
    });
  }

  
}


export interface Audit {
  createdDate: string;
  modifiedDate: string;
  createdBy?: any;
  modifiedBy?: any;
}

export interface Employees {
  id: number;
  firstname: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  audit: Audit;
}



//   confirm(id: number): void {
//     this.employeeService.deleteEmployee(id).subscribe((res) => {
//       this.notification.success("", "employee deleted successfully")
//       this.load();
//     });
//   }

//   getEmployeeById(id:number){
// this.router.navigate(['employee-details', id])
//   }



