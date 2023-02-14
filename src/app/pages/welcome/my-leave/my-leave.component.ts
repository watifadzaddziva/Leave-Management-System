import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit{

  data!: any;

constructor(private defaultService: DefaultService){}


  ngOnInit(): void {
this.getAllLeaves();
 }

 getAllLeaves(){
  this.defaultService.getAllLeaves().subscribe((res)=>{
    this.data = res
  })
 }
}
