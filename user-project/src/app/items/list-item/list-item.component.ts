import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DetailComponent } from 'src/app/pages/detail/detail.component';
import { DetailLoaderService } from 'src/app/services/detail-loader.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  idUser:number;
  userName:string;
  userFirstName:string;
  userEmail:string;
  userProfilePicture:string;
  userAgeIcon!:string;

  constructor(idUser:number,
    userName:string,
    userFirstName:string,
    userEmail:string,
    userProfilePicture:string,
    userAge:number, private loadDetail : DetailLoaderService) {
       this.idUser=idUser;
       this.userName=userName;
       this.userFirstName=userFirstName;
       this.userEmail=userEmail;
       this.userProfilePicture=userProfilePicture;
       this.setAgeIcon(userAge);
     }

  ngOnInit():void {
    }

  clickOnItem(id:number){
    this.loadDetail.loadDetail(id);
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
