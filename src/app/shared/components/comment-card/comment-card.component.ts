import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "../../../core/entities/tutorial/model/tutorial.model";

@Component({
  selector: "app-comment-card",
  templateUrl: "./comment-card.component.html",
  styleUrls: ["./comment-card.component.less"]
})
export class CommentCardComponent implements OnInit {
  @Input()
  comment: Comment;

  constructor() {}

  ngOnInit() {}
}
