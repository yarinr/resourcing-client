import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './layouts/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SideBarComponent } from "./layouts/side-bar/side-bar.component";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

import * as fromUser from './entities/user/reducer/user.reducer';

@NgModule({
  declarations: [NavigationBarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [FooterComponent, NavigationBarComponent, SideBarComponent]
    StoreModule.forFeature(fromUser.UserReducerToken, fromUser.reducer)
  ]
})
export class CoreModule {}
