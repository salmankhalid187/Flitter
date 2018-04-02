import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

    /*
    It reads the current state from Firebase Auth service 
    */

    canActivate() {
      if  ( this.authService.isLoggedIn() ) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }

}
