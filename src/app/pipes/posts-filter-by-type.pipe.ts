import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'postsFilterByType'
})
export class PostsFilterByTypePipe implements PipeTransform {

  transform(items: [], type: string, structure: string): any {
    if (!items) { return []; }
    if (!type && !structure) { return items; }
    return items.filter ((it: Post) => {
      switch (type) {
        case 'en-cours':
          if (structure) {
            return ((new Date(it.date_val).getTime() >= new Date().getTime()) && (it.structure_name.toLowerCase().includes(structure)));
          } else {
            return ((new Date(it.date_val).getTime() >= new Date().getTime()));
          }
          break;
        case 'archives':
          if (structure) {
            return ((new Date(it.date_val).getTime() < new Date().getTime()) && (it.structure_name.toLowerCase().includes(structure)));
          } else {
            return ((new Date(it.date_val).getTime() < new Date().getTime()));
          }
          break;
        default:
          if (structure) {
            return (it.structure_name.toLowerCase().includes(structure));
          } else {
            return items;
          }
          break;
      }
    });
  }

}
