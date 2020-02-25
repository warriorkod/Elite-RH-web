import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services';
import { Post } from 'src/app/models/post';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  addForm: FormGroup;
  submitted = false;
  postsSubscription: Subscription;
  posts: Post[];

  constructor(private _apiservice : SessionService, private router: Router,  private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildAddPostForm();
    this.postsSubscription = this._apiservice.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this._apiservice.emitPosts();
  }

  buildAddPostForm(){
    this.addForm = this.formBuilder.group({
      titre: ['', Validators.required],
      lieu: ['', Validators.required],
      type: ['', Validators.required],
      categorie: ['', Validators.required],
      fiche: ['', Validators.required],
      competences: ['', Validators.required],
      date_val: ['', Validators.required]
    });
  }

  addPost(object){
    const post = new Post();
    post.titre = object.titre;
    post.lieu = object.lieu;
    post.type = object.type;
    post.categorie = object.categorie;
    post.date_val = object.date_val;
    post.fiche = object.fiche;
    post.competences = object.competences;
    console.log(post);
    this._apiservice.createNewPost(post);
    this.router.navigate(['/admin_home_elith_rh/post_list']);
    
  }

}
