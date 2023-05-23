import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RoleGuardService } from './services/role-guard.service';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login',  component:LoginComponent , },
  {path:'forgot-password',component:ForgotPasswordComponent},
  { path: 'register',  component:RegisterComponent },
  // { path: 'welcome', canActivate:[AuthGuard, ],
  //    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

{ path: 'welcome' , loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
{path:'404', component: PageNotFoundComponent},
  {path : '**',redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
