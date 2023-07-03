import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMore',
})
export class ShowMorePipe implements PipeTransform {
  transform(value: string, ...args: number[]): unknown {
    let transformedString = '';
    if (value) {
      transformedString = value.slice(0, args[0]);
    }
    return transformedString + '...';
  }
}
