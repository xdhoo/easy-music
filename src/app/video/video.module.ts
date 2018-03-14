import { NgModule } from '@angular/core';
import { VideosComponent } from './videos/videos.component';
import { MvComponent } from './mv/mv.component';
import { VideoRoutingModule } from './video-routing.module';

@NgModule({
    imports:[
        VideoRoutingModule
    ],
    declarations:[
        VideosComponent,
        MvComponent
    ] 
})

export class VideoModule {}