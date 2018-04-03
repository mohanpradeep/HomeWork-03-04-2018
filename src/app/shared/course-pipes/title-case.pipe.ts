import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
    return null;

    return value.substr(0, 24) + '...';
  }

}
