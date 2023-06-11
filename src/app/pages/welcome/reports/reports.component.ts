import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent  implements OnInit{

  data!: any
  name!: any
  rejected!: any;
  approved!: any;
  pending!: any;
  employees!: any;
  allLeaves!: any;
  allEmployees!: any;
constructor(private defaultService: DefaultService){}

  ngOnInit(): void {
 
  }


getLeaves(){
this.defaultService.getTotalLeaves().subscribe((res)=>{
  this.allLeaves=res
})
  }
getPending(){
this.defaultService.getTotalPending().subscribe((res)=>{
  this.pending = res
})
}

getApproved(){
  this.defaultService.getTotalApproved().subscribe((res)=>{
    this.approved= res
  })
}

getRejected(){
  this.defaultService.getTotalRejected().subscribe((res)=>{
    this.rejected = res
  })
}

load( event?: number): void {
  this.defaultService.getTotalEmployees().subscribe((res)=>{
    this.employees= res
   })
}


}