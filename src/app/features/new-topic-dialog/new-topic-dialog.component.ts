import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { DataService } from "src/app/core/services/data/data.service";
import { Topic } from "src/app/core/entities/topics/model/topics.model";
import { CategoryName } from "src/app/core/entities/category/model/category.model";

@Component({
  selector: "app-new-topic-dialog",
  templateUrl: "./new-topic-dialog.component.html",
  styleUrls: ["./new-topic-dialog.component.less"]
})
export class NewTopicDialogComponent implements OnInit {
  newTopicForm: FormGroup;
  submitClicked = false;
  categories = Object.keys(CategoryName)
    .map(key => CategoryName[key])
    .filter(v => typeof v === "string") as string[];

  constructor(
    public dialogRef: MatDialogRef<NewTopicDialogComponent>,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.newTopicForm = this.formBuilder.group({
      name: new FormControl("", Validators.required),
      category: "programming",
      icon: ""
    });
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newTopicData) {
    // Process new topic data here
    this.submitClicked = true;
    if (this.newTopicForm.valid) {
      const newTopic: Topic = this.createTopic(newTopicData);
      this.dataService.addNewTopic(newTopic);
      this.dialogRef.close();
    }
  }

  createTopic(newTopicData): Topic {
    return {
      name: newTopicData.name,
      icon: newTopicData.icon,
      category: newTopicData.category
    };
  }

  get f() {
    return this.newTopicForm.controls;
  }
}
