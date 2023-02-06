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



  constructor(private employeeService: DefaultService, private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee= new Employee();

    
   
  }

}
