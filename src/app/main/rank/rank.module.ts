import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankComponent } from './rank.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports:[
        CommonModule,
        PipesModule,
        RouterModule
    ],
    declarations:[
        RankComponent
    ],
    exports:[
        RankComponent
    ]
})

export class RankModule {}