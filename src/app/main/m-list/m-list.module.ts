import { NgModule } from '@angular/core'
import { CommonModule} from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { MListComponent } from './m-list.component';

@NgModule({
    imports:[
        PipesModule,
        CommonModule
    ],
    declarations:[
        MListComponent
    ],
    exports:[
        MListComponent        
    ],
})

export class MListModule {}