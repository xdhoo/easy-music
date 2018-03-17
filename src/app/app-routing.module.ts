import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DiscoverComponent } from './discover/discover.component';
import { VideoComponent } from './video/video.component';
import { FmComponent } from './fm/fm.component';
import { FriendsComponent } from './friends/friends.component';
import { MListComponent } from './main/m-list/m-list.component';

const routes:Routes = [
    { path: '', redirectTo: '/discover/recommend', pathMatch: 'full'},
    { path: 'discover', component: DiscoverComponent},
    { path: 'discover/:id',component:MListComponent},
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