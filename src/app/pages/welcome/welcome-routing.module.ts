import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeavesToApproveComponent } from './leaves-to-approve/leaves-to-approve.component';
import { MainComponent } from './main/main.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { ReportsComponent } from './reports/reports.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, 
  children: [
    {path: '', component: MainComponent},
    {path: 'main', component: MainComponent},
    {path : 'calendar', component: CalendarComponent},
    {path: 'myLeave', component: MyLeaveComponent},
    {path: 'leavesToApprove', component: LeavesToApproveComponent},
    {path: 'reports', component: ReportsComponent},
    {path : 'myAccount', component: MyAccountComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'employee-details/:id', component: EmployeeDetailsComponent}
  
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
