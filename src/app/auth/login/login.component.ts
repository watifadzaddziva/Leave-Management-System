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
  returnUrl: any;
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
    console.log(this.user)
    this.authService.loginUserFromServer(this.user).subscribe((data )=>{
    let tok= data.token;
    let userData: {};
    userData=data
    this.authService.setToken(tok)
    sessionStorage.setItem('user_data', JSON.stringify((userData)))
    this.router.navigate(['/welcome']); 
    }, (error: HttpErrorResponse) => {
      this.authService.clearToken();
      this.notification.error('','Bad Credentials')
      // if (error.status == 401)
      // setTimeout(() => location.reload(), 3000);
    });
   }


    
   }

    
  
