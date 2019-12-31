import { Injectable } from '@angular/core';
import { FakeTopics } from '../../entities/topics/mocks/topics.mocks';
import { CategoryName } from '../../entities/category/model/category.model';
import { Topic } from '../../entities/topics/model/topics.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private fakeTopics: FakeTopics) {}

  /**
   * getTopicsByCategories
categories : Categories   */
  public getTopicsByCategories(categories: CategoryName[]): Topic[] {
    return this.fakeTopics.topics.filter(topic =>
      categories.includes(topic.category)
    );
  }
}
