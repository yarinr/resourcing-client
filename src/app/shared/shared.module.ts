import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TutorialCardComponent } from "./components/tutorial-card/tutorial-card.component";
import { TopicGridComponent } from "./components/topic-grid/topic-grid.component";

@NgModule({
  declarations: [TutorialCardComponent, TopicGridComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TopicGridComponent,
    TutorialCardComponent
  ]
})
export class SharedModule {}
