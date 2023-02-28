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
  retUrl!: string | null;
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
    if (sessionStorage.getItem('refresh-session'))
      sessionStorage.removeItem('refresh-session');

      this.route.queryParamMap.subscribe(params=>{
        const login = params.get('retUrl')
      })
   }

  submitForm() {
    console.log(this.user)
    this.authService.loginUserFromServer(this.user).subscribe((data )=>{

      sessionStorage.setItem('token',data.message)
      sessionStorage.setItem('user',JSON.stringify(data));
      this.authService.saveToken('token')
        
        // const tokn= this.jwtHelper.decodeToken(AuthService.TOKEN)
        // console.log(tokn)
        // console.log(this.authService.isLoggedIn)
        // sessionStorage.setItem('user', JSON.stringify((data)))
        // console.log()
       
        this.router.navigate(['/welcome']);
       
    }, (error: HttpErrorResponse) => {
      this.authService.clearToken();
      this.notification.error('','bad credentials')
      if (error.status == 401)
      setTimeout(() => location.reload(), 3000);
    });
   }


    
   }

    
  
