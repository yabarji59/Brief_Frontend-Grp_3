import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public listuser: User[] = [];
  userAgeIcon!: string;
  userSrv: UserService;

  constructor(private userService: UserService) {
    this.userSrv = userService;
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data) => (this.listuser = data));
  }
}
