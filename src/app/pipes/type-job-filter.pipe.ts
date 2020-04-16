import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'typeJobFilter'
})
export class TypeJobFilterPipe implements PipeTransform {

  transform(items: [], type: string): any[] {
    if(!items) return [];
    if(!type) return items;
    return items.filter ((it:Post) => {
        return (it.type === type);
    });  
  }

}
