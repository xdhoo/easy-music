import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'titleFormat'})
export class TitleFormatPipe implements PipeTransform{
    transform(value:string):string{
        if(value.length > 13){
            return value.substr(0,13) + '...';
        }else{
            return value;
        }
    }
}