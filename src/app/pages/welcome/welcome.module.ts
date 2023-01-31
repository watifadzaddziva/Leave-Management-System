import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { registerLocaleData } from '@angular/common';

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

registerLocaleData(en);

@NgModule({
  imports: 
  [WelcomeRoutingModule
  ,FormsModule,
  HttpClientModule,
  CommonModule,
  IconsProviderModule,
  NzLayoutModule,
  NzMenuModule,
 ],



  declarations: [WelcomeComponent, MainComponent, CalendarComponent, MyLeaveComponent, LeavesToApproveComponent,
  ReportsComponent, MyAccountComponent,],

  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
  
  exports: [WelcomeComponent, ]
})
export class WelcomeModule { }
