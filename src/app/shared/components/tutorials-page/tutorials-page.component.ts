import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-tutorials-page',
  templateUrl: './tutorials-page.component.html',
  styleUrls: ['./tutorials-page.component.less']
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

  topic$ = this.route.params.pipe(
    map(param => (param as { topic: string }).topic),
    flatMap(topicName => this.dataService.getTopicsByName(topicName))
  );
  tutorials$ = this.route.params.pipe(
    map(param => (param as { topic: string }).topic),
    flatMap(topicName => this.dataService.getTutorialByTopic(topicName))
  );
  getEnabledTags() {
    const tags: string[] = [];
    if (this.video) {
      tags.push('video');
    }
    if (this.bookOrText) {
      tags.push('book');
    }
    if (this.beginners) {
      tags.push('beginners');
    }
    if (this.advanced) {
      tags.push('advanced');
    }
    this.enabledTags = tags;
  }

  ngOnInit() {}
}
