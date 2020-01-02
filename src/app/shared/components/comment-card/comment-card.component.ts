import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Comment } from "../../../core/entities/tutorial/model/tutorial.model";
import { DataService } from "src/app/core/services/data/data.service";

@Component({
  selector: "app-comment-card",
  templateUrl: "./comment-card.component.html",
  styleUrls: ["./comment-card.component.less"]
})
export class CommentCardComponent implements OnInit {
  @Input()
  comment: Comment;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  likeComment() {
    this.dataService.likeComment(this.comment.id);
  }

  dislikeComment() {
    this.dataService.dislikeComment(this.comment.id);
  }
}
