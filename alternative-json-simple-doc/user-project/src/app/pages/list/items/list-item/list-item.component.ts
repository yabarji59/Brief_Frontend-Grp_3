import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
/**
 * This component represents an item of the list of users.
 */
export class ListItemComponent implements OnInit { 

  // The input means the data is put in there by the parent. Here, the list, when calling the user.
  @Input() user!:User;
  userAgeIcon!:string;
  userSrv: UserService; 
  

  constructor(userService : UserService) {
      this.userSrv=userService;
     }

  ngOnInit():void {
      this.setAgeIcon(this.user.dob.age)
    }
    

  /**
   * When you click on an intem in the template, loads the details page of that user.
   * @param uuid the id of the user that is passed as a parameter to be able to load details on next page.
   */ 
  clickOnItem(uuid:string){
    this.userSrv.loadDetailPage(uuid);
  }

  /**
   * Determines which icon to display depending on the user's Age.
   *  @param userAge the age of the user
   */ 
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
