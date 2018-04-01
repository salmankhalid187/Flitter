import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostService } from '../../services/post/post.service'
import { AuthService } from '../../services/auth/auth.service' 
import { Post } from '../../model/post'


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() isEditable: Boolean = false;
  posts: Observable<any[]>;
  constructor(private route: ActivatedRoute, private postService:PostService, private authService:AuthService) { }
  userName:string = "";

  ngOnInit() {

    /*
    User name will be fetched from Authentication service for Dashboard.
    And for public page it will be fetched from URL
    */

    if(this.isEditable)
    {
      this.userName = this.getUserNameFromAuthService();
      this.posts = this.postService.readPostsListObservable(this.userName);
    }
    else
    {
      this.userName = this.getUserIdFromUrl();
      this.posts = this.postService.readPostsListObservable(this.userName);
    }
  }

  createPost(inputTitle,inputBody):void {
    let post:Post = new Post();
    post.title = inputTitle.value;
    post.body = inputBody.value;
    this.postService.createPost(post);
  }

  getUserIdFromUrl(): string {

    /*
    User id is being fetched from URL
    */

    var username:string = this.route.snapshot.paramMap.get('id');
    return username;
  }

  getUserNameFromAuthService():string {

    /* Firebase only allows autentication with email.
     This is hack for creating User name from email. */

    let email = this.authService.userDetails.email;
    let username = email.split("@");

    /* NOTE: Firebase doesnt allow '.' Period in path */

    var re = /\./g; 
    var newstr = username[0].replace(re, ","); 

    console.log(newstr);
    return newstr; 
  }

}
