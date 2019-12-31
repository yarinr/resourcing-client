import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './layouts/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationBarComponent, FooterComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [FooterComponent, NavigationBarComponent]
})
export class CoreModule {}
