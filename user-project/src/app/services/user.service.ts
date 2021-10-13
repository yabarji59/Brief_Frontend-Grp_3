import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../beans/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private router:Router) { }

    
  getUsersFromJson():User[]{
     //TODO : Mireille
     // Replace this code with accurate code. 
    let users:User[]=[]
     return users;
  }
 
  populateItem(user:User):User{
    return user;
  }

 //this method loads the detail page after the user clicked on an item of the list
  loadDetailPage(user:User){    
    this.router.navigate(['/detail', {user:JSON.stringify(user)}]);      
  }
  
  //Get user object from a json 
  parseUserFromRoute(json:string) : User{
    let user: User =  JSON.parse(json);
    return user;    
  }
}

