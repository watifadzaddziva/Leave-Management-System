import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  user!:string;

constructor(private authService: AuthService,private permissionsService:NgxPermissionsService,public responsive:BreakpointObserver){

}

ngOnInit(){
 if(this.authService.isAuthenticated()){
  this.user = this.authService.tokenPayload?.sub;
  this.authService.setTokenPayload();
 }

 this.responsive.observe([Breakpoints.HandsetPortrait]).subscribe((state:BreakpointState)=>{
  if(state.matches){
    console.log('hellow')
  }
 })
}



}
