import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ListsComponent } from './lists.component';
import { TitleFormatPipe } from '../../pipes/title-format.pipe';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    imports:[
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations:[
        ListsComponent
    ],
    exports:[
        ListsComponent
    ]
})

export class ListsModule {}