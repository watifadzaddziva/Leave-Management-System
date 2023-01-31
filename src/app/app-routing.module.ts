import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login',  component:LoginComponent , },
  { path: 'register',  component:RegisterComponent },
  { path: '', canActivate:[AuthGuard], children: [
    { path: 'welcome' , loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
   

  ]},
  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
