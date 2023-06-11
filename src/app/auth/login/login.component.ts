import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  user  = new User();
  view!: boolean;
  returnUrl: any;
  passwordVisible: boolean = false;;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  token!: string;
  tokenInfo: any;



constructor(private fb: UntypedFormBuilder,  private router : Router,
  private authService: AuthService, private route : ActivatedRoute,
  public jwtHelper : JwtHelperService,
  private notification : NzNotificationService, private guard: AuthGuard){}
 

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
   }

  submitForm() {
    this.authService.loginUserFromServer(this.user).subscribe((data )=>{
    let tok= data.token;
    let userData: {};
    userData=data
    this.authService.setToken(tok)
    sessionStorage.setItem('user_data', JSON.stringify((userData)))
    this.router.navigate(['/welcome']); 
    }, (error: HttpErrorResponse) => {
      this.authService.clearToken();
      if (error.status == 401 || error.status==400){
        this.notification.error('Incorrect Username or Password','')
      }else{
        this.notification.error('Server Unavailable: Please try again later','')
      }

    });
   }
   togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleView() {
    this.view = !this.view;
  }

    
   }

    
  
