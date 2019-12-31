import { Component, OnInit, Input } from "@angular/core";
import { Tutorial } from "src/app/core/entities/tutorial/model/tutorial.model";

@Component({
  selector: "app-tutorial-card",
  templateUrl: "./tutorial-card.component.html",
  styleUrls: ["./tutorial-card.component.less"]
})
export class TutorialCardComponent implements OnInit {
  @Input() tutorial: Tutorial;
  public showComments: Boolean = false;
  public showNewCommentLine: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggleComments() {
    this.showComments = !this.showComments;
  }

  toggleAddComment() {
    this.showNewCommentLine = !this.showNewCommentLine;
  }
}
