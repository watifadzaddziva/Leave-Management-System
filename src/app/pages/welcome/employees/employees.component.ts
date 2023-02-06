import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  employe={} as Employee; 
  id!: number;
  fileList: any = [];
  pageIndex!: number;
    pageSize!: number;
    sortField!: string | null;
    sortOrder!: string | null;

  constructor(private fb: UntypedFormBuilder, private employeeService: DefaultService,
    private notification: NzNotificationService, private http: HttpClient,
    private router: Router)
    {
     
    }

  ngOnInit(): void {

    this.load();
    this.getform()


     this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);
    
  }

  getform() {
    this.employeeForm = this.fb.group({
      firstName: [this.employee.firstName, [Validators.required, ]],
      lastName: ['', [Validators.required,]],
      gender: ['', [Validators.required, ]],
      dateOfBirth: ['', [Validators.required,  ]],
      email: ['', [Validators.email, Validators.required]],
     
  
     })
  }

  submitForm(){
    console.log(this.employee);
    
   !this.employee.id ? this.employeeService.createEmployee(this.employeeForm.value).subscribe((res)=>{
      this.notification.success("", "employee added successfully")
      console.log(res);
      this.toggle(false);
      this.fileList = []
      this.getform()
      this.load();

}): this.http.put(`http://192.168.10.146:8080/employee/update/${this.employee.id}`, this.employeeForm.value).subscribe
    (res=>{
  console.log(this.employee);

  this.notification.success("", "employee updated successfully")
  console.log(res);
  this.toggle(false);
   this.load();

    // this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(res=>{
    //   console.log(this.employee);

    //   this.notification.success("", "employee updated successfully")
    //   console.log(res);
    //   this.toggle(false);
    //    this.load();
    })
  }
  
edit(employee: Employee){
this.employee = employee
console.log(this.employee)
this.toggle(true)
}


  toggle(visible: boolean): void {
    this.visible = visible;
  }

  load(){
    this.employeeService.getAllEmployees().subscribe((res)=>{
     this.allEmployees = res.content
    })
  }


  confirm(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.notification.success("", "employee deleted successfully")
      this.load();
    });
  }

  getEmployeeById(id:number){
this.router.navigate(['employee-details', id])
  }


}
