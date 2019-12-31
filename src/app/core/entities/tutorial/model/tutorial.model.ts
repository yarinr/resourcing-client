export interface Tutorial {
  id: string;
  name: string;
  description: string;
  url: string;
  submitter: User;
  upVote: number;
  downVote: number;
  comments: Comment[];
  date: Date;
  tags: string[];
  views: number;
}

export interface Comment {
  id: string;
  date: Date;
  content: string;
  upVote: number;
  downVote: number;
  replies?: Comment[];
  submmiter: User;
}

export interface User {
  userName: string;
  name: string;
  tutorials?: Tutorial[];
  points: number;
  bookmarks?: Tutorial[];
  upVotes?: Comment | Tutorial[];
}
