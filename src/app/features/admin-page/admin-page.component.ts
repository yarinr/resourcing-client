import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/entities/user/services/user.service';
import { User } from 'src/app/core/entities/user/model/user.model';
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/core/entities/user/reducer/user.reducer';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {
  user$ = this.store.select(getUser);

  constructor(private userService: UserService, private store: Store<User>) {}

  ngOnInit() {
    this.userService.getCurrentUser();
  }
}
