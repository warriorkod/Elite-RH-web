import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  
  jsonPost = {
    titre: "",
    description: "",
    date: "",
  }

  exampleJsonObject = 
  {
    first_name: "Jane", 
    last_name: "Doe",
    age: 25,
    is_company: false,
    address: {
      street_1: "123 Main St.",
      street_2: null,
      city: "Las Vegas", 
      state: "NV", 
      zip_code: "89123"
    },
    phone_numbers: [
      { number: "702-123-4567",
        type: "cell"
      },
      {
        number: "702-987-6543",
        type: "work" 
      }
    ],
    notes: ""
  };

  router : Router;

  constructor(private _postService : PostService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  setJsonForm(){
    
  }
  

  addPost(event){
    console.log(event);

    let result = this._postService.posts.push(event);
    console.log(result);
    if(result){
      this.router.navigate(['/home/post/list']);
    }
  }

}
