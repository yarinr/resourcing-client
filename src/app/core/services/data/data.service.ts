import { Injectable } from '@angular/core';
import { FakeTopics } from '../../entities/topics/mocks/topics.mocks';
import { CategoryName } from '../../entities/category/model/category.model';
import { Topic } from '../../entities/topics/model/topics.model';
import { of, Observable } from 'rxjs';
import { FakeTutorials } from '../../entities/tutorial/mocks/tutorial.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private fakeTopics: FakeTopics,
    private fakeTutorials: FakeTutorials
  ) {}

  public getTopicsByCategories(
    categories: CategoryName[]
  ): Observable<Topic[]> {
    return of(
      this.fakeTopics.topics.filter(topic =>
        categories.includes(topic.category)
      )
    );
  }

  public getTopicsByName(topicName: string): Observable<Topic> {
    return of(this.fakeTopics.topics.find(topic => topic.name === topicName));
  }

  public getTutorialByTopic(topicName: string) {
    return of(
      this.fakeTutorials.tutorials.filter(tutorial =>
        tutorial.tags.some(tag => tag.toLowerCase() === topicName.toLowerCase())
      )
    );
  }
}
