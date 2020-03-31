import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/entities/user/services/user.service';
import { User } from 'src/app/core/entities/user/model/user.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {
  user: Promise<User>;
  constructor(userService: UserService) {
    this.user = userService.getCurrentUser();
  }

  ngOnInit() {}
}
