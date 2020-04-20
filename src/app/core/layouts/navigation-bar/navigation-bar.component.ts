import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NewTutorialDialogComponent } from "src/app/features/new-tutorial-dialog/new-tutorial-dialog.component";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.less"]
})
export class NavigationBarComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewTutorialDialogComponent, {
      width: "520px"
    });
    dialogRef.afterClosed().subscribe(data => console.log(data));
  }
}
