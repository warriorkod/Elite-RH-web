import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {
      titre: "Clean up challenge",
      description: "Le president Macky Sall organise un set setal national au Senegal.",
      date : "01/01/2020"
    },
    {
      titre: "Sadio Mane Ballon d'or",
      description: "Sadio Mane a remporte le ballon d'or africain le 07 Janvier 2020.",
      date : "05/01/2020"
    },
    {
      titre: "Clean up challenge",
      description: "Le president Macky Sall organise un set setal national au Senegal.",
      date : "10/01/2020"
    },
    {
      titre: "Sadio Mane Ballon d'or",
      description: "Sadio Mane a remporte le ballon d'or africain le 07 Janvier 2020.",
      date : "08/01/2020"
    },
    {
      titre: "Clean up challenge",
      description: "Le president Macky Sall organise un set setal national au Senegal.",
      date : "03/01/2020"
    },
    {
      titre: "Sadio Mane Ballon d'or",
      description: "Sadio Mane a remporte le ballon d'or africain le 07 Janvier 2020.",
      date : "01/10/2020"
    },{
      titre: "Clean up challenge",
      description: "Le president Macky Sall organise un set setal national au Senegal.",
      date : "01/12/2020"
    },
    {
      titre: "Sadio Mane Ballon d'or",
      description: "Sadio Mane a remporte le ballon d'or africain le 07 Janvier 2020.",
      date : "01/01/2020"
    }
  ];
  constructor() { }

  getPosts(){
    return this.posts;
  }
}
