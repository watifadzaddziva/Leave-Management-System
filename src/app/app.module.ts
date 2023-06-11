import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { DatePipe, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './services/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { HomePageComponent } from './auth/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { VerificationCodeComponent } from './auth/verification-code/verification-code.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    VerificationCodeComponent,
    SetNewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzCheckboxModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    ButtonModule,
    NzCardModule,
    FormlyModule,
    FormlyNgZorroAntdModule,
    NzSelectModule,
    FullCalendarModule,
    NgxPermissionsModule.forRoot(),
  RouterModule,

  ],

  
  providers: [
    NzNotificationService, AuthService, JwtHelperService,NgxPermissionsService,DatePipe,
    { provide:  JWT_OPTIONS, useValue: JWT_OPTIONS},
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
