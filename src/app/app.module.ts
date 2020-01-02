import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { FeaturesModule } from "./features/features.module";
import { SharedModule } from "./shared/shared.module";
import { DataService } from "./core/services/data/data.service";
import { FakeTopics } from "./core/entities/topics/mocks/topics.mocks";
import {
  FakeTutorials,
  FakeComments
} from "./core/entities/tutorial/mocks/tutorial.mock";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    FormsModule
  ],
  providers: [DataService, FakeTopics, FakeTutorials, FakeComments],
  bootstrap: [AppComponent]
})
export class AppModule {}
