import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { DatePipe, registerLocaleData } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { MainComponent } from './main/main.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { LeavesToApproveComponent } from './leaves-to-approve/leaves-to-approve.component';
import { ReportsComponent } from './reports/reports.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select'; 
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SetEmployeesComponent } from './components/set-employees/set-employees.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { FormlyModule } from '@ngx-formly/core';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { AllLeavesComponent } from './all-leaves/all-leaves.component';
import { AdminsComponent } from './admins/admins.component';
import { LoaderComponent } from './loader/loader.component';
import { AllEmployeesComponent } from './reports/all-employees/all-employees.component';
import { AllLeavesReportsComponent } from './reports/all-leaves-reports/all-leaves-reports.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SetDepartmentComponent } from './components/set-department/set-department.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { DepartmentsDetailsComponent } from '../departments-details/departments-details.component';
import { SetHodComponent } from './components/set-hod/set-hod.component';
import { HodPageComponent } from '../hod-page/hod-page.component';
import { AllPayslipsComponent } from './all-payslips/all-payslips.component';
import { SetPayslipComponent } from './components/set-payslip/set-payslip.component';
import { ViewPayslipComponent } from './view-payslip/view-payslip.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';


registerLocaleData(en);


@NgModule({
  imports: 
  [WelcomeRoutingModule
  ,FormsModule,
  RouterModule,
  HttpClientModule,
  CommonModule,
  IconsProviderModule,
  NzLayoutModule,
  NzMenuModule,
  NzDrawerModule,
  NzFormModule,
 NzDatePickerModule ,
 NzButtonModule,
 NzInputModule ,
 NzSelectModule,
 ReactiveFormsModule,
 NzTableModule,
 NzCalendarModule,
 NzBadgeModule,
 NzCardModule,
 NzPopoverModule,
 NzAlertModule ,
 NzModalModule,
 FormlyNgZorroAntdModule,
 FormlyModule,
 NzUploadModule,
 NzPopconfirmModule,
 FullCalendarModule,
 NgxPermissionsModule,
 FlexLayoutModule,
 NzInputNumberModule

 

 ],



  declarations: [WelcomeComponent, MainComponent, CalendarComponent, MyLeaveComponent, LeavesToApproveComponent,
  ReportsComponent, MyAccountComponent, EmployeesComponent, EmployeeDetailsComponent, SetEmployeesComponent, AllLeavesComponent, AdminsComponent, LoaderComponent, AllEmployeesComponent, AllLeavesReportsComponent, SetDepartmentComponent,DepartmentsComponent, DepartmentsDetailsComponent, SetHodComponent ,HodPageComponent, AllPayslipsComponent, SetPayslipComponent, ViewPayslipComponent],

  providers: [NzMessageService,NgxPermissionsService,DatePipe,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
  
  exports: [WelcomeComponent,SetEmployeesComponent ]
})
export class WelcomeModule { }
