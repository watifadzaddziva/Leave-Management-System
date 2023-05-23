import { Component, OnInit } from '@angular/core';
import { Roles } from './models/roles';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isCollapsed = false;
  user!:string;
  first_name!:string;

  constructor(private authService: AuthService, private router:Router,private permissionsService: NgxPermissionsService) {
   
   }

  ngOnInit() {
if (this.authService.isAuthenticated()) {
    this.authService.setTokenPayload();
    this.user = this.authService.tokenPayload?.sub;
  }

  }



  logout(){
    window.location.href='/'
    sessionStorage.clear();
  
  }
}
