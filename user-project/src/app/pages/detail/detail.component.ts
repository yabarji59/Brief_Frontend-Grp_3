import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/beans/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  user!: User;
  uuid:string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
      //here we load the uuid from the route params
      this.uuid = <string>this.route.snapshot.paramMap.get('uuid');
  }

  ngOnInit() {   
      this.user = <User>this.userService.getById(this.uuid);
      console.log(this.user);   
  }
}
