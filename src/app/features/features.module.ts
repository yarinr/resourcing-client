import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { AdminPageComponent } from "./admin-dashboard/admin-page.component";
import { DevOpsLinksPageComponent } from "./dev-ops-links-page/dev-ops-links-page.component";
import { LeaderBoardComponent } from "./leader-board/leader-board.component";
import { ProgrammingLinksPageComponent } from "./programming-links/programming-links-page.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { NewTutorialDialogComponent } from "./new-tutorial-dialog/new-tutorial-dialog.component";
import { DesignLinksPageComponent } from "./design-links-page/design-links-page.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { NewAdminDialogComponent } from "./new-admin-dialog/new-admin-dialog.component";
import { NewTagDialogComponent } from "./new-tag-dialog/new-tag-dialog.component";
import { NewTopicDialogComponent } from "./new-topic-dialog/new-topic-dialog.component";
import { MatSelectModule } from "@angular/material/select";
import { MaterialFileInputModule } from "ngx-material-file-input";

@NgModule({
  declarations: [
    HomePageComponent,
    AdminPageComponent,
    ProgrammingLinksPageComponent,
    DevOpsLinksPageComponent,
    LeaderBoardComponent,
    NewTutorialDialogComponent,
    NewAdminDialogComponent,
    NewTagDialogComponent,
    NewTopicDialogComponent,
    DesignLinksPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MaterialFileInputModule
  ]
})
export class FeaturesModule {}
