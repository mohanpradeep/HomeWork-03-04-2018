import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any, limst: number) {
    if (value.length > limst) {
    return value.substr(0, limst) + '...';
    }
    return value;
  }

}
