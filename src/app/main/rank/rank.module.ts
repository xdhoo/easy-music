import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankComponent } from './rank.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        RankComponent
    ],
    exports:[
        RankComponent
    ]
})

export class RankModule {}