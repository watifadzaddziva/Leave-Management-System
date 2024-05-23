import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  
  user  = new User();
  userInfo:any;
  retUrl!: string | null;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  token!: string;
  tokenInfo: any;
  employeeDetails!: any;
  id!: number;


  constructor(private fb: UntypedFormBuilder,  private router : Router,
    private authService: AuthService, private route : ActivatedRoute,
    public jwtHelper : JwtHelperService,
    private defaultService:DefaultService,
    private notification : NzNotificationService, private guard: AuthGuard){}
   
  
    ngOnInit(): void {
this.UseDet();
this.empDetails();
     }


  UseDet(){ 
      // const tokenData=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
      // this.userInfo=tokenData.user
      // const id= tokenData.user.employee.id
      // this.defaultService.getRemainingLeaveDays(id).subscribe((res)=>{
      // this.userDetails=res
      // },error=>{
      //   this.notification.error("Error while fetching employee leaves","")
      // })
  }

  empDetails(){
      const tokenData=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
      this.userInfo=tokenData.user
      const id= tokenData.user.employee.id
    this.defaultService.getEmployeeById(id).subscribe(data=>{
     this.employeeDetails=data;
   });
}
  }
     
     
     



