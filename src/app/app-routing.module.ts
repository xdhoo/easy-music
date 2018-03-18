import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DiscoverComponent } from './discover/discover.component';
import { VideoComponent } from './video/video.component';
import { FmComponent } from './fm/fm.component';
import { FriendsComponent } from './friends/friends.component';
import { SListComponent } from './main/s-list/s-list.component';

const routes:Routes = [
    { path: '', redirectTo: '/discover/recommend', pathMatch: 'full'},
    { path: 'discover', component: DiscoverComponent},
    { path: 'playlist',component:SListComponent},
    { path: 'video', component: VideoComponent},
    { path: 'fm', component: FmComponent},
    { path: 'friends', component: FriendsComponent}
];

@NgModule({
    imports:[
        //MListModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}