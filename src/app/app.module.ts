import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { DataService } from './core/services/data/data.service';
import { FakeTopics } from './core/entities/topics/mocks/topics.mocks';
import {
  FakeTutorials,
  FakeComments
} from './core/entities/tutorial/mocks/tutorial.mock';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/reducers/reducers';
import { UserService } from './core/entities/user/services/user.service';

export function preLoadData(provider: UserService) {
  return () => provider.getCurrentUser();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [
    DataService,
    FakeTopics,
    FakeTutorials,
    FakeComments,
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: preLoadData,
      deps: [UserService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
