import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [];
  p = 1;


  constructor(private _postService : PostService) { }

  ngOnInit() {
      this.posts = this._postService.getPosts();
  }

  onClick(index){
    console.log(index);
  }

  filter(type, value){
    console.log(value);

    switch(type) {
      case("title"):{
        
      }
      case("date"):{

      }
    }
  }
}
