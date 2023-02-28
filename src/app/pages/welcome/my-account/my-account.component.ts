import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  
  user  = new User();
  retUrl!: string | null;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  token!: string;
  tokenInfo: any;
  userDetails!: any;


  constructor(private fb: UntypedFormBuilder,  private router : Router,
    private authService: AuthService, private route : ActivatedRoute,
    public jwtHelper : JwtHelperService,
    private notification : NzNotificationService, private guard: AuthGuard){}
   
  
    ngOnInit(): void {
this.UseDet();
     }


  UseDet(){
    this.userDetails=JSON.parse(sessionStorage.getItem('user') ?? '{}')  
    this.userDetails.username
  }
     
     
     }



