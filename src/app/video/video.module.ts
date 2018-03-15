import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosComponent } from './videos/videos.component';
import { MvComponent } from './mv/mv.component';
import { VideoRoutingModule } from './video-routing.module';
import { PVideoComponent } from './p-video/p-video.component';
import { VListModule } from '../main/v-list/v-list.module';

@NgModule({
    imports:[
        VideoRoutingModule,
        CommonModule,
        VListModule
    ],
    declarations:[
        VideosComponent,
        MvComponent,
        PVideoComponent
    ] 
})

export class VideoModule {}