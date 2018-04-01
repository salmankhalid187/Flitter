import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: '',
    email:'',
    password: '',
    confirmPassword:''
  };

  serverError:string = null;

  constructor(private registerService: RegisterService, private router: Router) { }

  registerWithUserName() {

    /* Adding domain name while user registration because
     firebase only provides authentication using email. Its a kind of hack way */

    this.user.email = this.user.username + '@flitterapp.com';
    this.registerService.registerWithEmail(this.user.email, this.user.password)
      .then((res) => {
        this.router.navigate(['dashboard']);
      })
      .catch((err) => this.serverError = err);
  }

  ngOnInit() {
  }

}
