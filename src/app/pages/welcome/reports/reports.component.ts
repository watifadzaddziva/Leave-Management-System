import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent  implements OnInit{

  data!: any
  rejected!: any;
  approved!: any;
  pending!: any;
  employees!: any;
constructor(private defaultService: DefaultService){}

  ngOnInit(): void {
    this.load();
    this.getApproved();
    this.getPending();
    this.getRejected();
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
  this.defaultService.getAllEmployees().subscribe((res)=>{
    this.employees= res.count
    console.log(this.employees)
   })
}

}
