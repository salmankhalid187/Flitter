import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireList, AngularFireObject } from 'angularfire2/database'
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { Post } from '../../model/post'
import { AuthService } from '../../services/auth/auth.service'




@Injectable()
export class UsersService {

  private basePath: string = '/posts';
  users:AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase) { 
  }

  /* This Method is Reading All users  */

  public readUsersListObservable():Observable<any[]>  {

    this.users = this.db.list(this.basePath + '/');

    return this.users.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).map( (arr) => { return arr.reverse(); } );

  }

}
