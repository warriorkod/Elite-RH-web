import { Pipe, PipeTransform } from '@angular/core';
import { PostService } from '../services/post.service';

@Pipe({
  name: 'filterPost'
})
export class FilterPostPipe implements PipeTransform {

  transform(value: any[], args: String): any[] {
    console.log("Valeur = "+value+" arg= "+args)

    if(!value) return [];
    if(!args) {
      console.log("arg vide");
      return value;
    }

    args = args.toLowerCase();

    return value.filter(it => { 
      // if(it.titre)
      console.log(it.titre);
      return it.titre.toLowerCase().includes(args)
    });
  }

}
