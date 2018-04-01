import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    email:'',
    password: ''
  };

serverError:string = null;
  
  constructor(private authService: AuthService, private router: Router) {
  }

    signInWithEmail() {

    /* Firebase only allows autentication with email.
     This is hack for creating User name from email. */

      this.user.email = this.user.username + '@flitterapp.com';
      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          /* Once authenticated user being redirected to Dashboard page */          
          this.router.navigate(['dashboard']);
        })
        .catch((err) => this.serverError = err);
    }

    signInWithGoogle() {

    /* Firebase also provides
     authentication method through Google */

      this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));

    }

  ngOnInit() {    

    this.authService.GetFireBaseUser().subscribe(
        (user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          } else {
            }
        }
      );
  }

}
