import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { VideoComponent } from './video.component';
import { MvComponent } from './mv/mv.component';

const videoRoutes:Routes = [
    { 
        path: 'video',
        component: VideoComponent,
        children: [
            { path: '', redirectTo: '/videos', pathMatch: 'full'},
            { path: '/videos', component: VideosComponent},
            { path: '/mv', component: MvComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(videoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class VideoRoutingModule {}