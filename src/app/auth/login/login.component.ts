import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  user  = new User();
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


constructor(private fb: UntypedFormBuilder,  private router : Router,
  private authService: AuthService, private route : ActivatedRoute,
  private notification : NzNotificationService, private guard: AuthGuard){}
 

  ngOnInit(): void {
    this.authService.clearToken();
    if (sessionStorage.getItem('refresh-session'))
      sessionStorage.removeItem('refresh-session');
    
   }

  submitForm() {
    console.log(this.user)
    this.authService.loginUserFromServer(this.user).subscribe((data )=>{
      if (data.message) {
        this.authService.saveToken(data.message);
        
        let returnUrl = `${this.route.snapshot.queryParams['returnUrl']}`;
        returnUrl = returnUrl !== 'undefined' ? returnUrl : ''
        //  location.href = this.route.snapshot.queryParams['/welcome']
         location.href = returnUrl?returnUrl:'/';

        return;
      }
      this.notification.warning("error", "error");
    }, (error: HttpErrorResponse) => {
      this.authService.clearToken();
      if (error.status == 401)
      setTimeout(() => location.reload(), 3000);
    });
    //  this.router.navigate(['/welcome']);
    //  console.log(data);
    // },
    // error => {
    //   this.notification.error("Bad credentials","please  enter valid username and password")
      
  
    //
   }
    
   }
    
  


