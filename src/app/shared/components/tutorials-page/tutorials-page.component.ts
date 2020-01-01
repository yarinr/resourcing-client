import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { Topic } from 'src/app/core/entities/topics/model/topics.model';
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
  topic$ = this.route.params.pipe(
    map(param => (param as { topic: string }).topic),
    flatMap(topicName => this.dataService.getTopicsByName(topicName))
  );
  tutorials$ = this.route.params.pipe(
    map(param => (param as { topic: string }).topic),
    flatMap(topicName => this.dataService.getTutorialByTopic(topicName))
  );
  ngOnInit() {}
}
