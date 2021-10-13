import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { User } from 'src/app/beans/user';
import { DetailComponent } from 'src/app/pages/detail/detail.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit { 
  userAgeIcon:string;

  constructor(userService : UserService) {
     }

  ngOnInit():void {
     //TODO : initialize variables with loadDetail.
    
    }

  clickOnItem(id:number){
  }

  // Determines which icon to display depending on the user's Age.
  setAgeIcon(userAge:number):void{
   if(userAge<40){
        this.userAgeIcon = "./assets/img/age_icons/rookie.svg";
   }
   else if(userAge>=40 && userAge<=60){   
        this.userAgeIcon = "./assets/img/age_icons/advance.svg";
   }
   else if (userAge>60){
     this.userAgeIcon ="./assets/img/age_icons/expert.svg";
   }

   else {
     this.userAgeIcon ="N/C";
   }

  }
}
