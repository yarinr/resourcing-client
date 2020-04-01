import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePageComponent } from "./features/home-page/home-page.component";
import { DevOpsLinksPageComponent } from "./features/dev-ops-links-page/dev-ops-links-page.component";
import { LeaderBoardComponent } from "./features/leader-board/leader-board.component";
import { AdminPageComponent } from "./features/admin-dashboard/admin-page.component";
import { ProgrammingLinksPageComponent } from "./features/programming-links/programming-links-page.component";
import { TutorialsPageComponent } from "./shared/components/tutorials-page/tutorials-page.component";
import { DesignLinksPageComponent } from "./features/design-links-page/design-links-page.component";

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "programming", component: ProgrammingLinksPageComponent },
  { path: "devOps", component: DevOpsLinksPageComponent },
  { path: "design", component: DesignLinksPageComponent },
  { path: "LeaderBoard", component: LeaderBoardComponent },
  { path: "admin", component: AdminPageComponent },
  { path: "totorail/:topic", component: TutorialsPageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
