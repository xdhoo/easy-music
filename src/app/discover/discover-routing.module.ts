import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { RecommendComponent } from './recommend/recommend.component';
import { DiscoverComponent } from './discover.component';
import { MiclistComponent } from './miclist/miclist.component';
import { SingerComponent } from './singer/singer.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { LatestMicComponent } from './latest-mic/latest-mic.component';
import { RadioStationComponent } from './radio-station/radio-station.component';
import { RecoDetailComponent } from './recommend/reco-detail/reco-detail.component';
import { SListComponent } from '../main/s-list/s-list.component';

const discoverRoutes:Routes = [
    { 
        path:'discover', 
        component:DiscoverComponent,
        children: [
            { path: '',redirectTo:'recommend',pathMatch:'full'},
            { path: 'recommend', component:RecommendComponent},
            // { path: ':id', component:RecoDetailComponent},
            { path: 'playlist',component:SListComponent},
            { path: 'miclist', component:MiclistComponent},
            { path: 'singer', component:SingerComponent},
            { path: 'rank' , component:RankingListComponent},
            { path: 'latestmic', component:LatestMicComponent},
            { path: 'radio', component:RadioStationComponent}
        ]
    },
];

@NgModule({
    imports:[
        RouterModule.forChild(discoverRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DiscoverRoutingModule{}