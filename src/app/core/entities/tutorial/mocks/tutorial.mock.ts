import { Comment, Tutorial } from "../model/tutorial.model";

export class FakeComments {
  public comments: Comment[] = [
    {
      id: "comment1",
      date: new Date(),
      content: "the content of the comment",
      upVote: 7,
      downVote: 2,
      submmiter: {
        userName: "ofir_cohen",
        name: "ofir cohen",
        points: 0
      },
      replies: [
        {
          id: "reply1",
          date: new Date(),
          content: "this is a reply for the comment above",
          upVote: 7,
          downVote: 2,
          submmiter: {
            userName: "ofir_cohen",
            name: "ofir cohen",
            points: 0
          }
        }
      ]
    }
  ];
}

export class FakeTutorials {
  private fakeComments = new FakeComments();
  public tutorials: Tutorial[] = [
    {
      id: "1",
      name: "python for beginners",
      description: "learn how to bla bla bla",
      url: "https://www.python.org/",
      submitter: {
        userName: "ofir_cohen",
        name: "ofir cohen",
        points: 0
      },
      upVote: 1,
      downVote: 2,
      comments: this.fakeComments.comments,
      date: new Date(),
      tags: ["python", "beginners", "video"],
      views: 10
    },
    {
      id: "2",
      name: "python for advanced users",
      description: "learn how to bla bla bla",
      url: "https://www.python.org/",
      submitter: {
        userName: "ofir_cohen",
        name: "ofir cohen",
        points: 0
      },
      upVote: 1,
      downVote: 2,
      comments: this.fakeComments.comments,
      date: new Date(),
      tags: ["python", "advanced", "book"],
      views: 10
    }
  ];
}
