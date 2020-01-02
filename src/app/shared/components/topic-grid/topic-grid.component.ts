import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { CategoryName } from 'src/app/core/entities/category/model/category.model';
import { DataService } from 'src/app/core/services/data/data.service';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/core/entities/topics/model/topics.model';

@Component({
  selector: 'app-topic-grid',
  templateUrl: './topic-grid.component.html',
  styleUrls: ['./topic-grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicGridComponent implements OnInit {
  @Input() categories: CategoryName[] = [];
  @Input() title: string;
  public search = '';

  topics$: Observable<Topic[]>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.topics$ = this.dataService.getTopicsByCategories(this.categories);
  }
}
