import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users!:User[]; 
  srv!:UserService;
  constructor(service:UserService) { 
    
    console.log("list constructor");   
    this.srv=service;
    console.log("service instantiated");

   }

  ngOnInit(): void {
    console.log("list initiated");
    this.users= <User[]>this.srv.getUsersFromJson();
    console.log("printing users: "+this.users);
  }

}
