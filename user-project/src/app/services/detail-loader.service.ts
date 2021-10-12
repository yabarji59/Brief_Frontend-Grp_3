import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailLoaderService {
  static loadDetail(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  loadDetail(id:number){
    alert(id);
    //TODO : parse json (getById) 
    //open userDetail
  }
}
