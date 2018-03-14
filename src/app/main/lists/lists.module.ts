import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ListsComponent } from './lists.component';

@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ],
    declarations:[
        ListsComponent
    ],
    exports:[
        ListsComponent
    ]
})

export class ListsModule {}