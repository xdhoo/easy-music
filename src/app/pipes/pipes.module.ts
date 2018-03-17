import { NgModule } from '@angular/core';
import { TitleFormatPipe } from './title-format.pipe';
import { TimePipe } from './time.pipe';

@NgModule({
    imports:[],
    exports:[
        TitleFormatPipe,
        TimePipe
    ],
    declarations:[
        TitleFormatPipe,
        TimePipe
        
    ]
})

export class PipesModule {}