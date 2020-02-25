import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { SessionService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = [];
  p = 1;
  postsSubscription: Subscription;
  posts: Post[];



  constructor(private _postService : PostService, private _apiservice : SessionService, private router: Router) { }

  ngOnInit() {
      this.post = this._postService.getPosts();
      this.postsSubscription = this._apiservice.postsSubject.subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
      this._apiservice.emitPosts();
  }
 
  onDeleteBook(post: Post) {
    this._apiservice.removePosts(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/post', 'view', id]);
  }
  
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
