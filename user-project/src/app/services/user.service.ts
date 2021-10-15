import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../beans/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = './assets/data/user.json';

  constructor(private router: Router, private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }
  /*this.userService.getAll().subscribe((data) => (this.listuser = data));*/

  getById(id: string): User {
    let list: User[] = [];
    this.getAll().subscribe((data) => (list = data));
    let user!: User;
    for (let u of list) {
      if (u.login.uuid == id) {
        user = u;
      }
    }
    return user;
  }

  populateItem(user: User): User {
    return user;
  }

  //this method loads the detail page after the user clicked on an item of the list
  loadDetailPage(id: string) {
    this.router.navigate(['/detail', id]);
  }
}
