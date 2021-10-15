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
    let users = this.http.get<User[]>(this._url);
    return users;
  }
 
  getById(id: string): User {
    console.log("get by id "+id);
    let oList: Observable<User[]> = this.getAll();
    let list: User[] = [];
    console.log("O LIST="+oList);
    oList.subscribe(data => list = data as User[]);
    console.log("user list="+list);
    let user!: User;
    for (let u of list) {
      if (u.login.uuid == id) {
        user = u;
      }
    }
    return user;
  } 

  //this method loads the detail page after the user clicked on an item of the list
  loadDetailPage(id: string) {
    console.log("route loaded");
    this.router.navigate(['/detail', id]);
  }
}
