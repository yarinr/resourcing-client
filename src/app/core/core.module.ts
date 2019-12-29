import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationBarComponent } from "./layouts/navigation-bar/navigation-bar.component";
import { FooterComponent } from "./layouts/footer/footer.component";

@NgModule({
  declarations: [NavigationBarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent, NavigationBarComponent]
})
export class CoreModule {}
