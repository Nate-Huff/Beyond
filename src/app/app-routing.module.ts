import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeLayoutComponent } from './body/Subscribe/subscribe-layout.component';
import { MainPageComponent } from './body/Default/mainpage.component';
import { HomeLayoutComponent } from './body/Home/home-layout.component';
import { ChangelogComponent } from './body/Changelog/changelog-layout.component';
import { NotificationsComponent } from './body/Notifications/notifications-layout.component';
import { MessagesComponent } from './body/Messages/messages-layout.component';

const routes:Routes = [
  {path: '', component: MainPageComponent},
  {path: 'Subscribe', component: SubscribeLayoutComponent},
  {path: 'Home', component: HomeLayoutComponent},
  {path: 'Changelog', component: ChangelogComponent},
  {path: 'Notifications', component: NotificationsComponent},
  {path: 'Messages', component: MessagesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
