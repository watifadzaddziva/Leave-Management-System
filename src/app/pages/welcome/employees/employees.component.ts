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
  id!: Employee;

  constructor(private defaultService: DefaultService, private router : Router,
    private injector: Injector, private nzMessageService: NzMessageService) {
  }

  ngOnInit(): void {
    this.load();
   
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


