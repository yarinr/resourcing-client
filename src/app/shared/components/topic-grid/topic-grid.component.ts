import { Component, OnInit, Input } from '@angular/core';
import { CategoryName } from 'src/app/core/entities/category/model/category.model';
import { Topic } from 'src/app/core/entities/topics/model/topics.model';
import { FakeTopics } from 'src/app/core/entities/topics/mocks/topics.mocks';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-topic-grid',
  templateUrl: './topic-grid.component.html',
  styleUrls: ['./topic-grid.component.less']
})
export class TopicGridComponent implements OnInit {
  @Input() categories: CategoryName[] = [];
  @Input() title: string;
  topics: Topic[] = new FakeTopics().topics;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.topics = this.dataService.getTopicsByCategories(this.categories);
  }
}
