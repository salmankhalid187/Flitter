import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Post } from '../../model/post'
import { PostService } from '../../services/post/post.service'
import { AuthService } from '../../services/auth/auth.service' 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  items: Observable<any[]>;
  userName:string = "";

  constructor(private postService:PostService, private authService:AuthService, private router: Router) { 
  }

  ngOnInit() {

    this.userName = this.getUserName();
    this.items = this.postService.readPostsListObservable(this.userName);
  }

  createPost(inputTitle,inputBody):void
  {
    let post:Post = new Post();
    post.title = inputTitle.value;
    post.body = inputBody.value;
    this.postService.createPost(post);
    inputTitle.value = "";
    inputBody.value = "";
  }

  logOut():void{
    this.authService.logout();
  }

  openPublicPage():void {

    let finalpath = 'users/' + this.userName;
    this.router.navigate([finalpath]);

  }

  getUserName():string {

    /* Firebase only allows autentication with email. This is hack for creating User name from email. */

    let email = this.authService.userDetails.email;
    let username = email.split("@");

    /* NOTE: Firebase doesnt allow '.' Period in path */

    var re = /\./g; 
    var newstr = username[0].replace(re, ","); 

    console.log(newstr);
    return newstr; 
  }

}
