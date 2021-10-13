import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/beans/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public user!: User;

  constructor(private route: ActivatedRoute, private userService:UserService) {
   }

  ngOnInit(){
    let userAsJson = this.route.snapshot.paramMap.get('user');
    if(userAsJson!=null){           
    this.user = this.userService.parseUserFromRoute(userAsJson);
    }    
  }

}
