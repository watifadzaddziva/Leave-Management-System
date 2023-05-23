import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../services/default.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit{

  leaves!: any;
  leave:any;
  status!: any;
  employee  ={}

constructor(private defaultService: DefaultService, private notification:NzNotificationService){}


ngOnInit(): void {
  const userId=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
  const id= userId.user.employee.id
  console.log(id)
  this.defaultService.getMyLeaves(id).subscribe(res=>{
    this.leaves=res;
    console.log(res)
  },error=>{
    this.notification.error('Error while fetching user leaves','')
  })
 }

getMyLeaves(){
  const userId=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
  const id= userId.user.id
  console.log(id)
  this.defaultService.getMyLeaves(id).subscribe(res=>{
    this.leaves=res;
    console.log(res)
  },error=>{
    this.notification.error('Error while fetching user leaves','')
  })
   
}

confirm(id: number): void {
  // this.defaultService.deleteEmployee(id).subscribe(() => {
  //   this.nzMessageService.info('employee has been deleted');
  //   this.load();
  // });
}

load( event?: number): void {
  // this.defaultService.getAllEmployees().subscribe((res)=>{
  //   this.employees= res.content
  //  })
}

reload(event : any){
  this.load(event)
  this.employee = {}
}

}
