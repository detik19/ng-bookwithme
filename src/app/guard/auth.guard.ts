import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url: string;

  private handleAuthState() {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/rentals']);
      return false;
    }
    return true;
  }

  private handleNotAuthState() {
    if (this.isLoginOrRegister()) {
      return true;
    }
    return false;
  }
  private isLoginOrRegister() {
    return this.url.includes('login') || this.url.includes('register');
  }
  constructor(private auth: AuthService,
    private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot ,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.url = state.url;

    if (this.auth.isAuthenticated()) {
      return this.handleAuthState();
    } else {
      return  this.handleNotAuthState();
    }


  }
}
