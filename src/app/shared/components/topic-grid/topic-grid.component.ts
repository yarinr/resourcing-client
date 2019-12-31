import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/core/entities/category/model/category.model';
import { Topic } from 'src/app/core/entities/topics/model/topics.model';
import { FakeTopics } from 'src/app/core/entities/topics/mocks/topics.mocks';

@Component({
  selector: 'app-topic-grid',
  templateUrl: './topic-grid.component.html',
  styleUrls: ['./topic-grid.component.less']
})
export class TopicGridComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() title: string;
  topics: Topic[] = new FakeTopics().topics;

  constructor() {
    this.topics.filter(topic => this.categories.includes(topic.category));
  }

  ngOnInit() {}
}
