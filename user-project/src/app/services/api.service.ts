import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../beans/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _url: string = '/assets/data/user.json';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }
}
