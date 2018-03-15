import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'iTime'})
export class TimePipe implements PipeTransform {
    transform(value: number):string {
        value = parseInt(value + '');
        let minTime;
        let secondTime;
        let _value;
        if(value > 60 ){
            minTime = parseInt(value/60 + '');
            secondTime = parseInt(value % 60 + '');
            minTime = this.format(minTime);            
            secondTime = this.format(secondTime);
            return minTime + ':' +secondTime;
        } else {
            _value = this.format(value);
            return '00:' + _value;
        }
    }
    format(value){
        if(value < 10) {
            return '0' + value;
        } else {
            return value;
        }
    }
}