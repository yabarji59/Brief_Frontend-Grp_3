import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../beans/user';
import JSON_Data_User from '../../assets/data/JSON_Data_User.json';

@Injectable({
  providedIn: 'root'
})
/**
 * This service contains methods allowing components to interact one with another.
 */
export class UserService {
  
  constructor(private router:Router) { }

  /**
   * Get all the users of the Json Document
   * @returns an array of User objects
   */
  getUsersFromJson():User[]{
    let users:User[] =<User[]>JSON_Data_User.results;   
     return users;
  }
 
  /*this method loads the detail page after the user clicked on an item of the list, 
  passing that user's uuid through params*/
  loadDetailPage(uuid:string){   
    this.router.navigate(['/detail', uuid]);    
      
  }
  
 
  /**
   * Get a single user from the json document
   * @param uuid the uuid of the user to retrieve
   * @returns a User object, that can be null (but won't since we use an already-made json)
   */
  getUserById(uuid:string){
    let users:User[] = this.getUsersFromJson();
    let result:User|null = null;
    for(let user of users){
      if(user.login.uuid == uuid){
        result = user;
        break;
      }
    }
    return result;
  }
  
}

