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
import { AllLeavesComponent } from './all-leaves/all-leaves.component';
import { AllEmployeesComponent } from './reports/all-employees/all-employees.component';
import { AllLeavesReportsComponent } from './reports/all-leaves-reports/all-leaves-reports.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate:[AuthGuard], 
  children: [
    {path: '', component: MyLeaveComponent},
    {path : 'calendar', component: CalendarComponent},
    {path: 'my-leaves', component: MyLeaveComponent},
    {path:'allLeaves',component:AllLeavesComponent},
    {path: 'leavesToApprove', component: LeavesToApproveComponent},
    {path: 'reports', component: ReportsComponent,
    children:
    [
      {path:'all-employees-report',component:AllEmployeesComponent},
      {path:'all-leaves-report',component:AllLeavesReportsComponent},

    ]
  },
    {path : 'myAccount', component: MyAccountComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'employee-details/:id', component: EmployeeDetailsComponent},
 
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class WelcomeRoutingModule { }
