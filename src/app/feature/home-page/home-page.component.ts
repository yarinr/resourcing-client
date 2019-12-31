import { Component, OnInit } from '@angular/core';
import { FakeTopics } from 'src/app/core/entities/topics/mocks/topics.mocks';
import { Topic } from 'src/app/core/entities/topics/model/topics.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  constructor() {}
  topics: Topic[] = new FakeTopics().topics;
  ngOnInit() {}
}
