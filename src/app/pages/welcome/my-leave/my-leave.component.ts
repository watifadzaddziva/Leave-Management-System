import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit{


  ngOnInit(): void {

  }

  data = [
    {
      fromDate: 	'Thu, 02 Feb',
      toDate: 'Fri, 03 Feb',
      leaveType: 'Sick Leave',
      noOfDays:'1',
      reason:'Sick Leave',
      status:'REJECTED'
    },
    {
      fromDate: 'Wed, 01 Feb',
      toDate: 'Thu, 03 Feb',
      leaveType: 'Vaccation',
      noOfDays:'2',
      reason:'Vaccation',
      color: 'info',
      status:'REJECTED'
    },
    {
      fromDate: 'Mon,30 Jan ',
      toDate: 'Thu, 02 Feb',
      leaveType: 'Unpaid',
      noOfDays:'3',
      reason:' take a rest for few days',
      status:'REJECTED'
    },
  ];

}
