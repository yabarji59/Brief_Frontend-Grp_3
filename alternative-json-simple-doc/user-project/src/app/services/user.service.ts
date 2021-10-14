import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../beans/user';
import JSON_Data_User from '../../assets/data/JSON_Data_User.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private router:Router) { }

  //Get the users from the Json
  getUsersFromJson():User[]{
    let users:User[] =<User[]>JSON_Data_User.results;   
     return users;
  }
 
  /*this method loads the detail page after the user clicked on an item of the list, 
  passing that user's uuid through params*/
  loadDetailPage(uuid:string){   
    console.log("loadDetail uuid : "+uuid) ;
    this.router.navigate(['/detail', uuid]);    
      
  }
  
  //Get user object from a json 
  getUserById(uuid:string){
    console.log(uuid);
    let users:User[] = this.getUsersFromJson();
    let result:User|null = null;
    for(let user of users){
      console.log("for : "+user.login.uuid);
      if(user.login.uuid == uuid){
        console.log('if :'+user.login.uuid);
        result = user;
        break;
      }
    }
    return result;
  }
  
}

