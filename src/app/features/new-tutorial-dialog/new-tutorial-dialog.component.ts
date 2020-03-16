import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-tutorial-dialog',
  templateUrl: './new-tutorial-dialog.component.html',
  styleUrls: ['./new-tutorial-dialog.component.less']
})
export class NewTutorialDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewTutorialDialogComponent>) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
