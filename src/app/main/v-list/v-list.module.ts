import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule, Routes} from '@angular/router';

import { VListComponent } from './v-list.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule
    ],
    declarations:[
        VListComponent
    ],
    exports:[
        VListComponent
    ]
})

export class VListModule {}