import {Pipe, PipeTransform} from '@angular/core';

declare const accentFold: any;

@Pipe({
  name: 'accentFold'
})
export class AccentFoldPipe implements PipeTransform {

  transform(value: string): string {
    return accentFold(value);
  }

}
