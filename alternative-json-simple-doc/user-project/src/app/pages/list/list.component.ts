import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';
import { UserService } from 'src/app/services/user.service';

/**
 * This component represents the list of users displayed on the homepage.
 * This is where all the users are retrieved, and each user will be inputed in child 
 * component "ListItemComponent".
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users!:User[]; 
  srv!:UserService;
  
  constructor(service:UserService) { 
      
    this.srv=service;

   }

  ngOnInit(): void {
    //Get the whole list of users from JSON
    this.users= <User[]>this.srv.getUsersFromJson();
  }

}
