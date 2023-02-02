import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login',  component:LoginComponent , },
  // { path: '',  component:WelcomeComponent  },
  { path: 'register',  component:RegisterComponent },
  { path: '', component: WelcomeComponent,
    children: [
    { path: 'welcome' , loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },

  ]
},
// { path: 'welcome' , loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
