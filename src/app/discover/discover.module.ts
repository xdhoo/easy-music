import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DiscoverRoutingModule } from './discover-routing.module';
import { RecoDetailComponent } from './recommend/reco-detail/reco-detail.component';
import { SMenuComponent } from '../main/s-menu/s-menu.component';
import { RecommendComponent } from './recommend/recommend.component';
import { MiclistComponent } from './miclist/miclist.component';
import { RadioStationComponent } from './radio-station/radio-station.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { SingerComponent } from './singer/singer.component';
import { LatestMicComponent } from './latest-mic/latest-mic.component';
import { ListsModule } from '../main/lists/lists.module';
import { VListModule } from '../main/v-list/v-list.module';
import { TagsModule } from '../main/tags/tags.module';
import { RankModule } from '../main/rank/rank.module';
import { HttpClientJsonpModule } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        RouterModule,
        DiscoverRoutingModule,
        CommonModule,
        TagsModule,
        ListsModule,
        VListModule,
        RankModule,
        HttpClientJsonpModule,
        PipesModule
    ],
    declarations: [
        RecommendComponent,
        MiclistComponent,
        RadioStationComponent,
        RankingListComponent,
        SingerComponent,
        LatestMicComponent,
        RecoDetailComponent,
        SMenuComponent,
    ],
})

export class DiscoverModule {}