import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  // CanActivateChild
  // CanDeactivate
  // CanLoad
  // Resolve

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      console.log('auth guard passes');
      return true;
    } else {
      console.log('auth guard blocks you');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
