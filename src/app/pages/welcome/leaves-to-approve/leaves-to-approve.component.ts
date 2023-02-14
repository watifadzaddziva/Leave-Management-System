import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EmployeeLeave } from '../models/employee-leave';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-leaves-to-approve',
  templateUrl: './leaves-to-approve.component.html',
  styleUrls: ['./leaves-to-approve.component.css']
})
export class LeavesToApproveComponent implements OnInit {

  data!: any;
  employeeLeave !:  EmployeeLeave;
  id!: number;

  constructor(private fb: UntypedFormBuilder,
    private defaultService: DefaultService,
   private notification : NzNotificationService,
    private router: Router ) {}




  ngOnInit(): void {
    this.getAllPendingLeaves();
  }



  approveLeave(id: number){
    this.defaultService.approveLeave(id,this.employeeLeave).subscribe(res=>{
     this.notification.success("leave have been approved ","")
     this.ngOnInit();
    })
  }

  rejectLeave(id: number): void {
    this.defaultService.rejectLeave(id,this.employeeLeave).subscribe(res=>{
      this.notification.error("leave have been rejected ","")
      this.ngOnInit();
     })
  }

  getAllPendingLeaves(){
this.defaultService.getAllAppliedLeaves().subscribe((res)=>{
  this.data = res
  console.log(this.data)
})
  }



}
