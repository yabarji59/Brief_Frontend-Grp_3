import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/beans/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

/**
 * This component displays the details of a user.
 */
export class DetailComponent implements OnInit {
   user:User | any;
   service!:UserService;
   uuid!:string;


  constructor(private route: ActivatedRoute, private userService:UserService) {
    this.service=userService;
    //here we load the uuid from the route params
    this.uuid = <string>this.route.snapshot.paramMap.get('uuid');
    
   }

  ngOnInit(){
    //thanks to the uuid we load the user from the json
     this.user = this.service.getUserById(this.uuid);
    }    
  }


