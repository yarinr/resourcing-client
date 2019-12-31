import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './features/home-page/home-page.component';
import { DevOpsLinksPageComponent } from './features/dev-ops-links-page/dev-ops-links-page.component';
import { LeaderBoardComponent } from './features/leader-board/leader-board.component';
import { AdminPageComponent } from './features/admin-page/admin-page.component';
import { ProgrammingLinksPageComponent } from './features/programming-links/programming-links-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'programming', component: ProgrammingLinksPageComponent },
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
