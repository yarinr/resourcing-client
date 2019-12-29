import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './feature/home-page/home-page.component';
import { DevOpsLinksPageComponent } from './feature/dev-ops-links-page/dev-ops-links-page.component';
import { LeaderBoardComponent } from './feature/leader-board/leader-board.component';
import { AdminPageComponent } from './feature/admin-page/admin-page.component';
import { ProgramingLinksPageComponent } from './feature/programing-links/programing-links-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'programing', component: ProgramingLinksPageComponent },
  { path: 'devOps', component: DevOpsLinksPageComponent },
  { path: 'LeaderBoard', component: LeaderBoardComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
