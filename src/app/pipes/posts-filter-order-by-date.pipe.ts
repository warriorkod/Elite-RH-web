import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'postsFilterOrderByDate'
})
export class PostsFilterOrderByDatePipe implements PipeTransform {

  transform(item: []): any {
    return item.sort((a: Post, b: Post) => {
      return new Date(b.date_create).getTime() - new Date(a.date_create).getTime();
    });
  }

}
