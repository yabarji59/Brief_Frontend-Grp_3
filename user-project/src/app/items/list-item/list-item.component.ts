import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  /* @Input() user?:User;*/
  userAgeIcon!: string;
  userSrv: UserService;

  constructor(userService: UserService) {
    this.userSrv = userService;
  }

  ngOnInit(): void {
    //TODO : waiting for JSON parse.
  }

  clickOnItem(usr: User) {
    this.userSrv.loadDetailPage(usr);
  }

  // Determines which icon to display depending on the user's Age.
  setAgeIcon(userAge: number): void {
    if (userAge < 40) {
      this.userAgeIcon = './assets/img/age_icons/rookie.svg';
    } else if (userAge >= 40 && userAge <= 60) {
      this.userAgeIcon = './assets/img/age_icons/advance.svg';
    } else if (userAge > 60) {
      this.userAgeIcon = './assets/img/age_icons/expert.svg';
    } else {
      this.userAgeIcon = 'N/C';
    }
  }
}
