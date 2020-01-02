import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Tutorial } from "src/app/core/entities/tutorial/model/tutorial.model";
import { DataService } from "src/app/core/services/data/data.service";

@Component({
  selector: "app-tutorial-card",
  templateUrl: "./tutorial-card.component.html",
  styleUrls: ["./tutorial-card.component.less"]
})
export class TutorialCardComponent implements OnInit {
  @Input() tutorial: Tutorial;
  public showComments: boolean = false;
  public showNewCommentLine: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  toggleComments() {
    this.showComments = !this.showComments;
  }

  toggleAddComment() {
    this.showNewCommentLine = !this.showNewCommentLine;
  }

  upvoteTutorial(tutorialID: string) {
    this.dataService.upvoteTutorial(tutorialID);
  }

  addView(tutorialID: string) {
    this.dataService.updateTutorialViews(tutorialID);
  }
}
