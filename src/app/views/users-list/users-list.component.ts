import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service'
import { Observable } from 'rxjs/Observable';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<any[]>;

  constructor( private usersservice:UsersService) { }

  ngOnInit() {
    this.users = this.usersservice.readUsersListObservable();
  }

}

// @Pipe({name: 'keys'})
// export class KeysPipe implements PipeTransform {
//   transform(value, args:string[]) : any {
//     let keys = [];
//     for (let key in value) {
//       keys.push({key: key, value: value[key]});
//     }
//     return keys;
//   }
// }