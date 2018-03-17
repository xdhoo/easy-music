import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'titleFormat'})
export class TitleFormatPipe implements PipeTransform{
    transform(value:string,len:number):string{
        if(value.length > len){
            return value.substr(0,len) + '...';
        }else{
            return value;
        }
    }
}