import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features';
import { NavbarComponent } from './navbar/navbar';
import { MainPageComponent } from './body/Default/mainpage.component';
import { AppRoutingModule } from './app-routing.module';
import { SubscribeLayoutComponent } from './body/Subscribe/subscribe-layout.component';
import { ChangelogComponent } from './body/Changelog/changelog-layout.component';
import { NotificationsComponent } from './body/Notifications/notifications-layout.component';
import { MessagesComponent } from './body/Messages/messages-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    NavbarComponent,
    MainPageComponent,
    SubscribeLayoutComponent,
    ChangelogComponent,
    NotificationsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
