import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './layouts/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './entities/user/reducer/user.reducer';

@NgModule({
  declarations: [NavigationBarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(fromUser.UserReducerToken, fromUser.reducer)
  ],
  exports: [FooterComponent, NavigationBarComponent]
})
export class CoreModule {}
