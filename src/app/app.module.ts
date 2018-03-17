import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { JsonpModule } from '@angular/http';

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
import { VideoModule } from './video/video.module';
import { PipesModule } from './pipes/pipes.module';


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
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DiscoverModule,
    VideoModule,
    AppRoutingModule,
    NavModule,
    HttpClientModule,
    JsonpModule,
    PipesModule
  ],
  providers: [FooterService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
