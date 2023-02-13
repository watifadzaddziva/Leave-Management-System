import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private authService: AuthService, private router : Router){

  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  //   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   const url = state.url;
  //   console.log(this.validateRoles(route.data['role']))
  //   if (!this.authService.isAuthenticated() || !this.validateRoles(route.data['role'])){
  //     // this.router.createUrlTree(['/login'], { queryParams: { returnUrl: url } });
  //     this.router.navigate(['login'])
  //     return false;
  //   }
       
  //   // return this.router.navigate(['/welcome']);
  //   return true;
  // }

  
//   canActivate(
  //  route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  //   {
      //  return this.checkLoggedIn(state.url);
      //  } 
       
       
// Use the segments to build the full route  // when using canLoad  
  //  canLoad(route: Route, segments: UrlSegment[]): boolean {
  //   return this.checkLoggedIn(segments.join('/')); } 



    // checkLoggedIn(url: string): boolean {
    //       if (this.authService.isLoggedIn) {
    //         return true; } // Retain the attempted URL for redirection    
    //       this.authService.redirectUrl = url;this.router.navigate(['/login']);
    //       return false;  }



  validateRoles(roles: unknown[]): boolean {
    if (!roles) return true;
    const valid = roles.some(role => this.authService.permissions.includes(role));
    if (!valid)
    console.log('accept')
      // this.nzNotification.warning('Unauthorized Role', `This content authorised for : <b>${roles.join(', ')}</b>`,
      //   { nzAnimate: true, nzDuration: 10000 });
    return valid;
  }

  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canDeactivate(
  //   component: unknown,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canMatch(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
}
