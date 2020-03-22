import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DevOpsLinksPageComponent } from './dev-ops-links-page/dev-ops-links-page.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { ProgrammingLinksPageComponent } from './programming-links/programming-links-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NewTutorialDialogComponent } from './new-tutorial-dialog/new-tutorial-dialog.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AdminPageComponent,
    ProgrammingLinksPageComponent,
    DevOpsLinksPageComponent,
    LeaderBoardComponent,
    NewTutorialDialogComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class FeaturesModule {}
