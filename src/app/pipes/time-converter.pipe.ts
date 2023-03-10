import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes'
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: any): any {
    if(value == null) {
      return null;
    } else {
      return (value / 60).toFixed(0);
    }
  }

}
