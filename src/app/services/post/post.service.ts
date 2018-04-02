import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireList, AngularFireObject } from 'angularfire2/database'
// import { firestore } from 'firebase/app';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { Post } from '../../model/post'
import { AuthService } from '../../services/auth/auth.service'


@Injectable()
export class PostService {

  private basePath: string = '/posts';
  posts:AngularFireList<Post> = null;
  constructor(private db: AngularFireDatabase, private authService: AuthService) { 
  }
  
  /*

  Complete CRUD system

  */

  /* This Method is Creating new post  */

  public createPost(post: Post): void  {

    let dateNow:Object = firebase.database.ServerValue.TIMESTAMP;
    post.timeStamp = dateNow; 
    this.posts.push(post).then(error => { console.log(error); });

  }

  /* This Method is Reading All post  */

  public readPostsListObservable(userName:string):Observable<any[]>  {

    this.posts = this.db.list(this.basePath + '/' +  userName,
      ref => ref.orderByChild('timeStamp'));

    return this.posts.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).map( (arr) => { return arr.reverse(); } );
  }

  /* This Method is Deleting a post  */

  public deletePost(key:string)
  {
    this.posts.remove(key);
  }

  /* This Method is Updating a post  */

  public updatePost(key:string, post:Post)
  {
    this.posts.update(key, post);

  }

}
