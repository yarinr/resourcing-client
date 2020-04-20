import { Injectable } from "@angular/core";
import { FakeTopics } from "../../entities/topics/mocks/topics.mocks";
import {
  CategoryName,
  defaultTags
} from "../../entities/category/model/category.model";
import { Topic } from "../../entities/topics/model/topics.model";
import { of, Observable } from "rxjs";
import {
  FakeTutorials,
  FakeComments
} from "../../entities/tutorial/mocks/tutorial.mock";
import { Tutorial } from "../../entities/tutorial/model/tutorial.model";
import { Comment } from "../../entities/tutorial/model/tutorial.model";
import { User } from "../../models/user";

@Injectable({
  providedIn: "root"
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

  public getAllTags(): Observable<string[]> {
    return of(
      this.fakeTutorials.tutorials
        .map(tutorial => tutorial.tags)
        .reduce((acc, val) => acc.concat(val), [])
        .filter(tag => !defaultTags.includes(tag))
    );
  }

  public addNewTutorial(tutorial: Tutorial) {
    this.fakeTutorials.tutorials.push(tutorial);
  }

  public addNewTopic(topic: Topic) {
    // TODO: when connected to real data, create a new topic.
    this.fakeTopics.topics.push(topic);
  }

  public addNewTag(name: string) {
    // TODO: when connected to real data, create a new tag.
  }

  public addAdmin(userName: string) {
    // TODO: when connected to real data, create a new user.
  }

  public upvoteTutorial(tutorialId: string) {
    const currentTutorial: Tutorial = this.fakeTutorials.tutorials.find(
      tutorial => tutorial.id === tutorialId
    );
    currentTutorial.upVote = currentTutorial.upVote + 1;
  }

  public likeComment(commentId: string) {
    // let currentComment: Comment = this.fakeComments.comments.find(
    //   comment => comment.id === commentId
    // );
    // currentComment.upVote = currentComment.upVote + 1;
    // currentTutorial.upVote = currentTutorial.upVote + 1;

    // currently works only for one level commrnt without replys
    const currentTutorial = this.fakeTutorials.tutorials.find(tutorial => {
      if (tutorial.comments.find(comment => comment.id === commentId)) {
        return true;
      }
      return false;
    });
    const currComment = currentTutorial.comments.find(
      comment => comment.id === commentId
    );
    currComment.upVote = currComment.upVote + 1;
  }

  public dislikeComment(commentId: string) {
    // let currentComment: Comment = this.fakeComments.comments.find(
    //   comment => comment.id === commentId
    // );
    // currentComment.upVote = currentComment.upVote - 1;
    const currentTutorial = this.fakeTutorials.tutorials.find(tutorial => {
      if (tutorial.comments.find(comment => comment.id === commentId)) {
        return true;
      }
      return false;
    });
    const currComment = currentTutorial.comments.find(
      comment => comment.id === commentId
    );
    currComment.downVote = currComment.downVote - 1;
  }

  public updateTutorialViews(tutorialId: string) {
    const currentTutorial: Tutorial = this.fakeTutorials.tutorials.find(
      tutorial => tutorial.id === tutorialId
    );
    currentTutorial.views = currentTutorial.views + 1;
  }
}
