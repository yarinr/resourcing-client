import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { DataService } from "src/app/core/services/data/data.service";

@Component({
  selector: "app-new-tag-dialog",
  templateUrl: "./new-tag-dialog.component.html",
  styleUrls: ["./new-tag-dialog.component.less"]
})
export class NewTagDialogComponent {
  newTagForm: FormGroup;
  submitClicked = false;

  constructor(
    public dialogRef: MatDialogRef<NewTagDialogComponent>,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.newTagForm = this.formBuilder.group({
      name: new FormControl("", Validators.required)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newTagData) {
    this.submitClicked = true;
    if (this.newTagForm.valid) {
      this.dataService.addNewTag(newTagData);
      this.dialogRef.close();
    }
  }

  get f() {
    return this.newTagForm.controls;
  }
}
