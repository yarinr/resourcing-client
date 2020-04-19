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
  selector: "app-new-admin-dialog",
  templateUrl: "./new-admin-dialog.component.html",
  styleUrls: ["./new-admin-dialog.component.less"]
})
export class NewAdminDialogComponent {
  newAdminForm: FormGroup;
  submitClicked = false;

  constructor(
    public dialogRef: MatDialogRef<NewAdminDialogComponent>,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.newAdminForm = this.formBuilder.group({
      userName: new FormControl("", Validators.required)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newAdminData) {
    this.submitClicked = true;

    if (this.newAdminForm.valid) {
      this.dataService.addAdmin(newAdminData.userName);
      this.dialogRef.close();
    }
  }

  get f() {
    return this.newAdminForm.controls;
  }
}
