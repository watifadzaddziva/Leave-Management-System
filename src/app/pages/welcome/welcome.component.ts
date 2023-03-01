import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isCollapsed = false;
  userDetails!: any;
  constructor() { }

  ngOnInit() {
    this.UseDet();
  }


  UseDet(){ 
    
    const tokenData=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
    this.userDetails= tokenData.user.employee
    console.log(this.userDetails)
}
  

}
