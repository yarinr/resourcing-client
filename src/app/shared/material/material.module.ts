import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import {CdkTableModule} from '@angular/cdk/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatTableModule, MatSortModule],
  exports: [MatToolbarModule, MatMenuModule, MatButtonModule, MatTableModule, MatSortModule]
})
export class MaterialModule {}
