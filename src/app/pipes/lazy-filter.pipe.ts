import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';
import { SessionService } from '../services';

@Pipe({
  name: 'lazyFilter'
})
export class LazyFilterPipe implements PipeTransform {

  constructor(private apiservice: SessionService) {}

  transform(items: [], size: number): any[] {
    this.apiservice.setCurrentLength(items.length);
    if (!items) { return []; }
    if (!size) { return items; }
    return items.filter ((it: Post) => {
        const inddex = items.findIndex(value => {
          if (it === value) {
            return true;
          }
        });
        return (inddex < size);
    });
  }

}
