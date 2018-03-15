import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { DiscoverComponent } from './discover/discover.component';
import { AppRoutingModule } from './app-routing.module';
import { DiscoverModule } from './discover/discover.module';
import { FmComponent } from './fm/fm.component';
import { VideoComponent } from './video/video.component';
import { FriendsComponent } from './friends/friends.component';
import { NavModule } from './main/nav/nav.module';
import { FooterService } from './main/footer/footer.service';
import { TimePipe } from './main/time.pipe';
import { VideoModule } from './video/video.module';


@NgModule({
  declarations: [    
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DiscoverComponent,    
    FmComponent,
    VideoComponent,
    FriendsComponent,
    TimePipe    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DiscoverModule,
    VideoModule,
    AppRoutingModule,
    NavModule
  ],
  providers: [FooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
