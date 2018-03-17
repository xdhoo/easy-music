import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankComponent } from './rank.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    imports:[
        CommonModule,
        PipesModule
    ],
    declarations:[
        RankComponent
    ],
    exports:[
        RankComponent
    ]
})

export class RankModule {}