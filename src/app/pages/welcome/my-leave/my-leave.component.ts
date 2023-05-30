import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../services/default.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

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

constructor(private defaultService: DefaultService, private notification:NzNotificationService
  ,private router: Router,private authService:AuthService,private nzMessageService: NzMessageService){}


ngOnInit(): void {
 this.load();   
  }

  

load(event?:number):void{
  const tokenData=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
  const id = tokenData.user.employee.id;
  this.defaultService.getMyLeaves(id).subscribe(res=>{
    this.leaves=res;
    console.log(res)
  },error=>{
    this.notification.error('Error while fetching user leaves','')
  })
   
}

confirm(id: number,leaveId:number): void {
  this.defaultService.cancelLeave(id,leaveId).subscribe(() => {
    this.nzMessageService.info('leave has been deleted');
    this.load();
  });
}

reload(event : any){
  this.load(event)
  this.leave = {}
}

}
