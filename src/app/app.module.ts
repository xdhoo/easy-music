import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { JsonpModule } from '@angular/http';
import { FormsModule} from '@angular/forms'

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
import { VideoModule } from './video/video.module';
import { PipesModule } from './pipes/pipes.module';
import { AudioService } from './service/audio.service';
import { SListComponent } from './main/s-list/s-list.component';
import { GetDataService } from './service/get-data.service';


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
    SListComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    DiscoverModule,
    VideoModule,
    AppRoutingModule,
    NavModule,
    HttpClientModule,
    JsonpModule,
    PipesModule,
  ],
  providers: [AudioService,GetDataService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
