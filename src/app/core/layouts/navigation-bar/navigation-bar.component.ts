import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTutorialDialogComponent } from 'src/app/features/new-tutorial-dialog/new-tutorial-dialog.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less']
})
export class NavigationBarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog() {
    const dialogRef = this.dialog.open(NewTutorialDialogComponent, {
      width: '520px'
    });
    dialogRef.afterClosed().subscribe(data => console.log(data));
  }
}
