import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-leaves-to-approve',
  templateUrl: './leaves-to-approve.component.html',
  styleUrls: ['./leaves-to-approve.component.css']
})
export class LeavesToApproveComponent implements OnInit {

  data!: any;

  constructor(private fb: UntypedFormBuilder,
    private defaultService: DefaultService,
   private notification : NzNotificationService,
    private router: Router ) {}




  ngOnInit(): void {
    this.getAllPendingLeaves();
  }



  approveLeave(){
    // this.employeeService.updateEmployee(this.employee, this.id).subscribe(res=>{
    //   console.log(res);
    //   this.toggle(true);
    //    this.load();
    // })
  }

  rejectLeave(id: number): void {
    // this.employeeService.deleteEmployee(id).subscribe((res) => {
    //   this.notification.success("", "employee deleted successfully")
    //   this.load();
    // });
  }

  getAllPendingLeaves(){
this.defaultService.getAllAppliedLeaves().subscribe((res)=>{
  this.data = res.content
})
  }



}
