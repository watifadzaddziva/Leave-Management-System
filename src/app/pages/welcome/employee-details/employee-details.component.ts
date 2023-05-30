import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee!: Employee;
  allEmployees !: any;
 employeeDetails!: any;

  constructor(private employeeService: DefaultService, private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee= new Employee();
    this.employeeService.getAllEmployees().subscribe(
      (data)=>{
       this.allEmployees= data.content
       this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employeeDetails=data
  
      })
      });
    
   
  }



}
