import { Component, Input, OnInit } from '@angular/core';
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
  @Input() leaveToApproveCountChange!: number;
  user!:string;
  first_name!:string;

  constructor(private authService: AuthService, private router:Router,private permissionsService: NgxPermissionsService) {
   
   }

   openMap:{[name:string]:boolean}={
    sub:false
   }

  ngOnInit() {

if (this.authService.isAuthenticated()) {
    this.authService.setTokenPayload();
    this.user = this.authService.tokenPayload?.sub;
  }

  }
  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }


  logout(){
    window.location.href='/'
    sessionStorage.clear();
  
  }
}
