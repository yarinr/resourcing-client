import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TutorialCardComponent } from './components/tutorial-card/tutorial-card.component';
import { TopicGridComponent } from './components/topic-grid/topic-grid.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { TutorialsPageComponent } from './components/tutorials-page/tutorials-page.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';
import { TagFilterPipe } from './pipes/tags-pipe/tags.pipe';
import { UrlValidationDirective } from './directives/newTopicIputValidation/url-validation.directive';

@NgModule({
  declarations: [
    TutorialCardComponent,
    TopicGridComponent,
    CommentCardComponent,
    TutorialsPageComponent,
    FilterPipe,
    TagFilterPipe,
    UrlValidationDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TopicGridComponent,
    TutorialCardComponent,
    CommentCardComponent,
    TutorialsPageComponent
  ],
  providers: [FilterPipe, TagFilterPipe]
})
export class SharedModule {}
