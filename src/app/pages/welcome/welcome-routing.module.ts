import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LeavesToApproveComponent } from './leaves-to-approve/leaves-to-approve.component';
import { MainComponent } from './main/main.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { ReportsComponent } from './reports/reports.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, 
  children: [
    {path: 'main', component: MainComponent},
    {path : 'calendar', component: CalendarComponent},
    {path: 'myLeave', component: MyLeaveComponent},
    {path: 'leavesToApprove', component: LeavesToApproveComponent},
    {path: 'reports', component: ReportsComponent},
    {path : 'myAccount', component: MyAccountComponent}
  
  ]

},
  // { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
