import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ListsComponent } from './lists.component';
import { TitleFormatPipe } from '../../pipes/title-format.pipe';

@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ],
    declarations:[
        ListsComponent,
        TitleFormatPipe    

    ],
    exports:[
        ListsComponent
    ]
})

export class ListsModule {}