import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { DiscoverComponent } from './discover/discover.component';
import { AppRoutingModule } from './app-routing.module';
import { RecommendComponent } from './discover/recommend/recommend.component';
import { MiclistComponent } from './discover/miclist/miclist.component';
import { RadioStationComponent } from './discover/radio-station/radio-station.component';
import { RankingListComponent } from './discover/ranking-list/ranking-list.component';
import { SingerComponent } from './discover/singer/singer.component';
import { LatestMicComponent } from './discover/latest-mic/latest-mic.component';
import { DiscoverModule } from './discover/discover.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DiscoverComponent,
    RecommendComponent,
    MiclistComponent,
    RadioStationComponent,
    RankingListComponent,
    SingerComponent,
    LatestMicComponent
  ],
  imports: [
    BrowserModule,
    DiscoverModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
