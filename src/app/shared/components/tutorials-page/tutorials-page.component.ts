import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap, reduce, tap } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-tutorials-page',
  templateUrl: './tutorials-page.component.html',
  styleUrls: ['./tutorials-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  video = false;
  bookOrText = false;
  beginners = false;
  advanced = false;
  enabledTags = [];
  defaultTags = ['video', 'book', 'beginners', 'advanced'];

  topic$ = this.route.params.pipe(
    map(param => (param as { topic: string }).topic),
    flatMap(topicName => this.dataService.getTopicsByName(topicName))
  );
  tutorials$ = this.route.params.pipe(
    map(param => (param as { topic: string }).topic),
    flatMap(topicName => this.dataService.getTutorialByTopic(topicName))
  );
  tagsCount$ = this.tutorials$.pipe(
    map(tutorials =>
      tutorials.reduce((acc, tutorial) => {
        tutorial.tags.forEach(tag => {
          if (acc.has(tag)) {
            acc.set(tag, acc.get(tag) + 1);
          } else {
            acc.set(tag, 1);
          }
        });
        return acc;
      }, new Map<string, number>())
    )
  );
  otherTagsCount$ = this.tagsCount$.pipe(
    map(tagsMap => {
      this.defaultTags.forEach(tag => tagsMap.delete(tag));
      return tagsMap;
    })
  );

  toggleTags(tag) {
    if (this.enabledTags.includes(tag)) {
      this.enabledTags = this.enabledTags.filter(arrTag => arrTag !== tag);
    } else {
      this.enabledTags.push(tag);
    }
    this.enabledTags = this.enabledTags.splice(0);
  }

  ngOnInit() {}
}
