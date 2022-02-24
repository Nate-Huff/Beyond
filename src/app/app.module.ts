import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features';
import { NavbarComponent } from './navbar/navbar';
import { MainPageComponent } from './body/Default/mainpage.component';
import { AppRoutingModule } from './app-routing.module';
import { SubscribeLayoutComponent } from './body/Subscribe/subscribe-layout.component';
import { ChangelogComponent } from './body/Changelog/changelog-layout.component';
import { NewPlayerGuideComponent } from './body/NewPlayerGuide/newplayerguide-layout.component';
import { MessagesComponent } from './body/Messages/messages-layout.component';
import { PathwayComponent } from './body/Messages/Pathway/pathway.component';
import { FunctionComponent } from './body/Messages/Function/function.component';
import { InboxComponent } from './body/Messages/Inbox/inbox.component';
import { FiltersComponent } from './body/Messages/Filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    NavbarComponent,
    MainPageComponent,
    SubscribeLayoutComponent,
    ChangelogComponent,
    NewPlayerGuideComponent,
    MessagesComponent,
    PathwayComponent,
    InboxComponent,
    FunctionComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
