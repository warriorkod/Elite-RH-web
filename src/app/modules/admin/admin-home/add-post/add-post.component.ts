import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  addForm: FormGroup;
  submitted = false;

  constructor(private _postService : PostService, private router: Router,  private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildAddPostForm();
  }

  buildAddPostForm(){
    this.addForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addPost(post){
    console.log(event);
    this._postService.posts.push(post);
    this.router.navigate(['/admin_home_elith_rh/post_list']);
    
  }

}
